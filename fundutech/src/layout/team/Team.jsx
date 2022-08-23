import React from 'react'
import Card from '../../components/card/Card'
import Test from "../../assets/images/demo.jpg"


const Team = () => {
  return (
    <><div>
          <div className='flex flex-col items-center jstify-center mt-12 '>
              <h5 className=''>Behind this project are awesome people</h5>
              <h1 className='text-[#5FA0E0]'>Meet The Team</h1>
          </div>
      </div><div className='w-[full] md:flex-row  flex justify-around flex-col'>
              <Card
                  img={Test}
                  title="Beautiful Lady"
                  details="Some quick example text to build on the card title and make up the bulk of the card's content." />
              
              <Card
                  img={Test}
                  title="Beautiful Lady"
                  details="Some quick example text to build on the card title and make up the bulk of the card's content." />

            <Card
                  img={Test}
                  title="Beautiful Lady"
                  details="Some quick example text to build on the card title and make up the bulk of the card's content." />
              <Card
                  img={Test}
                  title="Beautiful Lady"
                  details="Some quick example text to build on the card title and make up the bulk of the card's content." />
              <Card
                  img={Test}
                  title="Beautiful Lady"
                  details="Some quick example text to build on the card title and make up the bulk of the card's content." />
          </div></>
  )
}

export default Team