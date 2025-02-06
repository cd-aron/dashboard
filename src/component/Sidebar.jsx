import React, { useContext } from 'react'
import './styles/Sidebar.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faBarsProgress, faComment, faRightFromBracket, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../context/Authcontext'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Sidebar({setActiveSection}) {

    const navigate = useNavigate()
    const{dispatch} = useContext(AuthContext)


    const handleLogout = () =>{
        toast.success('Logout Successfull',{position:'center', autoClose:200});
        setTimeout(()=>{
             navigate('/')
        },2000)  
        dispatch({type:"LOGOUT"})
    }
  return (
    <div className='sidebar'>
        <div className="top"><span className='logo'>Bolds</span></div>
        <hr />
        <div className="center">
            <p className="title">MAIN</p>
            <ul>
            <li onClick={() => setActiveSection("home")}>
                <FontAwesomeIcon icon={faHouse} className='icon'/>
                <span>Dashboard</span>
            </li>

            <p className="title">USEFUL</p>
            <li onClick={() => setActiveSection("user")}>
            <FontAwesomeIcon icon={faUserPlus} className='icon'/>
                <span>Users</span>
            </li>

            <li>
            <FontAwesomeIcon icon={faBarsProgress} className='icon'/>
                <span>Tasks</span>
            </li>

            <li>
            <FontAwesomeIcon icon={faComment} className='icon'/>
                <span>Feedback</span>
            </li>
    
            <p className="title">USER</p>

            <li>
            <FontAwesomeIcon icon={faUser} className='icon'/>
                <span>Profile</span>
            </li>

      
            <li onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} className='icon'/>
                <span>Logout</span>
            </li>

            <p className="title">THEME</p>
        </ul>
        </div>
        

        <div className="bottom">
       
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar