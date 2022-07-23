import React from 'react'
import "./header.css"
import {Navbar, Hero} from "../../components"
const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <Hero/>
    </div>
  )
}

export default Header