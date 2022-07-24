import { Widget } from '@typeform/embed-react'
import "./style/reg.css"
import volunteer from "../../assets/images/volunteer.jpg"
import { Link } from 'react-router-dom'
import {Cta} from '../../components'
const RegForm = () => {
    
    return(
    <div>
        <div className=' reg md:flex justify-center slide-left h-[80vh] w-full md:p-10 ] md:mt-10'>
        <div className='md:w-[50%] flex flex-col justify-center  p-6' regText>
            <h1 className='md:text-3xl md:mb-6 mb-3 text-lg md:w-[100%] w-[90%] text-center'>Are You an Educationist? Invite us!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati esse eligendi dolorem voluptas consequatur incidunt.</p>
        </div>
        <Widget id="Iyk8JV5W" className="typeform md:w-[40%] md:h-[100%] h-[80%] ml-12 w-[80%]" />
        </div>
        <Cta />
        <div className='mt-[5rem] reg md:flex flex-row-reverse slide-right justify-center h-[80vh] w-full md:p-10 ] md:mt-10'>
        <div className='md:w-[50%] flex flex-col justify-center  p-6' regText>
            <h1 className='md:text-3xl md:w-[80%] md:mb-6 mb-3 text-lg w-[100%] text-center'>Join the Impact makers (Volunteers)</h1>
            <p>We can't achieve this all alone without the help of our active volunteers, yes, people with beautiful hearts just
                like yourself, we however do need more people to reach more students, all you need is to get to the nearest school 
                in your neighbourhood and teach, should you are interested in joining these saviours, you are highly welcome.
            </p>
            <Link to="https://form.jotform.com/222028596571561"><button className='p-2 bg-[#F06CAB]  py-2 px-5 pt-2 rounded-lg  text-white'>Volunteer</button></Link>
            
        </div>
        <img src={volunteer} alt="" className='md:w-[40%] md:h-[100%] h-[60%] rounded-lg'/>
        </div>
    </div>
    )
}

export default RegForm