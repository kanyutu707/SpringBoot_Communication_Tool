import  { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const navigate=useNavigate();
    const moveToSignIn=()=>{
        navigate('/signIn')
    }
    const [formData, setFormData]=useState({
        "firstName":"",
        "lastName":"",
        "email":"",
        "password":"",
        "role":"ADMIN",
        "department_id":sessionStorage.getItem('deptId')

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
                moveToSignIn();
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation: ', error)
        }
    }
  return (
    <div className='signupContainer'>
        <form onSubmit={handleSubmit}>
            <header>SIGN_UP_FORM</header>
            <span className="form_group">
               <span className="input_group">
                <label htmlFor="">FIRST NAME</label>
                <input type="text" placeholder='FIRST NAME' onChange={handleChange} name='firstName' value={formData.firstName}/>
               </span>
               <span className='input_group'>
                <label htmlFor="">LAST NAME</label>
                <input type="text" placeholder='LAST NAME' onChange={handleChange} name='lastName' value={formData.lastName}/>
               </span>
            </span>
            <span className="input_group">
                <label htmlFor="">EMAIL</label>
                <input type="email" placeholder='EMAIL' onChange={handleChange} name='email' value={formData.email} />
            </span>
            <span className="form_group">
            <span className='input_group'>
                <label htmlFor="">PASSWORD</label>
                <input type="password" placeholder='PASSWORD' onChange={handleChange} name='password' value={formData.password} />
            </span>
            <span className='input_group'>
                <label htmlFor=""> CONFIRM PASSWORD</label>
                <input type="password" placeholder='CONFIRM PASSWORD' onChange={handleChange} name='password' value={formData.password}/>
            </span>
            </span>
            <button>SUBMIT</button>
            
        </form>
    </div>
  )
}

export default SignUp