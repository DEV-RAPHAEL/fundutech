import React from 'react'
import { About,  Cta, Contact, Card} from '../components'
import { Header,Footer,Services,Team } from '../layout'

const Home = () => {
  return (
    <div>
        <Header />
        <Services />
        <Contact />
         <About />
         <Cta />
         <Team/>
         <Footer />
        
    </div>
  )
}

export default Home