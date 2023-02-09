import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import InputForm from '../InputForm/InputForm'
import styles from './SIgnUp.module.css'

export default function SignUp() {
    const [errormsg, setErrormsg] = useState()
    const [values, setValues] = useState({
        name:"",
        email:"",
        pass:""
    })
    const [diabled, setDisabled] = useState()
    const navigate = useNavigate()
    const handlesubmission=()=>{
        if(!values.name || !values.email || !values.pass){
            setErrormsg("All fiels are cumpolsory !!")
            return ;
        }
        setErrormsg("")
        setDisabled(true)
        createUserWithEmailAndPassword(auth,values.email,values.pass)
        .then((res)=>{
            const user = res.user
            updateProfile(user,{
                displayName:values.name,
            })
            navigate('/login')
        }).catch((err)=>{
            setDisabled(false)
            setErrormsg(err.message)
        })
    }

  return (
    <div className={styles.container}>
        <div className={styles.innerBox}> 
            <h1 className={styles.heading}>Sign Up</h1>
            <InputForm type="text" label="Name: " placeholder="Enter your name" 
            onChange={(event)=>setValues((prev)=>({...prev,name:event.target.value}))} />
            <InputForm type="email" label="Email: " placeholder="Enter your Email" 
              onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))}/>
            <InputForm type="password" label="Password: " placeholder ="Enter your password"
              onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))}/>
            <div className={styles.footer}>
                <b className={styles.error}>{errormsg}</b>

                <button onClick={handlesubmission} disabled={diabled}>Sign Up</button>
                <p>Already have an account? {" "}</p>
                <span>
                    <Link to='/login'>Login</Link>
                </span>
            </div>
        </div>
    </div>
  )
}
