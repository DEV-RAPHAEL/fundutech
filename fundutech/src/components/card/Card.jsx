import React from 'react'
const Card = (props) => {
    
  return (
        <div className=' p-10 flex flex-col '>
            <div>
                <img src={props.img} alt="" />
            </div>
            <div>
                <h2 className='text-xl p-2 font-bold text-[#5FA0E0]'>{props.title}</h2>
                <h4 className='text-l p-2 pt-1'> {props.details}</h4>
            </div>
            <div>
                <a
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5FA0E0] hover:bg-indigo-50"
              >
                Thank You
              </a>            </div>
        </div>
  )
}

export default Card