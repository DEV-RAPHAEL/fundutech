import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        
      <div className="bg-[#5FA0E0]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Contact Us</span>
            <span className="block ">We are more than willing to get in touch!</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5FA0E0] hover:bg-indigo-700"
              >
                <Link to="/contact">Say Hi</Link>
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#5FA0E0] bg-white hover:bg-indigo-50"
              >
             <Link to="/register">Sign up</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

