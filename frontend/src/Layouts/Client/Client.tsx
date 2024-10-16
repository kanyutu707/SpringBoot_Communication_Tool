import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Home from '../../Pages/Home/Home'
import './Client.css'
import { Route, Routes } from 'react-router-dom'
import DirectMessages from '../../Pages/DirectMessages/DirectMessages'
import Community from '../../Pages/Community/Community'
import Post from '../../Pages/Posts/Post'

const Client = () => {
  return (
    <div className='clientContainer'>
        <Sidebar/>
        <section>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
\             <Route path='/DM' element={<DirectMessages/>} />
              <Route path='/community/*' element={<Community/>}/>
              <Route path='/post' element={<Post/>}/>
            </Routes>
            
        </section>
    </div>
  )
}

export default Client