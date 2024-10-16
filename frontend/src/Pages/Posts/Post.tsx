import React, { useEffect, useState } from 'react'
import './Posts.css'
import { IoCreate } from 'react-icons/io5'
import { BiCommentAdd, BiComment } from 'react-icons/bi'
import { BsEye, BsHeart } from 'react-icons/bs'
import holder from '../../assets/pexels-creationsbyfaik-1025469.jpg'
import { RiDeleteBin3Fill } from 'react-icons/ri'
import Popup from 'reactjs-popup'
import NewPost from '../../Components/NewPost/NewPost'
import { LuBookMarked } from 'react-icons/lu'


const Post = () => {
    const [isOpen, setIsOpen]=useState(false);
    const openModal=()=>setIsOpen(true);
    const closeModal=()=>setIsOpen(false);

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
    <div className='postContainer'>
        <span className="controls">
            <header>POSTS</header>
            <span onClick={openModal}><IoCreate/> CREATE</span>
            <Popup open={isOpen} onClose={closeModal} modal nested>
                <NewPost close={closeModal}/>
            </Popup>
        </span>
        
            {messages.map((message:any)=>(
                <span className='message'>
                 <span className="header">
                 
             </span>
             <section className="body">
                 {message.message}
             </section>
             <section className="controls">
                 <RiDeleteBin3Fill/>
                
                 <span>
                     <BiComment/>
                     <h3>50</h3>
                 </span>
                 <span>
                     <LuBookMarked/>
                 </span>
             </section>
         </span>
            ))}
       
    </div>
  )
}

export default Post