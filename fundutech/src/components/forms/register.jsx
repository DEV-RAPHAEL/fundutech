import { Widget } from '@typeform/embed-react'
import "./style/reg.css"


const RegForm = () => {
    
    return(
    <div>
        <div className='reg md:flex justify-center slide-left h-[80vh] w-full md:p-10 ] md:mt-10'>
        <div className='md:w-[50%] flex flex-col justify-center  p-6' regText>
            <h1 className='md:text-3xl md:mb-6 mb-3 '>Are You an Educationist? Invite us!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati esse eligendi dolorem voluptas consequatur incidunt.</p>
        </div>
        <Widget id="Iyk8JV5W" className="typeform md:w-[40%] md:h-[100%]" />
        </div>
        <div className='reg md:flex flex-row-reverse slide-right justify-center h-[80vh] w-full md:p-10 ] md:mt-10'>
        <div className='md:w-[50%] flex flex-col justify-center  p-6' regText>
            <h1 className='md:text-3xl md:w-[80%] md:mb-6 mb-3 '>Join the Impact makers (Volunteers)</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati esse eligendi dolorem voluptas consequatur incidunt.</p>
        </div>
        <Widget id="Iyk8JV5W" className="typeform md:w-[40%] md:h-[100%]" />
        </div>
    </div>
    )
}

export default RegForm