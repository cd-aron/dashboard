import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell, faMoon} from '@fortawesome/free-solid-svg-icons'

import Avatar from '../assets/avatar.jpg'

import './styles/Navbar.scss'

function Navbar({profileImg}) {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="items">

             <div className="item">  <FontAwesomeIcon icon={faMoon} className='icon'/></div>

                <div className="item">
                  <FontAwesomeIcon icon={faBell} className='icon'/>
                  <div className="counter">1</div>
                </div>

                <div className="profile">
                    <img src={Avatar} alt="User"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar