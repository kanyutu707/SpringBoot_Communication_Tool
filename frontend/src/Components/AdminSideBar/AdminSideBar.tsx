import React from 'react'
import './AdminSideBar.css'
import { GrDashboard, GrGroup } from 'react-icons/gr'
import { VscVmActive } from 'react-icons/vsc'
import { LuPanelTopInactive } from 'react-icons/lu'
import { MdPending, MdRequestPage } from 'react-icons/md'
import { FcDepartment } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const AdminSideBar = () => {
    const navigate=useNavigate();

    const moveToDashboard=()=>{
        navigate('/admin/');
    }
    const moveToActiveUsers=()=>{
        navigate('/admin/activeusers')
    }
    const moveToInActiveUsers=()=>{
        navigate('/admin/inactiveusers')
    }
    const moveToActiveDept=()=>{
        navigate('/admin/activedept')
    }
    const moveToInactiveDept=()=>{
        navigate('/admin/inactivedept')
    }
    const moveToPending=()=>{
        navigate('/admin/pending')
    }
  return (
    <div className='adminsidebarcontainer'>
      <header>ADMIN</header>
      <section>
        <div>
            <span className="navigators" onClick={moveToDashboard}>
                <GrDashboard/> 
                <h3>DASHBOARD</h3>
            </span>
            
        </div>
        <div>
            <span className="navigators" >
                <GrGroup/>
                <h3>USERS</h3>
            </span>
            <span className="sub_navigators" onClick={moveToActiveUsers}>
                <VscVmActive/>
                <h4>ACTIVE</h4>
            </span>
            <span className="sub_navigators" onClick={moveToInActiveUsers}>
                <LuPanelTopInactive/>
                <h4>INACTIVE</h4>
            </span>
        </div>
        <div>
            <span className="navigators">
                <FcDepartment/>
                <h3>DEPARTMENTS</h3>
            </span>
            <span className="sub_navigators" onClick={moveToActiveDept}>
                <VscVmActive/>
                <h4>ACTIVE</h4>
            </span>
            <span className="sub_navigators" onClick={moveToInactiveDept}>
                <LuPanelTopInactive/>
                <h4>INACTIVE</h4>
            </span>
        </div>
        <div>
            <span className="navigators">
                <MdRequestPage/>
                <h3>REQUESTS</h3>
            </span>
            <span className="sub_navigators" onClick={moveToPending}>
                <MdPending/>
                <h4>PENDING</h4>
            </span>
           
        </div>
      </section>
    </div>
  )
}

export default AdminSideBar
