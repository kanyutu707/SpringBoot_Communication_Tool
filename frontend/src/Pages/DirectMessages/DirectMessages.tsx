import React from 'react'
import './DirectMessage.css'
import Contacts from '../../Components/Contacts/Contacts'
import Profile from '../../Components/Profile/Profile'
import MessageContainer from '../../Components/MessageContainer/MessageContainer'
import TypingArea from '../../Components/TypingArea/TypingArea'

const DirectMessages = () => {
  return (
    <div className='dmContainer'>
      <Contacts/>
      <section>
      <Profile/>
      <MessageContainer/>
      <TypingArea/>
      </section>
    </div>
  )
}

export default DirectMessages
