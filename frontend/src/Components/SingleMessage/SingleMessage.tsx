import React, { useEffect, useState } from 'react'
import'./SingleMessage.css'
import holder from '../../assets/pexels-creationsbyfaik-1025469.jpg';
import { BiComment, BiCommentAdd } from 'react-icons/bi';
import {  BsEye, BsHeart } from 'react-icons/bs';
import holder2 from '../../assets/pexels-matheusnatan-3297593.jpg'
import { LuBookMarked } from 'react-icons/lu';


const SingleMessage = () => {
    const [messages, setMessages]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response=await fetch("http://localhost:8080/becot/message/get_all",{
              headers:{
                'Authorization':`Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type':'application/json'
              }
            });
            if(!response.ok){
              throw new Error('Network response was not ok');
            }
            const data=await response.json();
            setMessages(data);
          }catch(error){
            throw new Error(`${error}`);
          }
        };
        fetchData();
    }, []);
  return (
    <div className='singleMessageContainer'>
        {messages.map((message:any)=>(
            <span className='message'>
            <span className="header">
                <img src={holder} alt=""  />
                <h3>{message.sender.firstName + " " + message.sender.lastName}</h3>
            </span>
            <section className="body">
               {message.message}
            </section>
            <section className="controls">
              
                <span>
                    <BiComment/>
                    <h3>50</h3>
                </span>
               <LuBookMarked/>
            </section>
        </span>
        ))}
        
       
       
    </div>
  )
}

export default SingleMessage