import React from 'react'
import { AiFillFacebook, AiFillMail, AiFillInstagram } from "react-icons/ai"

export default function Hero() {
  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat">
        <img src="./IMG_0133.jpeg" alt="hero banner" />
        <div className='absolute top-[8%] left-[5%] md:left-[37%] max-w-xs lg:max-w-2xl w-full'>
          <div className='flex justify-between'>
            <div>
              <a href="https://www.facebook.com/KKVelzioGlassBaltic" target="_blank" className='flex items-center'>
                <AiFillFacebook className=' lg:text-5xl text-2xl text-white' />
                <p className='pl- lg:text-3xl text-md text-white'>KK Velžio "GlassBaltic"</p>
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/kkvelzioglassbaltic/" target="_blank" className='flex items-center'>
                <AiFillInstagram className=' lg:text-5xl text-2xl text-white' />
                <p className='pl-2 lg:text-3xl text-md text-white'>kkvelzioglassbaltic</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
