import React, { useState, useEffect } from 'react';
import Hero from "../components/Hero";
import { client } from "../client";
import { format } from 'date-fns'
import { Link } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import PlayerSlider from '../components/PlayerSlider';
import ScheduleHomepage from '../components/ScheduleHomepage';
import SponsorsHomepage from '../components/SponsorsHomepage';



const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function Homepage() {

  const [news, setNews] = useState([]);

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
          crop,
          hotspot
        },
        "playerName": player -> name,
      } | order(publishedAt desc)`
    ).then((data) => {
      setNews(data.slice(0, 3));
    }).catch(console.error);

  }, []);


  return (
    <>
      {/* ------------Pagindine naujiena------------ */}
      <Hero />
      <h1 className='max-w-7xl text-3xl mx-auto pt-20 px-5'>
        NAUJIENOS
      </h1>
      {!news ? <h2 className='max-w-7xl text-3xl mx-auto pt-20 px-5'>
        Loading...
      </h2> :
        <>
          {news[0] &&
            <section className='max-w-7xl mx-auto mt-10 mb-20 px-5'>
              <article className='relative'>
                {news[0].mainImage && <img
                  src={urlFor(news[0].mainImage).url()}
                  alt={news[0].title}
                  className='h-96 w-full object-cover rounded-2xl shadow-md  shadow-gray-700 brightness-50'
                />}
                <div className='absolute bottom-8 left-8'>
                  <h2 className=' text-2xl md:text-4xl lg:text-5xl mb-6 text-white drop-shadow-md'>
                    {news[0].title}
                  </h2>
                  <p className='text-slate-100 mb-8 md:w-1/2 text-l drop-shadow-sm'>
                    {`${news[0].body[0].children[0].text.substring(0, 200)}...`}
                  </p>
                  <Link to={`/news/${news[0].slug.current}`} className='bg-white py-2 px-8 rounded text-slate-800 tracking-wide transition-all duration-200 md:w-auto shadow-md  shadow-gray-700 hover:shadow-xl hover:shadow-gray-800  hover:scale-105'>Skaityti</Link>
                </div>
              </article>
            </section>
          }
        </>}

      {/* ------------Naujienu gridas-------------- */}

      <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10'>
        {news.map((singleNews) => (
          <article key={singleNews.slug.current}>
            <Link to={`/news/${singleNews.slug.current}`}>
              {singleNews.mainImage && <img
                src={singleNews.mainImage.asset.url}
                alt={singleNews.mainImage.alt}
                loading="lazy"
                className='rounded-xl md:h-72 w-full object-cover shadow-md  shadow-gray-700 hover:shadow-lg hover:shadow-gray-800 transition duration-500 hover:scale-105'
              />}
            </Link>

            <div className='py-4'>
              <p className='text-sm'>
                {format(new Date(singleNews.publishedAt), 'yyyy-MM-dd')}
              </p>
              <div>
                <Link to={`/news/${singleNews.slug.current}`}>
                  <h2 className='text-xl my-2'>{singleNews.title}</h2>
                  <p className='text-sm leading-relaxed'>
                    {`${singleNews.body[0].children[0].text.substring(0, 200)}...`}
                  </p>
                </Link>
              </div>

            </div>
          </article>
        ))}
      </section>
      <div className='max-w-7xl mx-auto px-5'>
        <Link to="/news" className='bg-white py-2 px-8 rounded text-slate-800 tracking-wide transition-all duration-200 md:w-auto shadow-md  shadow-gray-700 hover:shadow-xl hover:shadow-gray-800  hover:scale-105'>
          Skaityti visas naujienas
        </Link>
      </div>

      {/* ------------Varzybu grafikas----------- */}

      <ScheduleHomepage />



      {/* ------------Zaideju slideris----------- */}

      <PlayerSlider />



      {/* ------------Remejai----------- */}

      <SponsorsHomepage />

    </>
  )
}

