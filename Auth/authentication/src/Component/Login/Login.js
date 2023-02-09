import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../SignUp/SIgnUp.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

export default function Login() {
  const [values, setValues] = useState({
    email:"",
    pass:""
  })
  const [errormsg, setErrormsg] = useState()
  const navigate = useNavigate()
  const handlesubmission=()=>{
      if(!values.email|| !values.pass){
        setErrormsg("All fields are compulsory")
        return
      }
        signInWithEmailAndPassword(auth,values.email,values.pass)
        .then((res)=>{
          navigate("/todo")
        }).catch((err)=>{
          setErrormsg(err.message)
        })
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
      <InputForm type="email" label="Email: " placeholder="Enter your Email" 
              onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))}/>
            <InputForm type="password" label="Password: " placeholder ="Enter your password"
              onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))}/>
      
      <div className={styles.footer}>
                <b className={styles.error}>{errormsg}</b>

                <button onClick={handlesubmission} >Login</button>
                <p>Already have an account? {" "}</p>
                <span>
                    <Link to='/signup'>Sign Up</Link>
                </span>
            </div> 
    </div>
    </div>
  )
}
