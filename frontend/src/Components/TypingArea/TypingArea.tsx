import React, { useEffect, useState } from 'react'
import './TypingArea.css'
import { BsTelegram } from 'react-icons/bs'
import { CgAttachment } from 'react-icons/cg'

const SESSION_STORAGE_UPDATE = 'SESSION_STORAGE_UPDATE';

interface FormData {
  sender_id: string | null;
  recipient_id: string;
  message: string;
}

const TypingArea: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState('');

  const updateUser = () => {
    const userId = sessionStorage.getItem('selectedUser') || '';
    setSelectedUser(userId);
  };

  useEffect(() => {
    updateUser();

    const handleStorageChange = () => {
      updateUser();
    };

    window.addEventListener(SESSION_STORAGE_UPDATE, handleStorageChange);

    return () => {
      window.removeEventListener(SESSION_STORAGE_UPDATE, handleStorageChange);
    };
  }, []);

  const [formData, setFormData] = useState<FormData>({
    sender_id: sessionStorage.getItem("loggedIn"),
    recipient_id: selectedUser,
    message: ""
  });

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      recipient_id: selectedUser
    }));
  }, [selectedUser]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/becot/message/create", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
   
      if (data) {
        // Consider using a less disruptive method to update the UI
        // window.location.href = window.location.href;
        setFormData(prevData => ({ ...prevData, message: "" }));
        // You might want to trigger a re-fetch of messages here
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className='typingarea'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name='message' 
          onChange={handleChange} 
          value={formData.message}
          placeholder="Type a message..."
        />
        <button type="button" className="attachment-button">
          <CgAttachment/>
        </button>
        <button type="submit" className="send-button">
          <BsTelegram/>
        </button>
      </form>
    </div>
  )
}

export default TypingArea