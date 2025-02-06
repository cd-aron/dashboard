import React, { useContext } from 'react'
import Login from './pages/Login'
import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom'
import Admin from './pages/Admin'
import { AuthContext } from './context/Authcontext';
import Adduser from './component/Adduser';
import Manager from './pages/Manager';
import User from './pages/User';

function App() {

  const {currentUser} = useContext(AuthContext);
  
  const RequireAuth = ({children}) => {
     return currentUser?children: <Navigate to="/" />
  }

  console.log(currentUser)
  return (
     <BrowserRouter basename='/dashboard'>
       <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/admin' element={ <RequireAuth><Admin/></RequireAuth>}/>
         <Route path='/admin/adduser' element={ <RequireAuth><Adduser/></RequireAuth>}/>
         <Route path='/manager' element={ <RequireAuth><Manager/></RequireAuth>}/>
         <Route path='/dashboard' element={ <RequireAuth><User/></RequireAuth>}/>
       </Routes>
     </BrowserRouter>
 
   
  )
}

export default App