import React, { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import './AddDepartment.css'

const AddDepartment = ({close}) => {
    const [formData, setFormData]=useState({
        "name" : "",
        "company_id":sessionStorage.getItem('companyId')
});

const handleSubmit= async (e:any)=>{
    e.preventDefault();
   try{
    const response=await fetch("http://localhost:8080/becot/authenticate/department/create", {
        method:'POST',
        headers:{
            'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    if(!response.ok){
        throw new Error(`${response}`);
    }
    const data=await response.json();
    if (data){
        window.location.href=window.location.href;
    }
}
catch(error){
    throw new Error(`${error}`);
}
}

const handleChange=(e:any)=>{
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value});
}


  return (
    <div className='addDepartment'>
        <button className='closeButton'onClick={close} >
                <IoCloseCircleOutline />

                </button>
      <form action="" onSubmit={handleSubmit}>
      
        <header>
            ADD NEW DEPARTMENT
        </header>
        <span className="input_group">
            <label htmlFor="">DEPARTMENT NAME</label>
            <input type="text" placeholder='DEPARTMENT NAME' onChange={handleChange} name='name' value={formData.name} required />
        </span>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default AddDepartment
