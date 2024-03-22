import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"


export default function Header() {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <nav className='sticky top-0 left-0 flex items-center justify-center bg-white z-20 drop-shadow-xl'>
        <div className='flex justify-between items-center max-w-7xl w-full h-24 px-5'>

          <Link to="/">
            <img className='absolute top-2 h-28 z-30' src="../Logo.png" alt="main logo" />
          </Link>


          <ul className='hidden md:flex'>
            <li className='p-4'>
              <NavLink to="/news">Naujienos</NavLink>
            </li>
            <li className='p-4'>
              <NavLink to="/players">Komanda</NavLink>
            </li>
            <li className='p-4'>
              <NavLink to="/schedule">Tvarkaraštis</NavLink>
            </li>
            <li className='p-4'>
              <NavLink to="/sponsors">Rėmėjai</NavLink>
            </li>
            <li className='p-4'>
              <NavLink to="/parama">Parama</NavLink>
            </li>
            <li className='p-4'>
              <a href="https://hustlepoint.com/product-category/apranga/velzys-lt/" target="_blank">Atributika</a>
            </li>
          </ul>

          <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40} />}
          </div>

          <div className= {!nav ? "fixed top-24 left-0 bg-white w-full drop-shadow-xl ease-in-out duration-500" : "fixed left-[-100%]"}>
            <ul className=' pt-10 flex flex-col'>
              <li className='p-4 border-b border-gray-300 flex justify-start'>
                <NavLink to="/news">Naujienos</NavLink>
              </li>
              <li className='p-4 border-b border-gray-300 flex justify-start'>
                <NavLink to="/players">Komanda</NavLink>
              </li>
              <li className='p-4 border-b border-gray-300 flex justify-start'>
                <NavLink to="/schedule">Tvarkaraštis</NavLink>
              </li>
              <li className='p-4 border-b border-gray-300 flex justify-start'>
                <NavLink to="/sponsors">Rėmėjai</NavLink>
              </li>
              <li className='p-4 border-b border-gray-300 flex justify-start'>
                <NavLink to="/parama">Parama</NavLink>
              </li>
              <li className='p-4 flex justify-start'>
                <a href="https://hustlepoint.com/product-category/apranga/velzys-lt/" target="_blank">Atributika</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}
