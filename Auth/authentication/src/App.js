import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import SignUp from './Component/SignUp/SignUp'
import Todo from './Todo/Todo'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element = {<SignUp/>} />
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
