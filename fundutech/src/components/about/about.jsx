import React from 'react'
import './style/about.css'
import image1 from '../../assets/images/talk.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className='flex'>
        <div className='md:w-[70%] md:p-[8rem]'>  
        <h1 className='text-[#5FA0E0]'>What's Talk Tech </h1>
        <p>Talk Tech Project is an initiative of Code Cube Millennials to train and educate students into various career paths in the global technology.💙💫
            our major goal is to get as many secondary school students as possible into Tech, thereby giving them a career path while still in secondary school.
        </p>
        <div className='listArea flex mt-10 justify-around'>
           
            <ul>
                <li>Passion Driven Education</li>
                <li>Real-Life Explanation</li>
                <li>Simplifying Tech in classrooms</li>
                <li>Play-Learn Methodology</li>
                <li>Learning While Educating Others</li>

            </ul>
            <ul>
               
                <li>Hello world</li>
                <li>Hello world</li>
                <li>Hello world</li>
                <li>Hello world</li>
                <li>Hello world</li>

            </ul>
        </div>
        </div>
        <img src={image1} alt=""  className='w-[40%] h-[50%] mt-[120px] md:pr-12 rounded-3xl' />
        </div>

        </div>
  )
}

export default About