import React from 'react'
import './DepartmentSection.css'
import { FcDepartment } from 'react-icons/fc'
const DepartmentSection = () => {
  return (
    <div className='departmentSectionContainer'>
        <header><FcDepartment/>DEPARTMENT</header>
        <section>
            <table>
                <caption>ACTIVE</caption>
                <thead>
                    <th>#</th>
                    <th>DEPARTMENT NAME</th>
                    <th>TOTAL MEMBERS</th>
                    <th>ACTIVE MEMBERS</th>
                    <th>DEPARTMENT HEAD</th>
                    <th>INACTIVE MEMBERS</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>FINANCE</td>
                        <td>10</td>
                        <td>5</td>
                        <td>JOHN OLOO</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>FINANCE</td>
                        <td>10</td>
                        <td>5</td>
                        <td>JOHN OLOO</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>FINANCE</td>
                        <td>10</td>
                        <td>5</td>
                        <td>JOHN OLOO</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>FINANCE</td>
                        <td>10</td>
                        <td>5</td>
                        <td>JOHN OLOO</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>FINANCE</td>
                        <td>10</td>
                        <td>5</td>
                        <td>JOHN OLOO</td>
                        <td>4</td>
                    </tr>
                    
                </tbody>
            </table>
            <table>
                <caption>INACTIVE</caption>
                <thead>
                    <th>#</th>
                    <th>DEPARTMENT NAME</th>
                    <th>TOTAL MEMBERS</th>
                    <th>ACTIVE MEMBERS</th>
                    <th>DEPARTMENT HEAD</th>
                    <th>INACTIVE MEMBERS</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>FINANCE</td>
                        <td>10</td>
                        <td>5</td>
                        <td>JOHN OLOO</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>FINANCE</td>
                        <td>10</td>
                        <td>5</td>
                        <td>JOHN OLOO</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>FINANCE</td>
                        <td>10</td>
                        <td>5</td>
                        <td>JOHN OLOO</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>FINANCE</td>
                        <td>10</td>
                        <td>5</td>
                        <td>JOHN OLOO</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>FINANCE</td>
                        <td>10</td>
                        <td>5</td>
                        <td>JOHN OLOO</td>
                        <td>4</td>
                    </tr>
                    
                </tbody>
            </table>
        </section>
    </div>
  )
}

export default DepartmentSection