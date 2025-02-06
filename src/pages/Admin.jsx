import React,{useEffect, useState} from 'react'
import "./styles/Admin.scss"


import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import Widget from '../component/Widget'
import Adduser from '../component/Adduser'

const Admin = () => {
     const[activeSection, setActiveSection] = useState("home")
     const[img, setImg] = useState("")
     const uid = new URLSearchParams(location.search).get("uid");
  return (
    <div className='home'>
      <Sidebar setActiveSection={setActiveSection}/>
      <div className="homeContainer">
      <Navbar profileImg={img}/>

      {activeSection === "home" && (
         <div className="widgets">
            <Widget type="user"/>
            <Widget type="activeUser"/>
            <Widget type="task"/>
            <Widget type="completedTask"/>
            <Widget type="pendingTask"/>
         </div> 
      )}

      {activeSection === "user" && <Adduser/>}
      </div>
    </div>
  )
}

export default Admin