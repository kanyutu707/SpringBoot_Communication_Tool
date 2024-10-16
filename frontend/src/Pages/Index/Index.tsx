import React from 'react'
import Hero from '../../Components/Hero/Hero'
import './Index.css'
import About from '../../Components/About/About'
import Offer from '../../Components/Offer/Offer'
import Others from '../../Components/Others/Others'
const Index = () => {
  return (
    <div className='indexContainer'>
        <Hero/>
        <Offer/>
        <About/>
        <Others/>
    </div>

  )
}

export default Index