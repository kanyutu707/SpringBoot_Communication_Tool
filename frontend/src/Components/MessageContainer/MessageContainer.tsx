import React, { useEffect, useState } from 'react';
import './MessageContainer.css';

interface User {
  id: string;
  // Add other user properties if needed
}

interface Message {
  id: string;
  sender: User;
  recipient: User;
  message: string;
}

const SESSION_STORAGE_UPDATE = 'SESSION_STORAGE_UPDATE';

const MessageContainer: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateSelectedUser = () => {
    const selectUser = sessionStorage.getItem('selectedUser') || '';
    setSelectedUser(selectUser);
  };

  useEffect(() => {
    updateSelectedUser();
    const handleStorageChange = () => {
      updateSelectedUser();
    };

    window.addEventListener(SESSION_STORAGE_UPDATE, handleStorageChange);
    return () => {
      window.removeEventListener(SESSION_STORAGE_UPDATE, handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found');
        }
        const response = await fetch("http://localhost:8080/becot/message/get_all", {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Message[] = await response.json();
        setMessages(data);
       
        
      } catch (error) {
        console.error(`Error fetching messages:`, error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    if (selectedUser) {
      fetchData();
    }
  }, [selectedUser]);

  const loggedInUser = sessionStorage.getItem('loggedIn');

  if (isLoading) return <div>Loading messages...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className='messageContainer'>
      {messages.length === 0 ? (
        <div>No messages found.</div>
      ) : (
        messages.map((message: Message) => {
          const isRelevantMessage = 
            (message.sender?.id == selectedUser && message.recipient?.id == loggedInUser) ||
            (message.sender?.id == loggedInUser && message.recipient?.id == selectedUser);

          if (isRelevantMessage) {
            const isSentByLoggedUser = message.sender.id ==loggedInUser;
           
            return (
              <div key={message.id} className={isSentByLoggedUser ? "sent" : "received"}>

                <h3>{message.message}</h3>
              </div>
            );
          }
          return null;
        })
      )}
    </div>
  );
};

export default MessageContainer;