import React, { useState, useEffect } from 'react';
import { client } from "../client";
import { format } from 'date-fns'
import imageUrlBuilder from '@sanity/image-url';
import { Link } from 'react-router-dom';
import ClosestGameTime from '../components/ClosestGameTime';


// const currTime = format(new Date(Date()), 'yyyy-MM-dd HH:mm');
const currTime = (new Date(Date())).toJSON();

const builder = imageUrlBuilder(client)
function urlFor(source) {
    return builder.image(source)
}

export default function ScheduleHomepage() {

    const [schedule, SetSchedule] = useState([]);

    useEffect(() => {
        client.fetch(
            `*[_type == "schedule"] {
        title,
        slug,
        location,
        publishedAt,

        "homeTeam": komanda -> name,
        "homeTeamImage": komanda -> image {
            asset -> {
            _id,
            url
          },
            crop,
            hotspot,
            alt
          },

        "awayTeam": komanda2 -> name,
        "awayTeamImage": komanda2 -> image {
            asset -> {
            _id,
            url
          },
            crop,
            hotspot,
            alt
          },


      } | order(publishedAt asc)`

        ).then((data) => {
            SetSchedule(data.filter(game => (game.publishedAt > currTime)).slice(0, 3));
            
        }).catch(console.error);

    }, []);



    return (
        <>
            <h1 className='max-w-7xl text-3xl mx-auto px-5 pt-20 pb-10'>
                TVARKARAŠTIS
            </h1>
            <ClosestGameTime/>
            <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10'>
                {schedule.map((game) => (
                    <Link to={"/schedule"} key={game.slug.current}>
                        <article  className='border border-blue-700 rounded-xl flex bg-white align-middle justify-between shadow-md  shadow-gray-700 hover:shadow-lg hover:shadow-gray-800 transition duration-300 hover:scale-105'>
                            <div className=' p-2 flex justify-between items-center w-full'>
                                <div className='flex flex-col justify-center items-center'>
                                    {game.homeTeamImage && <img
                                        src={urlFor(game.homeTeamImage).fit("clip").size(500, 600).url()}
                                        alt={game.homeTeam.name}
                                        loading="lazy"
                                        className='max-w-[100px] object-contain'
                                    />}
                                    <div className='pt-4'>
                                        <p className='text-sm'>
                                            {game.homeTeam}
                                        </p>
                                    </div>
                                </div>

                                <div className='py-4 flex flex-col justify-center items-center flex-wrap text-center'>
                                    <p>
                                        {format(new Date(game.publishedAt), 'yyyy-MM-dd HH:mm')}
                                    </p>
                                    <p>{game.location}</p>
                                </div>

                                <div className='flex flex-col justify-center items-center'>
                                    {game.awayTeamImage && <img
                                        src={urlFor(game.awayTeamImage).fit("clip").size(500, 600).url()}
                                        alt={game.awayTeam.name}
                                        loading="lazy"
                                        className='max-w-[100px] object-contain'
                                    />}

                                    <div className='pt-4'>
                                        <p className='text-sm'>
                                            {game.awayTeam}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))
                }
            </section>
        </>
    )
}
