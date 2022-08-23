import React from 'react'

const Service = (props) => {
  return (
    <div className='  serviceItem flex pl-[50px] pr-[50px] hover:bg-[#5FA0E0] drop-shadow-2xl
    hover:text-white pt-[20px] pb-[30px] rounded-xl flex-col items-center md:w-[25%] m-1 bg-white'>
                <h1 className=' p-3 rounded-full bg-white mb-4 text-black '>{props.icon}</h1>
                <div className='servText  text-center'>
                  <p className='ml-2  text-xl mb-4 font-bold'>{props.title}</p>
                  <p className='font-light leading-7'>{props.description}</p>
                </div>
                <div className='servText mt-2'>
                  
                </div>
            </div>

  )
}

export default Service