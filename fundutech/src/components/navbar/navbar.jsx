import React, {useState} from 'react'
import '././style/navbar.css'
import logo from '../../assets/images/logo.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Left = () =>(
    <ul className='flex items-center'> 
    <Link to="/"><li>Home</li></Link>
    <Link to="/#about"><li>About</li></Link>


</ul>
)

const Right = () => (
            <><ul className='flex items-center'>
   
        <li>Contact</li>
    </ul></>

)
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const myNav= () =>{
    setNav(!nav)
  }
  return (
    
    <div className='w-full h-[90px] bg-black text-white'>
        <div className="max-w-[1020px] mx-auto px-4 flex  justify-between h-full items-center">
            <div className='hidden md:flex'>
                <Left />
            </div>
            <div className='logo h-10  md:pl-10'>
                <img src={logo} alt="" />
            </div>
            <div className=' hidden md:flex'>
                <Right />
                <Link to="/register"><center><button className='bg-gradient-to-r from-[#5FA0E0] to-[#F06CAB] py-2 px-4 rounded-3xl'>  Get Involved</button></center></Link>
            </div>
            {/* Hamburger Scope */}
            <div onClick={myNav} className='block md:hidden  '>
                {nav? <AiOutlineClose size={30} className="text-[#5FA0E0]" /> 
                :<AiOutlineMenu size={30} className="text-[#5FA0E0]" />}
            </div>
            {/* Mobile Menu  */}
            <div className={nav? 'w-full bg-black absolute top-[90px] left-0 h-full menu text-xl'
            : 'absolute left-[-100%]'}>
                <Left />
                <Right/>
                <Link to="/register"><center><button className='bg-gradient-to-r from-[#5FA0E0] to-[#F06CAB] py-2 px-4 rounded-3xl'>  Get Involved</button></center></Link>
                
            </div>
        </div>
    </div>
    
  )
}

export default Navbar