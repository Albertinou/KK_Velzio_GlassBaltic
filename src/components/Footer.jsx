import React from 'react'
import { AiFillFacebook, AiFillMail, AiFillInstagram } from "react-icons/ai"

export default function Footer() {
  return (
    <>
      <section className=' pt-10 w-full'>
        <div className=' h-72 w-full bg-[#014582]'>
          <div className='max-w-7xl mx-auto px-5 h-full'>
            <div className='h-full max-h-48 border-b border-b-neutral-900 flex items-center '>
              <div className='flex justify-between items-center w-full flex-col md:flex-row'>

                <div className='flex items-center'>
                  <img src="./Logo_BW.png" alt="logo_black_white" className='w-24 pr-5' />

                  <div>
                    <p className=' text-lg'>Krepšinio klubas Velžys</p>
                    <p className=' text-lg'>Nevėžio g. 54-1, Velžio k., 38129, Panevėžio r.</p>
                  </div>

                </div>


                <div className='flex items-center'>
                  <AiFillMail className=' text-4xl'/>
                  <p className='pl-2'>KKVELZYS@GMAIL.COM</p>
                </div>


                <div>
                  <div className='flex flex-col'>
                    <a href="https://www.facebook.com/KKVelzioGlassBaltic" target="_blank" className='flex items-center'>
                      <AiFillFacebook className=' text-4xl' />
                      <p className='pl-2'>KK Velžio "GlassBaltic"</p>
                    </a>
                    <a href="https://www.instagram.com/kkvelzioglassbaltic/" target="_blank" className='flex items-center'>
                      <AiFillInstagram className=' text-4xl' />
                      <p className='pl-2'>kkvelzioglassbaltic</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-full max-h-24 flex justify-center items-center text-center'>
              <p>2023 © Krepšinio klubas Velžys. Visos teisės saugomos.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
