import React from 'react'
import './PendingRequests.css'
import { MdPending } from 'react-icons/md'

const PendingRequests = () => {
  return (
    <div className='PendingRequestsContainer'>
        <header><MdPending/> PENDING REQUESTS</header>
        <section>
            <table>
                <thead>
                    <th>#</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>DEPARTMENT</th>
                    <th>DATE</th>
                    <th>REQUEST TIME</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>JOHN</td>
                        <td>OLOO</td>
                        <td>oloo14@gmail.com</td>
                        <td>FINANCE</td>
                        <td>15/9/2000</td>
                        <td>8:00 am</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>JOHN</td>
                        <td>OLOO</td>
                        <td>oloo14@gmail.com</td>
                        <td>FINANCE</td>
                        <td>15/9/2000</td>
                        <td>8:00 am</td>
                    </tr>    <tr>
                        <td>1</td>
                        <td>JOHN</td>
                        <td>OLOO</td>
                        <td>oloo14@gmail.com</td>
                        <td>FINANCE</td>
                        <td>15/9/2000</td>
                        <td>8:00 am</td>
                    </tr>    <tr>
                        <td>1</td>
                        <td>JOHN</td>
                        <td>OLOO</td>
                        <td>oloo14@gmail.com</td>
                        <td>FINANCE</td>
                        <td>15/9/2000</td>
                        <td>8:00 am</td>
                    </tr>    <tr>
                        <td>1</td>
                        <td>JOHN</td>
                        <td>OLOO</td>
                        <td>oloo14@gmail.com</td>
                        <td>FINANCE</td>
                        <td>15/9/2000</td>
                        <td>8:00 am</td>
                    </tr>   
                </tbody>
            </table>
        </section>
    </div>
  )
}

export default PendingRequests