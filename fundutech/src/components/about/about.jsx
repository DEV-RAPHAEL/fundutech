import React from 'react'
import './style/about.css'
import image1 from '../../assets/images/talk.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className='flex flex-col-reverse md:flex-row justify-center'>
        <div className='md:w-[70%] md:p-[4rem] aboutText'>  
        <h1 className='text-[#5FA0E0]'>What's Talk Tech </h1>
        <p>Talk Tech Project is an initiative of Code Cube Millennials to train and educate students into various career paths in the global technology.💙💫
            our major goal is to get as many secondary school students as possible into Tech, thereby giving them a career path while still in secondary school.
        </p>
        <div className='listArea flex mt-10 justify-around flex-wrap'>
           
            <ul>
                <li>Passion Driven Education</li>
                <li>Real-Life Explanation</li>
                <li>Simplifying Tech </li>
                <li>Play-Learn </li>
                <li>Learning While Educating </li>

            </ul>
            <ul>
               
                <li>Passion Driven Education</li>
                <li>Real-Life Explanation</li>
                <li>Simplifying Tech in classrooms</li>
                <li>Play-Learn Methodology</li>
                <li>Learning While Educating Others</li>
            </ul>
        </div>
        </div>
        <img src={image1} alt=""  className='md:w-[40%] md:h-[50%] md:mt-[50px] md:pr-12 rounded-3xl w-[80%] mt-12 ml-12 ' />
        </div>
            
        </div>
  )
}

export default About