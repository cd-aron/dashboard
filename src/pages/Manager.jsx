import React,{useEffect, useState} from 'react'
import "./styles/Admin.scss"


import M_Sidebar from '../component/M_Sidebar'
import Navbar from '../component/Navbar'
import Widget from '../component/Widget'
import Addtask from '../component/Addtask'

const Manager = () => {
     const[activeSection, setActiveSection] = useState("home")
     const[img, setImg] = useState("")
     const uid = new URLSearchParams(location.search).get("uid");
  return (
    <div className='home'>
      <M_Sidebar setActiveSection={setActiveSection}/>
      <div className="homeContainer">
      <Navbar profileImg={img}/>

      {activeSection === "home" && (
         <div className="widgets">
            <Widget type="user"/>
            <Widget type="task"/>
            <Widget type="completedTask"/>
            <Widget type="pendingTask"/>
         </div> 
      )}

      {activeSection === "assignTask" && <Addtask/>}
      </div>
    </div>
  )
}

export default Manager