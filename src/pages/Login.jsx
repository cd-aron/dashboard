import React,{useContext, useState} from 'react'
import {auth, db} from '../Firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

import { AuthContext } from '../context/Authcontext'

import styles from './styles/login.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

import Logo from '../assets/bolds_logo.jpg'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext)

  const[error, setError] = useState(false) 
  const[email, setEmail] = useState("") 
  const[pssd, setPssd] = useState("")

  const handleLogin =(e) => {
     e.preventDefault()
     
     try{ 
       signInWithEmailAndPassword(auth, email, pssd).then((userCredential) =>{
           const user = userCredential.user;
           dispatch({type:"LOGIN", payload:user})
           navigate(`/admin?email=${user.email}`)

       })
       .catch((error) => {
           setError(true)
       })
     }
     catch(error){
       console.log(error)
     }
  } 

  return (
    <div className={styles.body}>
      <div  className={styles.container}>
        <div className={styles.logo}><img src={Logo} alt="logo"/></div>
       <div className={styles.heading}><h1>Login</h1></div>
     <form className={styles.form} onSubmit={handleLogin} method='POST'>
   
        <div className={styles.row}>
            <div className={styles.inputContainer}>
            <div className={styles.iconContainer}>
             <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
             </div>
             <input type="email" name="email" id="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            </div>
        </div>

        <br />
        <div className={styles.row}>
            <div className={styles.inputContainer}>
              <div className={styles.iconContainer}>
             <FontAwesomeIcon icon={faLock} className={styles.icon}/>
             </div>
             <input type="password" name="pssd" id="pssd" placeholder='Enter your password' onChange={(e) => setPssd(e.target.value)}/>
            </div>
        </div>
        <br />
        <div className={styles.row}>
         <button type="submit">Login</button>
         {error && <div style={{color:'rgb(245, 47, 47)', textAlign:'center', fontSize:'14px', fontWeight:'bold', margin:'20px 0'}}> <p> Invalid Email or Password</p></div>}
        </div>
       
     </form>
     </div>
    </div>
  )
}


export default Login