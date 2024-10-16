import React from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom'
import { BiHome, BiMessageSquare, BiNews } from 'react-icons/bi';
import { HiBars3 } from 'react-icons/hi2';
import { CgCommunity } from 'react-icons/cg';



const Sidebar = () => {
  const navigation=useNavigate();
  const home=()=>{
    navigation('/clients/');
  }
  const DM=()=>{
    navigation('/clients/DM/')
  }
  const community=()=>{
    navigation('/clients/community')
  }
  const logout=()=>{
    navigation('/');
  }
  const post=()=>{
    navigation('/clients/post')
  }
  return (
    <div className='sidebarContainer' id='sides'>
        <span className='close'><HiBars3/></span>
        <span onClick={home}><BiHome/> HOME</span>
        <span onClick={DM}><BiMessageSquare/> DIRECT MESSAGES</span>
        <span onClick={community}><CgCommunity/> COMMUNITY</span>
        <span onClick={post}><BiNews/> POSTS</span>
        <button onClick={logout}>LOGOUT</button>
 
    </div>
  )
}

export default Sidebar