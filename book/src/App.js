import React, { useState } from 'react'
import useList from './Custom/useList'
import './App.css';


export default function App() {
  const {list,push,pull}= useList()
  const [book, setBook] = useState("")
  const [author, setAuthor] = useState("")
  const [isbn, setIsbn] = useState("")
  const onsubmit = (event)=>{
    event.preventDefault()
    push(book)
    setBook("")
  }
  const onsubmitt = (event)=>{
    event.preventDefault()
    push(book)
    setBook("")
  }
  const onsubmittt = (event)=>{
    event.preventDefault()
    push(book)
    setBook("")
  }

  return (
    <div>
      <h1 style={{textAlign:'center', fontFamily:'monospace', fontSize:'4rem', color:'white'}}>Book Management System</h1>
      <div class="cls">
       <div className="col-sm-5 mb-3 mb-sm-0">
      <div className="card">
      <div style={{textAlign:"center"}} className="card-body">
      <form onSubmit={(event)=>{onsubmit(event)}} class="mod">
        <label class = "aad"><h1 style={{paddingBottom:"60px"}}><b>Add book item</b></h1></label><br/>
        <label>Book Title: &nbsp;</label>
        <input style={{
        color: "#292b2c",
        backgroundColor: "#fff",
      }}type="text" onChange={(e)=>{setBook(e.target.value)}} value={book}></input><br/><br/>
      </form>
      <form onSubmit={(event)=>{onsubmitt(event)}} class="mod">
       <label>Author Name: &nbsp;</label>
        <input style={{
        color: "#292b2c",
        backgroundColor: "#fff",
      }}type="text" onChange={(e)=>{setAuthor(e.target.value)}} value={author}></input><br/><br/>
      </form>
      <form onSubmit={(event)=>{onsubmittt(event)}} class="mod">
       <label>ISBN#: &nbsp;</label>
        <input style={{
        color: "#292b2c",
        backgroundColor: "#fff",
      }}type="text" onChange={(e)=>{setIsbn(e.target.value)}} value={isbn}></input><br/><br/>
        <button type="submit" className="btn btn-primary">Add book</button>
      </form>
      </div>
      </div>
      </div>
      </div>
      <h5>
        {list.map((listItem,listIndex)=>{
          return(
            <div className="col-sm-2 mb-3 mb-sm-0">
    <div className="card1 border-dark mb-3">
      <div style={{backgroundColor:"beige",marginLeft:"50px"}} className="card1-body">
      <span class="add" key={listIndex}>{listItem}</span>
        <button style={{marginLeft:"30px"}} type="button" className="btn btn-outline-danger" onClick={()=>{pull(listIndex)}}>remove</button>
      </div>
    </div>
  </div>
          )
        })}
      
      </h5>
      </div>
  )
}
