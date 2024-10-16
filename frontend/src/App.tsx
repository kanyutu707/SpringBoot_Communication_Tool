import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Client from './Layouts/Client/Client'
import Index from './Pages/Index/Index'
import SignUp from './Pages/SignUp/SignUp'
import SignIn from './Pages/SignIn/SignIn'
import Company from './Pages/Company/Company'
import Admin from './Layouts/Admin/Admin'


function App() {


  return (
    <div className='appContainer'>
      <BrowserRouter>
      <Routes>
        <Route path='/clients/*' element={ <Client/>}/>
        <Route path='/' element={<Index/>}/>
        <Route path='/compReg' element={<Company/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
      
    </ div>
  )
}

export default App
