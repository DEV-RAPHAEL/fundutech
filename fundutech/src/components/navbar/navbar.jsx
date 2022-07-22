import React from 'react'
import './navbar.css'
import logo from '../../assets/images/logo.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Left = () =>(
    <ul className='flex items-center'> 
    <li>Register</li>
    <li>Gallery</li>
    <li>Past Events</li>
</ul>
)

const Right = () => (
            <><ul className='flex items-center'>
        <li>About</li>
        <li>Contact</li>
    </ul><button className='bg-gradient-to-r from-[#5FA0E0] to-[#F06CAB] py-2 px-4 rounded-3xl'>Get Involved</button></>

)
const Navbar = () => {
  
  return (
    
    <div className='w-full h-[90px] bg-black text-white'>
        <div className="max-w-[1020px] mx-auto px-4 flex  justify-between h-full items-center">
            <div className='hidden md:flex'>
                <Left />
            </div>
            <div className='logo h-10 pl-10 md:'>
                <img src={logo} alt="" />
            </div>
            <div className=' hidden md:flex'>
                <Right />
            </div>
            <div className='blcok md:hidden '>
                <AiOutlineMenu size={30} className="text-[#5FA0E0]" />
            </div>
        </div>
    </div>
  )
}

export default Navbar