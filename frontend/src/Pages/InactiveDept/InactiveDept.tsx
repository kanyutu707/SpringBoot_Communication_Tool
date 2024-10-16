import React from 'react'
import { BiLeftArrow, BiLeftArrowAlt, BiRightArrowAlt, BiRightArrow } from 'react-icons/bi'
import { MdLocalFireDepartment, MdOutlineLocalFireDepartment } from 'react-icons/md'
import './InactiveDept.css'

const InactiveDept = () => {
  return (
    <div className='activeUserContainer activeDeptContainer inactivedept'>
      <header>
        <MdOutlineLocalFireDepartment/> INACTIVE DEPARTMENTS
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
        <span className='massActivate deptDeactivate'>
            <button>ACTIVATE SELECTED DEPARTMENT</button>
           
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
          <tr>
            <td>
              1
            </td>
            <td>
              <input type="checkbox"  />
            </td>
            <td>
              FINANCE
            </td>
            <td>
              32
            </td>
            <td>
              14/2/2000
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
              FINANCE
            </td>
            <td>
              32
            </td>
            <td>
              14/2/2000
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
              FINANCE
            </td>
            <td>
              32
            </td>
            <td>
              14/2/2000
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
              FINANCE
            </td>
            <td>
              32
            </td>
            <td>
              14/2/2000
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
              FINANCE
            </td>
            <td>
              32
            </td>
            <td>
              14/2/2000
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
              FINANCE
            </td>
            <td>
              32
            </td>
            <td>
              14/2/2000
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
              FINANCE
            </td>
            <td>
              32
            </td>
            <td>
              14/2/2000
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
              FINANCE
            </td>
            <td>
              32
            </td>
            <td>
              14/2/2000
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
              FINANCE
            </td>
            <td>
              32
            </td>
            <td>
              14/2/2000
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
              FINANCE
            </td>
            <td>
              32
            </td>
            <td>
              14/2/2000
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

export default InactiveDept