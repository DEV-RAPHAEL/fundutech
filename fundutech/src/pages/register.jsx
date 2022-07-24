import React from 'react'
import RegForm from "../components/forms/register"
import { Navbar, Cta} from "../components"
import {Footer} from "../layout"
import "./style/style.css"

const Register = () => {
  return (
    <div>
      <div className='headerRegister'>
        
        <Navbar />
        <div className='flex items-center texts min-h-[85vh] md:max-w-[full] text-[#5FA0E0] p-10 '>
          <h1 className='text-4xl max-w-[40%] text-white min-w-[100%] '>We Appreciate You</h1>
          <p className='text-white mt-5 max-w-[80%]'>The fact that you opened this page is convincing enough that you are ready to make impact. Thank You!
          </p>
          <div className='hero_buttons mt-10'>
          <button className='p-4 bg-[#F06CAB]  py-3 px-7 rounded-lg  text-white'>Volunteer</button>
          <button className='md:ml-5 p-4 bg-[#5FA0E0] md:py-3 md:px-7 rounded-lg  text-white ml-2 py-3'>Register School</button>
          </div>
          </div>
    </div>
        <RegForm />
        <Footer />
    </div>
  )
}

export default Register