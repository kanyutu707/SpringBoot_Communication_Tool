import React, { useState } from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        "email": "",
        "password": ""
    });

    const handleChange = (e: any) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/becot/authenticate/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const jwtToken = data.token;
            const parts = jwtToken.split('.');
            const payload = JSON.parse(atob(parts[1]));
            sessionStorage.setItem('email', payload.sub);
            sessionStorage.setItem('token', jwtToken);
            sessionStorage.setItem('departmentId', payload.department.id);
            sessionStorage.setItem("companyId", payload.department.companyId);
            sessionStorage.setItem("loggedIn", payload.id)

            if(payload.role==="ADMIN"){
                navigate("/Admin")
            }
            else if(payload.role==="USER"){
                navigate("/clients")
            }
            else{
             window.alert("DOES NOT EXIST")
            }
            

        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    
    return (
        <div className='signInContainer'>
            <form action="" onSubmit={handleSubmit}>
                <header>SIGN IN FORM</header>
                <span className="input_group">
                    <label htmlFor="">EMAIL</label>
                    <input type="email" placeholder='EMAIL' onChange={handleChange} name='email' value={formData.email}/>
                </span>
                <span className='input_group'>
                    <label htmlFor="">PASSWORD</label>
                    <input type="password" placeholder='PASSWORD' onChange={handleChange} name='password' value={formData.password} />
                </span>
                <button type='submit'>SUBMIT</button>
                <span>DO NOT HAVE AN ACCOUNT <Link to='/compReg'> REGISTER</Link></span>
            </form>
        </div>
    )
}

export default SignIn