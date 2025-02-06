import React,{useEffect, useState} from 'react'
import "./styles/Admin.scss"


import U_Sidebar from '../component/U_Sidebar'
import Navbar from '../component/Navbar'
import Widget from '../component/Widget'
import Tasks from '../component/Tasks'


const User = () => {
     const[activeSection, setActiveSection] = useState("home")
     const[img, setImg] = useState("")
     const email = new URLSearchParams(location.search).get("email");
     
  return (
    <div className='home'>
      <U_Sidebar setActiveSection={setActiveSection}/>
      <div className="homeContainer">
      <Navbar profileImg={img}/>

      {activeSection === "home" && (
         <div className="widgets">
            <Widget type="task"/>
            <Widget type="completedTask"/>
            <Widget type="pendingTask"/>
         </div> 
      )}

      {activeSection === "task" && <Tasks/>}
      </div>
    </div>
  )
}

export default User