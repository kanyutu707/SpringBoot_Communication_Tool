import React, { useState } from 'react'
import './Company.css'
import { Link, useNavigate } from 'react-router-dom'
const Company = () => {
    const navigate=useNavigate();
    const moveToSignUp=()=>{
        navigate('/signUp')
    }
    const[formData, setFormData]=useState({
        "name":""
    });
 
    const handleChange=(e:any)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    };
    
    const handleSubmit=async(e:any)=>{
        e.preventDefault();
        try {
            const response=await fetch("http://localhost:8080/becot/authenticate/company/create", {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData),
            
            } );
          
            if(!response.ok){
                console.log(response);
                throw new Error('Network response was not ok');
            }
            const data=await response.json();
            sessionStorage.setItem('companyId', data.id);
            createDepartment(data);
          } catch (error) {
            throw new Error(`${error}`);
        }
    }

    const [deptData, setDeptData]=useState({
        "name": "ADMINISTRATION",
        "company_id":sessionStorage.getItem('companyId')
    })

    const createDepartment=async (data:object)=>{
        if(data){
                
            try {
                const secres=await fetch("http://localhost:8080/becot/authenticate/department/create", {
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(deptData),

                });
                if(!secres.ok){
                    console.log(secres);
                    throw new Error('Network response was not ok');
                }
                const secData=await secres.json();
                if(secData){
                    moveToSignUp();
                    sessionStorage.setItem('deptId', secData.id);
                }
            } catch (error) {
                throw new Error(`${error}`);
            }
          
      
        }
        else{
            alert("Connection error")
        }
    }
  return (
    <div className='companyRegContainer'>
        <form onSubmit={handleSubmit}>
            <header>COMPANY REGISTER</header>
            <span className="input_group">
                <label htmlFor="name">COMPANY NAME</label>
                <input type="text" name='name' onChange={handleChange} value={formData.name}/>
            </span>
            <button  type='submit'>SUBMIT</button>
            <span>ALREADY HAVE AN ACCOUNT ? <Link to='/signIn'> SIGN IN</Link></span>
        </form>
    </div>
  )
}

export default Company