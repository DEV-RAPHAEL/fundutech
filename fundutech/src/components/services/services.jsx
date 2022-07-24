import React from 'react'
import { FaGraduationCap, FaComment, FaLaptopCode } from "react-icons/fa";
const Services = () => {
    
  return (
    <div>
        <div className='flex flex-col items-center jstify-center mt-12 '> 
        <h5 className=''>How we make impact</h5>
        <h1 className='text-[#5FA0E0]'> What we do</h1>
    </div>
    <div className='md:p-12 md:pt-1'>
        <div className='p-10 md:flex'>
            <div className='serviceItem flex md:w-[25%] '>
                <h1 className=' w-10 p-1 rounded-2xl text-[#5FA0E0]'><FaGraduationCap /></h1>
                <div className='servText mt-2'>
                  <h3 className='ml-2 text-[#5FA0E0] text-xl font-bold'>Free Education</h3>
                  <p>Talk Tech project is absolutely free, however, we accept donations to remunerate our volunteers.</p>
                </div>
            </div>
            <div className='serviceItem flex md:w-[25%] '>
                <h1 className=' w-10 p-1 rounded-2xl text-[#5FA0E0]'><FaComment /></h1>
                <div className='servText mt-2'>
                  <h3 className='ml-2 text-[#5FA0E0] text-xl font-bold'>Mentorship</h3>
                  <p>We offer free mentorsship especially for interested students, the aim is not to leave any Child Behind.</p>
                </div>
            </div>
            <div className='serviceItem flex md:w-[25%] '>
                <h1 className=' w-10 p-1 rounded-2xl text-[#5FA0E0]'><FaLaptopCode /></h1>
                <div className='servText mt-2'>
                  <h3 className='ml-2 text-[#5FA0E0] text-xl font-bold'>Hands - On</h3>
                  <p>Tech is best when the pracical aspect is duely observed, we offer both theorical and practical aspect.</p>
                </div>
            </div>
            <div className='serviceItem flex md:w-[25%] '>
                <h1 className=' w-10 p-1 rounded-2xl text-[#5FA0E0]'><FaGraduationCap /></h1>
                <div className='servText mt-2'>
                  <h3 className='ml-2 text-[#5FA0E0] text-xl font-bold'>Build Projects</h3>
                  <p>Should any students are interested in building live projects, we have playgrounds for them to work.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services