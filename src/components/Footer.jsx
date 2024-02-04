import React from 'react'
import { AiFillFacebook, AiFillMail, AiFillInstagram } from "react-icons/ai"

export default function Footer() {
  return (
    <>
      <section className=' pt-10 w-full'>
        <div className=' h-auto w-full  border border-b 0 bg-[#014582]'>
          <div className='max-w-7xl mx-auto px-5 h-full'>
            <div className='h-full flex items-center '>
              <div className='flex justify-between items-center w-full flex-col md:flex-row border-b border-b-stone-30 py-9'>
                <div className='flex items-center'>
                  <img src="./Logo_BW_2.png" alt="logo_black_white" className='w-24 pr-5' />
                  <div>
                    <p className=' text-lg text-stone-300'>Krepšinio klubas Velžys</p>
                    <p className=' text-lg text-stone-300'>Nevėžio g. 54-1, Velžio k., 38129, Panevėžio r.</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <AiFillMail className=' text-4xl text-stone-300' />
                  <p className='pl-2 text-stone-300'>KKVELZYS@GMAIL.COM</p>
                </div>
                <div>
                  <div className='flex flex-col'>
                    <a href="https://www.facebook.com/KKVelzioGlassBaltic" target="_blank" className='flex items-center'>
                      <AiFillFacebook className=' text-4xl text-stone-300' />
                      <p className='pl-2 text-stone-300'>KK Velžio "GlassBaltic"</p>
                    </a>
                    <a href="https://www.instagram.com/kkvelzioglassbaltic/" target="_blank" className='flex items-center'>
                      <AiFillInstagram className=' text-4xl text-stone-300' />
                      <p className='pl-2 text-stone-300'>kkvelzioglassbaltic</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-full max-w-full w-full max-h-24 flex justify-center items-center text-center text-stone-300 py-10'>
              <p>2023 © Krepšinio klubas Velžys. Visos teisės saugomos.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
