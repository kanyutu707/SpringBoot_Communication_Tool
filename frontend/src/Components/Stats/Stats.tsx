import React from 'react'
import './Stats.css'

const Stats = () => {
  return (
    <div className='statContainer'>
      <span>
        <h1>0</h1>
        <h5>ACTIVE USERS</h5>
      </span>
      <span>
        <h1>0</h1>
        <h5>INACTIVE USERS</h5>
      </span>
      <span>
        <h1>0</h1>
        <h5>ACTIVE DEPARTMENTS</h5>
      </span>
      <span>
        <h1>0</h1>
        <h5>INACTIVE DEPARTMENTS</h5>
      </span>
      <span>
        <h1>0</h1>
        <h5>REQUESTS</h5>
      </span>
    </div>
  )
}

export default Stats
