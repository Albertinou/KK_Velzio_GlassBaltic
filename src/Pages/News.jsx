import React, { useState, useEffect } from 'react';
import { client } from "../client";
import { format } from 'date-fns'
import { Link } from 'react-router-dom';

export default function News() {

  const [news, SetNews] = useState([]);

  useEffect(() => {
    client.fetch(
      `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`
    ).then((data) => {
      SetNews(data);

    }).catch(console.error);

  }, [])

  return (
    <>
      <h1 className='max-w-7xl text-3xl mx-auto px-5 py-20'>
        NAUJIENOS
      </h1>
      <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10'>
        {news.map((singleNews) => (
          <article key={singleNews.slug.current}>
            <Link to={`/news/${singleNews.slug.current}`}>
              {singleNews.mainImage && <img
                src={singleNews.mainImage.asset.url}
                alt={singleNews.mainImage.alt}
                loading="lazy"
                className='rounded-xl md:h-72 h-96 w-full object-cover'
              />}
            </Link>

            <div className='py-4'>
              <p className='text-sm'>
                {format(new Date(singleNews.publishedAt), 'yyyy-MM-dd')}
              </p>
              <Link to={`/news/${singleNews.slug.current}`}>
                <h2 className='text-xl my-2'>{singleNews.title}</h2>
                <p className='text-sm leading-relaxed'>
                  {`${singleNews.body[0].children[0].text.substring(0, 200)}...`}
                </p>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

