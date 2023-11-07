import React from 'react'
import { Link } from "react-router-dom"


export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="nav_container">
          <div className="nav_left">
            <Link to="/">
            <img className='main_logo' src="./Logo.png" alt="main logo" />
            </Link>
          </div>

          <div className="nav_right">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

        </div>
      </div>
    </>



  )
}
