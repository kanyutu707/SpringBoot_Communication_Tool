import React, { useEffect, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import './AddEmployee.css'

const AddEmployee = ({close}) => {

      const [formData, setFormData]=useState({
        "firstName":"",
        "lastName":"",
        "email":"",
        "password":"",
        "role":"USER",
        "department_id":""

    });
    const handleChange=(e:any)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit=async(e:any)=>{
        e.preventDefault();
        try {
            const response=await fetch("http://localhost:8080/becot/authenticate/register", {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData),
            })
            if(!response.ok){
                console.log(response);
                throw new Error('Network response was not ok')
            }
            const data=await response.json();
            if(data){
                window.location.href=window.location.href;
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation: ', error)
        }
    }

    
  const [departments, setDepartments]=useState([]);
  useEffect(()=>{
      const fetchData=async()=>{
        try{
          const response=await fetch("http://localhost:8080/becot/authenticate/department/get_all",{
            headers:{
              'Authorization':`Bearer ${sessionStorage.getItem('token')}`,
              'Content-Type':'application/json'
            }
          });
          if(!response.ok){
            throw new Error('Network response was not ok');
          }
          const data=await response.json();
          setDepartments(data);
        }catch(error){
          throw new Error(`${error}`);
        }
      };
      fetchData();
  }, []);
  
  return (
    <div className='signupContainer otherSignUp'>
        <button onClick={close} className='closeButton'>
                <IoCloseCircleOutline />

                </button>
        <form onSubmit={handleSubmit}>
        
            <header>SIGN_UP_FORM</header>
            <span className="form_group">
               <span className="input_group">
                <label htmlFor="">FIRST NAME</label>
                <input type="text" placeholder='FIRST NAME' onChange={handleChange} name='firstName' value={formData.firstName} required/>
               </span>
               <span className='input_group'>
                <label htmlFor="">LAST NAME</label>
                <input type="text" placeholder='LAST NAME' onChange={handleChange} name='lastName' value={formData.lastName} required/>
               </span>
            </span>
            <span className="input_group">
                <label htmlFor="">EMAIL</label>
                <input type="email" placeholder='EMAIL' onChange={handleChange} name='email' value={formData.email} required/>
            </span>
            <span className="form_group">
            <span className='input_group'>
                <label htmlFor="">PASSWORD</label>
                <input type="password" placeholder='PASSWORD' onChange={handleChange} name='password' value={formData.password} />
            </span>
            <span className='input_group'>
                <label htmlFor=""> CONFIRM PASSWORD</label>
                <input type="password" placeholder='CONFIRM PASSWORD' onChange={handleChange} name='password' value={formData.password} required/>
            </span>
            </span>
            <span className="input_group">
                <label htmlFor="">DEPARTMENT</label>
                <input list='departments' id="deparment_selected" onChange={handleChange}  name="department_id" type='text'  value={formData.department_id}/>
                <datalist id="departments">
                {departments.map((department:any)=>(
                    
               
                <option value={department.id}>{department.name}</option>
            
                ))}

</datalist>
               
            </span>
            <button>SUBMIT</button>
            
        </form>
    </div>
  )
}


export default AddEmployee