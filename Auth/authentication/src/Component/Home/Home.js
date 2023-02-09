import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
export default function Home() {
  return (
    <>
    <div className={styles.header}>WELCOME TO TODO LIST APPLICATION</div>
    <div className={styles.container}> 
      <div className={styles.innerBox}> 
        <h2 className={styles.heading}>If you are existing user</h2>
        <Link className={styles.heading} to='/login'><h2 type="button"  class="btn btn-primary btn-lg" >Login</h2></Link><br/>
        </div>
        <div className={styles.innerBox}> 
        <h2 className={styles.heading}>New user?</h2>
        <Link className={styles.heading} to="/signup"><h2 type="button"  class="btn btn-primary btn-lg" >SignUp</h2></Link>
    </div>
    </div>
    </>
  )
}
