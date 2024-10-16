import React, { useEffect, useState } from 'react'
import './ActiveUser.css'
import { PiPersonArmsSpread } from 'react-icons/pi'
import { BiLeftArrow, BiLeftArrowAlt, BiRightArrow, BiRightArrowAlt } from 'react-icons/bi'
import Popup from 'reactjs-popup'
import AddEmployee from '../../Components/AddEmployee/AddEmployee'

const ActiveUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [users, setUsers]=useState([]);
  useEffect(()=>{
      const fetchData=async()=>{
        try{
          const response=await fetch("http://localhost:8080/user/get_all",{
            headers:{
              'Authorization':`Bearer ${sessionStorage.getItem('token')}`,
              'Content-Type':'application/json'
            }
          });
          if(!response.ok){
            throw new Error('Network response was not ok');
          }
          const data=await response.json();
          setUsers(data);
        }catch(error){
          throw new Error(`${error}`);
        }
      };
      fetchData();
  }, []);
  return (
    <div className='activeUserContainer'>
      <header>
        <PiPersonArmsSpread/> ACTIVE USERS
      </header>
      <table>
        <caption>
          <span>
            <BiLeftArrow/>
            <BiLeftArrowAlt/>
            <h3>
              1/25
            </h3>
            <BiRightArrowAlt/>
            <BiRightArrow/>
           
          </span>
          <input type="search" placeholder='search user' />
        
        </caption>
        <span className='massDeactivate'>
            <button onClick={openModal}>ADD NEW  USER</button>
            <Popup open={isOpen} onClose={closeModal} modal nested>
              <AddEmployee close={closeModal}/>
            </Popup>
            <button>DELETE SELECTED USERS</button>
          </span>
        <thead>
          <th>ID</th>
          <th>
            <input type="checkbox"/>
          </th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>EMAIL</th>
          <th>REGISTRATION DATE</th>
          <th colSpan={2} >ACTION
          
          </th>
        </thead>
        <tbody>
          {users.map((user:any)=>(
             <tr>
             <td>
               1
             </td>
             <td>
               <input type="checkbox"  />
             </td>
             <td>
               {user.firstName}
             </td>
             <td>
               {user.lastName}
             </td>
             <td>
               {user.email}
             </td>
             <td>
               15/3/2000
             </td>
             <td colSpan={2} className='actionButtons'>
             <button>
                 UPDATE
               </button>
               <button>
                 DEACTIVATE
               </button>
              
             </td>
           </tr>
          ))}
         
         
        </tbody>
      </table>
    </div>
  )
}

export default ActiveUser
