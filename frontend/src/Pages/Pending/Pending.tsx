import React from 'react'
import './Pending.css'
import { BiLeftArrow, BiLeftArrowAlt, BiRightArrowAlt, BiRightArrow } from 'react-icons/bi'
import { MdOutlinePendingActions } from 'react-icons/md'

const Pending = () => {
  return (
    <div className='activeUserContainer pendingContainer'>
      <header>
        <MdOutlinePendingActions/> PENDING REQUESTS
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
            <button>ACCEPT ALL</button>
            <button>REJECT ALL</button>
          </span>
        <thead>
          <th>ID</th>
          <th>
            <input type="checkbox"/>
          </th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>DEPARTMENT</th>
          <th>EMAIL</th>
          <th>GROUP REQUEST</th>
          <th>REQUEST DATE</th>
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
                FINANCE
            </td>
            <td>
              oloo14@gmail.com
            </td>
            <td>
              HELLO
            </td>
            <td>
                4/5/2020
            </td>
            <td colSpan={2} className='actionButtons'>
            <button>
                ACCEPT
              </button>
              <button>
                REJECT
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
                FINANCE
            </td>
            <td>
              oloo14@gmail.com
            </td>
            <td>
              HELLO
            </td>
            <td>
                4/5/2020
            </td>
            <td colSpan={2} className='actionButtons'>
            <button>
                ACCEPT
              </button>
              <button>
                REJECT
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
                FINANCE
            </td>
            <td>
              oloo14@gmail.com
            </td>
            <td>
              HELLO
            </td>
            <td>
                4/5/2020
            </td>
            <td colSpan={2} className='actionButtons'>
            <button>
                ACCEPT
              </button>
              <button>
                REJECT
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
                FINANCE
            </td>
            <td>
              oloo14@gmail.com
            </td>
            <td>
              HELLO
            </td>
            <td>
                4/5/2020
            </td>
            <td colSpan={2} className='actionButtons'>
            <button>
                ACCEPT
              </button>
              <button>
                REJECT
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
                FINANCE
            </td>
            <td>
              oloo14@gmail.com
            </td>
            <td>
              HELLO
            </td>
            <td>
                4/5/2020
            </td>
            <td colSpan={2} className='actionButtons'>
            <button>
                ACCEPT
              </button>
              <button>
                REJECT
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
                FINANCE
            </td>
            <td>
              oloo14@gmail.com
            </td>
            <td>
              HELLO
            </td>
            <td>
                4/5/2020
            </td>
            <td colSpan={2} className='actionButtons'>
            <button>
                ACCEPT
              </button>
              <button>
                REJECT
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
                FINANCE
            </td>
            <td>
              oloo14@gmail.com
            </td>
            <td>
              HELLO
            </td>
            <td>
                4/5/2020
            </td>
            <td colSpan={2} className='actionButtons'>
            <button>
                ACCEPT
              </button>
              <button>
                REJECT
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
                FINANCE
            </td>
            <td>
              oloo14@gmail.com
            </td>
            <td>
              HELLO
            </td>
            <td>
                4/5/2020
            </td>
            <td colSpan={2} className='actionButtons'>
            <button>
                ACCEPT
              </button>
              <button>
                REJECT
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
                FINANCE
            </td>
            <td>
              oloo14@gmail.com
            </td>
            <td>
              HELLO
            </td>
            <td>
                4/5/2020
            </td>
            <td colSpan={2} className='actionButtons'>
            <button>
                ACCEPT
              </button>
              <button>
                REJECT
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
                FINANCE
            </td>
            <td>
              oloo14@gmail.com
            </td>
            <td>
              HELLO
            </td>
            <td>
                4/5/2020
            </td>
            <td colSpan={2} className='actionButtons'>
            <button>
                ACCEPT
              </button>
              <button>
                REJECT
              </button>
             
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Pending