import React, { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import './NewPost.css'

const NewPost = ({close}) => {
  const [formData, setFormData]=useState({
    "sender_id":sessionStorage.getItem("loggedIn"),
    "company_id":sessionStorage.getItem('companyId'),
    "message":""
  })
 
  const handleSubmit=async(e:any)=>{
    e.preventDefault();
    try {
      const response=await fetch("http://localhost:8080/becot/message/create", {
        method:'POST',
        headers:{
          'Authorization':`Bearer ${sessionStorage.getItem('token')}`,
          'Content-Type':'application/json'
        },

        body:JSON.stringify(formData)
        
      })
     if(!response.ok){
        throw new Error(`${response}`);
     }
     const data=await response.json();
   
     if(data){
      window.location.href=window.location.href;
     }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  const handleChange=(e:any)=>{
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  return (
    <div className='newPostContainer'>
      <header>NEW POST</header>
        <button onClick={close} className='actionButton'><IoCloseCircleOutline/></button>
        <form action="" onSubmit={handleSubmit}>
            <span className="input_group">
                <label htmlFor="">MESSAGE</label>
                <textarea name="message" onChange={handleChange} value={formData.message} required></textarea>
            </span>
            <button >POST</button>
        </form>
    </div>
  )
}

export default NewPost