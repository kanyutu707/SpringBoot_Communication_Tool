import React from 'react'
import './Admin.css'
import AdminSideBar from '../../Components/AdminSideBar/AdminSideBar'
import Navbar from '../../Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import ActiveUser from '../../Pages/ActiveUser/ActiveUser'
import InactiveUsers from '../../Pages/InactiveUsers/InactiveUsers'
import ActiveDept from '../../Pages/ActiveDept/ActiveDept'
import InactiveDept from '../../Pages/InactiveDept/InactiveDept'
import Pending from '../../Pages/Pending/Pending'

const Admin = () => {
  return (
    <div className='adminContainer'>
        <AdminSideBar/>
        <section>
            <Navbar/>
            <div>
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/activeusers' element={<ActiveUser/>}/>
                    <Route path='/inactiveusers' element={<InactiveUsers/>}/>
                    <Route path='/activedept' element={<ActiveDept/>}/>
                    <Route path='/inactivedept' element={<InactiveDept/>}/>
                    <Route path='/pending' element={<Pending/>}/>
                </Routes>
            </div>
        </section>
    </div>
  )
}

export default Admin