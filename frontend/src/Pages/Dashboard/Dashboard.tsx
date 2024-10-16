import React from 'react'
import './Dashboard.css'
import Stats from '../../Components/Stats/Stats'
import DepartmentSection from '../../Components/DepartmentSection/DepartmentSection'
import PendingRequests from '../../Components/PendingRequests/PendingRequests'
import UserSection from '../../Components/UserSection/UserSection'

const Dashboard = () => {
  return (
    <div className='dashContainer'>
      <Stats/>
      <DepartmentSection/>
      <PendingRequests/>
      <UserSection/>
    </div>
  )
}

export default Dashboard
