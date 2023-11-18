import React, { useState, useEffect } from 'react';
import { client } from "../client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

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
          crop,
          hotspot,
          alt
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
                <div className="relative group overflow-hidden  m-auto rounded-xl shadow-lg shadow-gray-700">
                  {player.image && <img
                    src={urlFor(player.image).fit("max").size(1000, 1000).url()}
                    alt={player.name}
                    loading="lazy"
                    className='rounded-xl md:h-90 w-full object-cover overflow-hidden'
                  />}
                  <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                  <div className=" flex flex-col items-center absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                    <div className="absolute w-full flex place-content-center">
                      <p className="capitalize font-serif font-bold text-5xl text-center  text-white mt-10">{player.bio[0].children[0].text}</p>
                    </div>
                    
                    <div className="absolute bottom-4 text-white capitalize font-serif font-bold text-3xl text-center">{player.name}</div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </>}
    </>
  )
}

