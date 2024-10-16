import React, { useEffect, useState } from 'react';
import holder1 from '../../assets/pexels-creationsbyfaik-1025469.jpg';
import './Contacts.css';


const SESSION_STORAGE_UPDATE = 'SESSION_STORAGE_UPDATE';

const Contacts = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/user/get_all", {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const filteredData=data.filter(data=>data.id!=sessionStorage.getItem('loggedIn'))
                setUsers(filteredData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchData();
    }, []);

    const getUserDetails = (firstName: string, lastName: string, userId:any) => {
        sessionStorage.setItem("fName", firstName);
        sessionStorage.setItem("lName", lastName);
        sessionStorage.setItem("selectedUser", userId);
      
        window.dispatchEvent(new Event(SESSION_STORAGE_UPDATE));
    };

    return (
        <div className='contactContainer'>
            <span>
                <input type="search" placeholder='search...' />
            </span>
            {users.map((user: any) => (
                <span key={user.id} onClick={() => getUserDetails(user.firstName, user.lastName, user.id)}>
                    <img src={holder1} alt="" />
                    <h3>{user.firstName + "  " + user.lastName}</h3>
                </span>
            ))}
        </div>
    );
};

export default Contacts;