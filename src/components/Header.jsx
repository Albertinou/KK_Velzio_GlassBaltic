import React from 'react'
import { NavLink, Link } from "react-router-dom"


export default function Header() {
  return (
    <>
      <nav>
        <div className="nav_container">
            <Link to="/">
            <img className='main_logo' src="./Logo.png" alt="main logo" />
            </Link>
            <ul>
              <li>
                <NavLink to="/news">Naujienos</NavLink>
              </li>
              <li>
                <NavLink to="/players">Komanda</NavLink>
              </li>
              <li>
                <NavLink to="/sponsors">Rėmėjai</NavLink>
              </li>
              <li>
              <a href="https://hustlepoint.com/product-category/apranga/velzys-lt/" target="_blank">Atributika</a>
              </li>
            </ul>
          </div>
      </nav>
    </>
  )
}
