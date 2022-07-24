import React from 'react'
import {Navbar, About} from '../components'
import './style/style.css'
const AboutPage = () => {
  return (
    <div className='aboutPage'>
         <Navbar />
         <div className='flex items-center aboutHeader texts min-h-[85vh] md:max-w-[full] text-[#5FA0E0] p-10 '>
          <h1 className='text-4xl max-w-[40%] text-white min-w-[100%] '>Eradicating Tech Illiteracy <span className='text-[#F06CAB]'>Among Teenagers</span></h1>
          <p className='text-white mt-5 max-w-[80%]'>Talk Tech Project is a set up to visit schools and talk to students about Technology, Including hands-on
            experiences and Mentorship.
          </p>
          <div className='hero_buttons mt-10'>
          <button className='p-4 bg-[#F06CAB]  py-3 px-7 rounded-lg  text-white'>Volunteer</button>
          <button className='md:ml-5 p-4 bg-[#5FA0E0] md:py-3 md:px-7 rounded-lg  text-white ml-2 py-3'>Register School</button>
          </div>
          
         </div>
         <About />
    </div>
    
  )
}

export default AboutPage