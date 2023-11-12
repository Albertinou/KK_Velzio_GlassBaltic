import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <>
      <section className='flex items-center justify-center h-screen text-center px-5' >
        <article className=' mx-auto'>
          <h1 className='text-4xl lg:text-5xl mb-10'>
            404 klaida: Jūsų ieškomas puslapis neegzistuoja arba buvo perkeltas.
          </h1>
          <Link to="/" className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 md:w-auto capitalize'>
            Grįžti į pagrindinį puslapį
          </Link>
        </article>
      </section>
    </>
  )
}
