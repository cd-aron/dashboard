import React, { useState } from 'react'
import './styles/Widget.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleUp,faUser,faListCheck,faCheck,faClock} from '@fortawesome/free-solid-svg-icons'

function Widget({type}) {
  let data;

  switch(type){
    case "user":
        data={
            title:"USERS",
            count:500,
            link: "See all users",
            icon: <FontAwesomeIcon icon={faUser} className='icon'/>
        }
        break;
    case "activeUser":
        data={
            title:"ACTIVE USERS",
            count: 120,
            link: "",
            icon: <FontAwesomeIcon icon={faUser} className='icon'/>
        }
        break;
    case "task":
        data={
            title:"TASKS",
            count: 300,
            link: "",
            icon: <FontAwesomeIcon icon={faListCheck} className='icon'/>
        }
        break;

    case "completedTask":
        data={
            title:"COMPLETED TASKS",
            count: 100,
            link: "",
            icon: <FontAwesomeIcon icon={faCheck} className='icon'/>
        }
        break;    

    case "pendingTask":
        data={
            title:"PENDING TASKS",
            count: 200,
            link: "",
            icon: <FontAwesomeIcon icon={faClock} className='icon'/>
        }
        break;      


        default: 
        break;
  }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className='iconContainer'>{data.icon}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
         <span className="counter">{data.count}</span> 
        </div>
    </div>
  )
}

export default Widget