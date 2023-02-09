import React, { useRef, useState } from 'react'
import styles from '../Component/SignUp/SIgnUp.module.css'
export default function Inboox(props) {
    
    const [newtask, setNewtask] = useState(false)
    const titleRef = useRef("")
    const calendarRef = useRef("")
    const newwtaskHandler = ()=>{
        setNewtask(true)
    }

    const addHandler = (e)=>{
        e.preventDefault()
        if(titleRef.current.value === ""){
            window.alert("Task cannot be empty")
            return
        }
        let mewobj = {
            number: props.list.length+1 ,
            title: titleRef.current.value ,
            date: new Date(calendarRef.current.value)
        }
        props.append(mewobj)
        setNewtask(false)
        
    }
    const cancelHandler = ()=>{
        setNewtask(false)
        calendarRef.current.focus();
    calendarRef.current.blur();
    }
    const dlt = (index)=>{
    //    console.log(index)
        props.delete(index)
    }
   
  return (
    <div>
    <div class="card text-center">
         <div style={{alignItems:'center'}}></div>
        <h2 style={{}}>INBOX</h2>
        <br/>
        {!newtask && (
            <button onClick={newwtaskHandler} class="btn btn-secondary">Add New</button>
        )}
        </div>
        {newtask && (
            <form>
                <input type="text" ref={titleRef} ></input>
                
                <div>
                     <button onClick={addHandler} className="btn btn-success">Add Task</button>
                    <button onClick={cancelHandler} className="btn btn-danger">Cancel</button>
                    <input type = "date" ref={calendarRef} defaultValue= {new Date().toJSON().slice(0, 10)} ></input>
                </div>
            </form>
        )}
        <div>
            {props.list.map((list,index)=>{
                return (
                    <div key = {list.number}>
                        <div className={styles.innerbox}>
                    <div className={styles.footer}>
                       <h4> {list.title} ({list.date.toLocaleDateString()})</h4>
                        <button style={{marginLeft:"30px"}} type="button" className="btn btn-outline-danger" onClick={()=>{dlt(list.number)}}>remove</button>
</div>
                    </div>

                    </div>
                )
            })}
        </div>
   
    </div>
  )
}
