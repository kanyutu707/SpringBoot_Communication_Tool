import React from 'react'
import { BiLeftArrow, BiLeftArrowAlt, BiRightArrowAlt, BiRightArrow } from 'react-icons/bi'
import { BsPersonBadge } from 'react-icons/bs'
import './InactiveUsers.css'

const InactiveUsers = () => {
  return (
    <div className='inactiveUserContainer'>
    <header>
      <BsPersonBadge/> INACTIVE USERS
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
      <span className='massActivate'>
          <button>ACTIVATE SELECTED USER ACCOUNTS</button>
          
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
        <tr>
          <td>
            1
          </td>
          <td>
            <input type="checkbox"  />
          </td>
          <td>
            JOHN
          </td>
          <td>
            OLOO
          </td>
          <td>
            oloo14@gmail.com
          </td>
          <td>
            15/3/2000
          </td>
          <td colSpan={2} className='actionButtons'>
         
            <button>
              ACTIVATE
            </button>
           
          </td>
        </tr>
        <tr>
          <td>
            1
          </td>
          <td>
            <input type="checkbox"  />
          </td>
          <td>
            JOHN
          </td>
          <td>
            OLOO
          </td>
          <td>
            oloo14@gmail.com
          </td>
          <td>
            15/3/2000
          </td>
          <td colSpan={2} className='actionButtons'>
         
            <button>
              ACTIVATE
            </button>
           
          </td>
        </tr>
        <tr>
          <td>
            1
          </td>
          <td>
            <input type="checkbox"  />
          </td>
          <td>
            JOHN
          </td>
          <td>
            OLOO
          </td>
          <td>
            oloo14@gmail.com
          </td>
          <td>
            15/3/2000
          </td>
          <td colSpan={2} className='actionButtons'>
         
            <button>
              ACTIVATE
            </button>
           
          </td>
        </tr>
        <tr>
          <td>
            1
          </td>
          <td>
            <input type="checkbox"  />
          </td>
          <td>
            JOHN
          </td>
          <td>
            OLOO
          </td>
          <td>
            oloo14@gmail.com
          </td>
          <td>
            15/3/2000
          </td>
          <td colSpan={2} className='actionButtons'>
         
            <button>
              ACTIVATE
            </button>
           
          </td>
        </tr>
        <tr>
          <td>
            1
          </td>
          <td>
            <input type="checkbox"  />
          </td>
          <td>
            JOHN
          </td>
          <td>
            OLOO
          </td>
          <td>
            oloo14@gmail.com
          </td>
          <td>
            15/3/2000
          </td>
          <td colSpan={2} className='actionButtons'>
         
            <button>
              ACTIVATE
            </button>
           
          </td>
        </tr>
        <tr>
          <td>
            1
          </td>
          <td>
            <input type="checkbox"  />
          </td>
          <td>
            JOHN
          </td>
          <td>
            OLOO
          </td>
          <td>
            oloo14@gmail.com
          </td>
          <td>
            15/3/2000
          </td>
          <td colSpan={2} className='actionButtons'>
         
            <button>
              ACTIVATE
            </button>
           
          </td>
        </tr>
        <tr>
          <td>
            1
          </td>
          <td>
            <input type="checkbox"  />
          </td>
          <td>
            JOHN
          </td>
          <td>
            OLOO
          </td>
          <td>
            oloo14@gmail.com
          </td>
          <td>
            15/3/2000
          </td>
          <td colSpan={2} className='actionButtons'>
         
            <button>
              ACTIVATE
            </button>
           
          </td>
        </tr>
        <tr>
          <td>
            1
          </td>
          <td>
            <input type="checkbox"  />
          </td>
          <td>
            JOHN
          </td>
          <td>
            OLOO
          </td>
          <td>
            oloo14@gmail.com
          </td>
          <td>
            15/3/2000
          </td>
          <td colSpan={2} className='actionButtons'>
         
            <button>
              ACTIVATE
            </button>
           
          </td>
        </tr>
        <tr>
          <td>
            1
          </td>
          <td>
            <input type="checkbox"  />
          </td>
          <td>
            JOHN
          </td>
          <td>
            OLOO
          </td>
          <td>
            oloo14@gmail.com
          </td>
          <td>
            15/3/2000
          </td>
          <td colSpan={2} className='actionButtons'>
         
            <button>
              ACTIVATE
            </button>
           
          </td>
        </tr>
        <tr>
          <td>
            1
          </td>
          <td>
            <input type="checkbox"  />
          </td>
          <td>
            JOHN
          </td>
          <td>
            OLOO
          </td>
          <td>
            oloo14@gmail.com
          </td>
          <td>
            15/3/2000
          </td>
          <td colSpan={2} className='actionButtons'>
         
            <button>
              ACTIVATE
            </button>
           
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default InactiveUsers