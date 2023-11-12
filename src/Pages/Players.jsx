import React, { useState, useEffect } from 'react';

import { client } from "../client";



export default function Players() {

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
      {!players ? <h2 className='max-w-7xl text-3xl mx-auto pt-20 px-5'>
        Loading...
      </h2> :
        <>
          <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10'>
            {players.map((player) => (
              <article key={player.slug.current}>
                {player.image && <img
                  src={player.image.asset.url}
                  alt={player.image.alt}
                  loading="lazy"
                  className='rounded-xl md:h-72 w-full object-cover'
                />}
              </article>
            ))}
          </section>
        </>}
    </>
  )
}

