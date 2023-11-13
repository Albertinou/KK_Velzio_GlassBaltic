import React, { useState, useEffect } from 'react';
import { client } from "../client";
import imageUrlBuilder from '@sanity/image-url';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"

import { FreeMode, Pagination } from "swiper/modules"


const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}

export default function PlayerSlider() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        client.fetch(
            `*[_type == "player"] {
        name,
        slug,
        bio,
        image {
          asset -> {
            _id,
            url
          },
          alt,
        },
      }`
        ).then((data) => {
            setPlayers(data);
        }).catch(console.error);

    }, [])



    return (
        <>
            <h1 className='max-w-7xl text-3xl mx-auto py-20 px-5'>
                KOMANDA
            </h1>

            <div>
                <Swiper
                    breakpoints={{
                        340: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        700: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        }
                    }}

                    freeMode={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[FreeMode, Pagination]}
                    className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-20'
                >

                    {!players ? <h2 className='max-w-7xl text-3xl mx-auto pt-20 px-5'>
                        Loading...
                    </h2> :
                        <>
                            <section className=''>
                                {players.map((player) => (
                                    <SwiperSlide key={player.slug.current}>
                                        {player.image && <img
                                            src={urlFor(player.image).width(1000).height(1000).url()}
                                            alt={player.name}
                                            loading="lazy"
                                            className='rounded-xl md:h-90 w-full object-cover'
                                        />}
                                    </SwiperSlide>
                                ))}
                            </section>

                        </>}
                </Swiper>
            </div>
            <div className='max-w-7xl mx-auto px-5'>
                <Link to="/players" className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 md:w-auto'>
                    Visi žaidėjai
                </Link>
            </div>
        </>
    )
}


