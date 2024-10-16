import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'


const Hero = () => {
   const navigation=useNavigate();
    const moveToClient=()=>{
        navigation('/signIn')
    }
  return (
    <div className='heroContainer'>
        <section className="topSection">
            <h3>BECOT</h3>
            <h4>Better Communication Tool</h4>
        </section>
        <section className="moreInfo">
            <h2>WELCOME TO BECOT A COMMUNICATION TOOL THAT GUARANTEES SECURITY, FLEXIBILITY AND CUSTOMAZIBILITY AT AFFORDABLE PRICES</h2>
            <button onClick={moveToClient}>LET'S GO</button>
        </section>
    </div>
  )
}

export default Hero