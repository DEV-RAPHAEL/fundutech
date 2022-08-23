import React from 'react'
import { FaGraduationCap, FaComment, FaLaptopCode } from "react-icons/fa";
import Service  from '../../components/services/service';
const Services = () => {
    
  return (
    <div className='bg-[#f8f9fa]'>
          <div className='mb-4 flex flex-col items-center jstify-center pt-12 '> 
        <h5 className='text-[#5FA0E0]'>What We Do</h5>
        <h1 className='mb-4'>21ST CENTURY EDUCATION</h1>
        <h5 className=''>Every student deserves the chance to explore, advance, and succeed in computer science</h5>

    </div>
    <div className='md:p-12 md:pt-1'>
        <div className='p-10 md:flex justify-between'>   
     
            <Service icon={<FaGraduationCap  size={36} />}
                      title='Free Education'
                      description='Talk Tech project is absolutely free, however, we accept donations to remunerate our volunteers.'
            />
            <Service icon={<FaComment size={36} />}
                      title='Mentorship'
                      description='We offer free mentorsship especially for interested students, the aim is not to leave any Child Behind.'
            />
                 <Service icon={<FaLaptopCode size={36} />}
                      title='Hands - On'
                      description='Tech is best when the pracical aspect is duely observed, we offer both theorical and practical aspect.'
            />
                 <Service icon={<FaGraduationCap size={36}/>}
                      title='Build Projects'
                      description='Should any students are interested in building live projects, we have playgrounds for them to work.'
            />
          
            </div>
        </div>
    
    </div>
  )
}

export default Services