import React, { useState } from 'react'

import {auth,db} from '../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, serverTimestamp,setDoc, doc } from 'firebase/firestore'


import './styles/Addtask.scss'

function Addtask() {
    
    const[email, setEmail] = useState("")
    const[title, setTitle] = useState("")
    const[des,setDes] = useState("")
    const[start, setStart] =useState("")
    const[end,setEnd] = useState("") 
 



    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
           const taskId = `{email}-${Date.now()}`;
           const taskDocRef = doc(db,"tasks",taskId)

           await setDoc(taskDocRef,{
             email,
             title,
             description:des,
             startDate:start,
             endDate:end,
             status:"Pending",
             timeStamp: serverTimestamp()
          })
          
           alert("Task Assigned")
           
           setEmail("")
           setTitle("")
           setDes("")
           setStart("")
           setEnd("")
        }
        catch(error){
            console.log(error)
        }

    }

  return (
    <div className="new">
        <div className="newContainer">
            <div className="top">
                <h1>Assign Task</h1>
            </div>
            <div className="bottom">
                <div className="right">
                    
                    <form onSubmit={handleSubmit}> 

                        <h4>To:</h4>

                        <div className="formInput">
                            <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="formInput">
                            <label htmlFor="title">Task Title</label>
                                <input type="text" id="title" placeholder='Example Title' onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="formInput">
                            <label htmlFor="des">Task Description</label>
                             <textarea id="des" onChange={(e) => setDes(e.target.value)} > </textarea>
                        </div>

                        
                        <div className="formInput">
                            <label htmlFor="start">Start Date</label>
                            <input type="date" id="start" onChange={(e) => setStart(e.target.value)} />
                        </div>

                        <div className="formInput">
                            <label htmlFor="end">End Date</label>
                            <input type="date" id="end" onChange={(e) => setEnd(e.target.value)} />
                        </div>

                        
                        <div className="formInput">
                          <button type='submit'>Assign</button>
                        </div>
                      
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addtask