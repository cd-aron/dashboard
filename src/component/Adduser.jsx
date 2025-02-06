import React, { useState } from 'react'

import {auth,db} from '../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, serverTimestamp,setDoc, doc } from 'firebase/firestore'


import './styles/Adduser.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUpload} from '@fortawesome/free-solid-svg-icons'

function Adduser() {
    
    const[img, setImg] = useState("")
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[phoneNumber, setPhoneNumber] = useState("")
    const[pssd, setPssd] = useState("")
    const[role, setRole] = useState("")

    const no_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhf14RWxf6GFrK2A8CyOoXn4SEpZSBxuWOCs_T-A5peKF-fIpF&s"

    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setImg(imageUrl);
        }
      };
    

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
          const userCredential = await createUserWithEmailAndPassword(auth,email, pssd)
          const user = userCredential.user

          const userDocRef = doc(db,"users",user.uid)

           await setDoc(userDocRef,{
             uid: user.uid,
             name,
             email,
             phoneNumber,
             role,
             status:0,
             timeStamp: serverTimestamp()
          })

          console.log("User added ")
        }
        catch(error){
            console.log(error)
        }

    }

  return (
    <div className="new">
        <div className="newContainer">
            <div className="top">
                <h1>Add New User</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img src={img && img.trim() !== "" ? img : no_img} alt="img" />
                </div>
                <div className="right">
                    
                    <form onSubmit={handleSubmit}> 
                           
                        <div className="formInput">
                        <label htmlFor="file">
                            <FontAwesomeIcon icon={faUpload} className='icon'/>                    
                            <input type="file" id='file' onChange={handleImageChange}/>
                         </label>
                        </div>    

                        <div className="formInput">
                            <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder='John Doe' onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="formInput">
                            <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="formInput">
                            <label htmlFor="phoneNumber">Phone</label>
                                <input type="text" name="phoneNumber" id="phoneNumber" placeholder='+91' onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </div>


                        <div className="formInput">
                            <label htmlFor="pssd">Password</label>
                                <input type="password" name="pssd" id="pssd" placeholder='Enter Password' onChange={(e) => setPssd(e.target.value)} />
                        </div>

                        <div className="formInput">
                            
                            <label>Select Role</label> 
                                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                                    <option value=" ">Select Role</option>
                                    <option value="user">User</option>
                                    <option value="manager">Manager</option>
                                    <option value="admin">Admin</option>
                                </select>    
                            </div>
                       <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adduser