import React, { useState, useEffect } from 'react';
import { client } from "../client";
import { format } from 'date-fns'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)
function urlFor(source) {
    return builder.image(source)
}

export default function Schedule() {

    const [schedule, SetSchedule] = useState([]);

    useEffect(() => {
        client.fetch(
            `*[_type == "schedule"] {
        title,
        slug,
        body,
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
            SetSchedule(data.slice(0, 3));
        }).catch(console.error);

    }, [])

    return (
        <>
            <h1 className='max-w-7xl text-3xl mx-auto px-5 py-20'>
                TVARKARAŠTIS
            </h1>
            <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10'>
                {schedule.map((game) => (
                    <article key={game.slug.current} className='border border-blue-700 rounded-xl flex bg-white align-middle justify-between'>

                        <div className=' p-2 flex justify-between items-center w-full'>
                            
                            <div className='flex flex-col justify-center items-center'>
                                {game.homeTeamImage && <img
                                    src={urlFor(game.homeTeamImage).fit("clip").size(500, 500).url()}
                                    alt={game.homeTeam.name}
                                    // loading="lazy"
                                    className='rounded-xl md:h-32 h-32 w-32 object-cover'
                                />}

                                <div className='py-4'>
                                    <p className='text-sm'>
                                        {game.homeTeam}
                                    </p>
                                </div>

                            </div>


                            <div className='py-4 flex flex-col justify-center items-center'>
                                <p>
                                    {format(new Date(game.publishedAt), 'yyyy-MM-dd')}
                                </p>
                                <p>{format(new Date(game.publishedAt), 'HH:mm')}</p>
                            </div>


                            <div className='flex flex-col justify-center items-center'>
                                {game.awayTeamImage && <img
                                    src={urlFor(game.awayTeamImage).fit("clip").size(500, 500).url()}
                                    alt={game.awayTeam.name}
                                    loading="lazy"
                                    className='rounded-xl md:h-32 h-32 w-32 object-cover'
                                />}

                                <div className='py-4'>
                                    <p className='text-sm'>
                                        {game.awayTeam}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </article>
                ))}
            </section>
        </>
    )
}
