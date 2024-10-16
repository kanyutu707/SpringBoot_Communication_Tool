import React, { useEffect, useState } from 'react'
import { BiLeftArrow, BiLeftArrowAlt, BiRightArrowAlt, BiRightArrow } from 'react-icons/bi'

import './ActiveDept.css'
import { MdLocalFireDepartment } from 'react-icons/md'
import AddDepartment from '../../Components/AddDepartment/AddDepartment'
import Popup from 'reactjs-popup'
const ActiveDept = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
    <div className='activeUserContainer activeDeptContainer'>
      <header>
        <MdLocalFireDepartment/> ACTIVE DEPARTMENTS
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
        <span className='massDeactivate deptDeactivate'>
            <button onClick={openModal}>ADD NEW  DEPARTMENT</button>
            <Popup open={isOpen} onClose={closeModal} modal nested>
              <AddDepartment close={closeModal}/>
            </Popup>
            <button>DELETE SELECTED DEPARTMENT</button>
          </span>
        <thead>
          <th>ID</th>
          <th>
            <input type="checkbox"/>
          </th>
          <th>DEPARTMENT NAME</th>
          <th>NO OF EMPLOYEES</th>
         
          <th>REGISTRATION DATE</th>
          <th colSpan={2} >ACTION
          
          </th>
        </thead>
        <tbody>
          {departments.map((deparment:any)=>(
             <tr>
             <td>
               1
             </td>
             <td>
               <input type="checkbox"  />
             </td>
             <td>
               {deparment.name}
             </td>
             <td>
               32
             </td>
             <td>
               14/2/2000
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

export default ActiveDept