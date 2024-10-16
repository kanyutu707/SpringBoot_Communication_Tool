import React, { useState, useEffect } from 'react';
import './Profile.css';
import holder from '../../assets/pexels-creationsbyfaik-1025469.jpg';


const SESSION_STORAGE_UPDATE = 'SESSION_STORAGE_UPDATE';

const Profile = () => {
    const [fullName, setFullName] = useState('');

    const updateName = () => {
        const fName = sessionStorage.getItem("fName") || '';
        const lName = sessionStorage.getItem("lName") || '';
        const newFullName = `${fName} ${lName}`.trim();
        console.log('Updating name:', newFullName); 
        setFullName(newFullName);
    };

    useEffect(() => {
  
        updateName();

        
        const handleStorageChange = () => {
            console.log('Storage changed event received'); 
            updateName();
        };

      
        window.addEventListener(SESSION_STORAGE_UPDATE, handleStorageChange);

        return () => {
            window.removeEventListener(SESSION_STORAGE_UPDATE, handleStorageChange);
        };
    }, []);

    return (
        <div className='profileContainer'>
            <h3>{fullName}</h3>
            <img src={holder} alt="" />
        </div>
    );
};

export default Profile;