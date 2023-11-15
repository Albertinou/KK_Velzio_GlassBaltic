import React, { useState, useEffect } from 'react';
import { client } from "../client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function SponsorsHomepage() {

  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    client.fetch(
      `*[_type == "sponsors"] {
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
      setSponsors(data);
      console.log(data)
    }).catch(console.error);

  }, [])



  return (
    <>

      <h1 className='max-w-7xl text-3xl mx-auto pt-20 pb-10 px-5'>
        RĖMĖJAI
      </h1>
      {!sponsors ? <h2 className='max-w-7xl text-3xl mx-auto pt-20 px-5'>
        Loading...
      </h2> :
        <>

          <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6 max-w-7xl mx-auto px-5 mb-10 place-items-center'>
            {sponsors.map((sponsor) => (
              <article key={sponsor.slug.current}>
                {sponsor.image && <img 
                  src={urlFor(sponsor.image).url()}
                  alt={sponsor.name}
                  loading="lazy"
                  className='rounded-xl object-contain h-32'
                />}
              </article>
            ))}
          </section>
        </>}
    </>
  )
}