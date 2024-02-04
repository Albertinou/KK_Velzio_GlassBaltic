import React, { useState, useEffect } from 'react';
import { client } from "../client";
import { format } from 'date-fns'
import { Link, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';


export default function SingleNews() {

  const [singleNews, setSingleNews] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    client.fetch(
      `*[slug.current == "${slug}"] {
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
        "name": author -> name,
      }`
    ).then((data) => {
      setSingleNews(data[0]);
    }).catch(console.error);

  }, [slug])

  // useEffect(() => {
  //   document.title = `Skaitoma: ${singleNews.title}`
  // }, [singleNews.title])

  return (
    <>
      {singleNews &&
        <section className='py-20 px-5 max-w-5xl mx-auto'>
          {singleNews.mainImage &&
            <img
              src={singleNews.mainImage.asset.url}
              alt={singleNews.mainImage.alt}
              className='h-2/3 w-full object-cover rounded-xl shadow'
            />}
          <h1 className='text-4xl my-8 xl:text-5xl'>
            {singleNews.title}
          </h1>
          <p className='font-bold text-sm lg:text-xl mb-8 '>
            {singleNews.publishedAt && <>
              {format(new Date(singleNews.publishedAt), 'yyyy-MM-dd')}
            </>}
          </p>
          <div className= "text-lg lg:text-xl mb-8">
            <PortableText value={singleNews.body}/>
          </div>


          <div className='max-w-7xl mx-auto mb-20 py-10'>
            <Link to="/news" className='bg-white py-2 px-8 rounded text-slate-800 tracking-wide transition-all duration-200 md:w-auto shadow-md  shadow-gray-700 hover:shadow-xl hover:shadow-gray-800  hover:scale-105'>
              Skaityti visas naujienas
            </Link>
          </div>
        </section>}
    </>
  )
}

