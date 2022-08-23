import React from 'react'
import './style/about.css'
import image1 from '../../assets/images/talk.jpg'
const About = () => {

  return (
    <div className='about' id='about'>
        <div className='flex flex-col-reverse md:flex-row justify-center mb-12'>
        <div className='md:w-[70%] md:p-[4rem] aboutText'>  
        <h5 className='text-[#5FA0E0] mb-4'>About Us </h5>
        <h1 className='mb-4 leading-10 font-bold'>We Are Here to Techify African Students</h1> 
        <p className='font-bold mb-4 leading-8 text-[#444444] text-l'>We Set Out to Educate Every Secondary Scholar, in Africa, While Adopting Play-Learn Method
        </p>
        <p className='font-medium leading-6 text-[grey]'>Talk Tech Project is an initiative of Code Cube Millennials to train and educate students into various career paths in the global technology.💙💫
            our major goal is to get as many secondary school students as possible into Tech, thereby giving them a career path while still in secondary school.
        </p>
  
        </div>
        <img src={image1} alt=""  className='md:w-[40%] md:h-[50%] md:mt-[50px] md:pr-12 rounded-3xl w-[80%] mt-12 ml-12 ' />
        </div>
            
        </div>
  )
}

export default About