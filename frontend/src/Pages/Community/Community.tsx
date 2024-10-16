import React from 'react'
import './Community.css'
import holder from '../../assets/pexels-creationsbyfaik-1025469.jpg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Member from '../../Components/Member/Member';
import NonMember from '../../Components/NonMember/NonMember';

const Community = () => {
    const navigate=useNavigate();
    const member=()=>{
        navigate('/clients/community')
    }
    const none=()=>{
        navigate('/clients/community/none')
    }
  return (
    <div className='communityContainer'>
        <header>COMMUNITIES</header>
      <section className="buttonGroup">
        <button onClick={member}>MEMBER</button>
        <button onClick={none}>NON MEMBER</button>
      </section>
     <Routes>
        <Route path='/' element={<Member/>}/>
        <Route path='/none' element={<NonMember/>}/>
     </Routes>
    </div>
  )
}

export default Community
