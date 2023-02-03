
import { useState } from 'react';
import './App.css';


function App() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [address, setAddress] = useState("")
  const [gender, setGender] = useState("")
  const [state, setState] = useState("")
  const [pincode, setPincode] = useState("")
  const [course, setCourse] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emptyerr, setEmptyerr] = useState("")
  const [fnmerr, setFnmerr] = useState("")
  const [lnmerr, setLnmerr] = useState("")
  const [addrerr, setAddrerr] = useState("")
  const [gndrerr, setGndrerr] = useState("")
  const [clserr, setClserr] = useState("")
  const [pinerr, setPinerr] = useState("")
  const [crserr, setCrserr] = useState("")
  const [emladrr, setEmladrr] = useState("")
  const [psderr, setPsderr] = useState("")
  const [username, setUsername] = useState("")
const validate= ()=>{
  if(firstname === "" || lastname ==="" || address===""||state==="" || 
  pincode===""|| course===""|| email===""||password===""){
      setEmptyerr("All fields are mandetory")
      setUsername("")
      return false
  }

  if(!firstname.match(/^[A-Za-z]+$/)){
      setFnmerr("Invalid Credential Only contain A-Z a-z")
      setUsername("")
      return false
  }
  if(!lastname.match(/^[A-Za-z]+$/)){
    setLnmerr("Invalid Credential Only contain A-Z a-z")
    setUsername("")
      return false
  }
  if(!address.match(/^[A-za-z0-9- ]+$/)){
    setAddrerr("Invalid address")
    setUsername("")
      return false
  }
  if(!gender.match(/male|female|other/i)){
    setGndrerr("Please Identify Male,Female or other")
    setUsername("")
      return false
  }
  if(state.match(/Select Class/)){
      setClserr("Choose your present class")
      setUsername("")
      return false
  }
  if(!pincode.match(/^[0-9]+$/)){
    setPinerr("Invalid Pincode")
    setUsername("")
      return false
  }
  if(!course.match(/^[A-Za-z0-9- ]+$/)){
      setCrserr("Inavlid course type")
      setUsername("")
      return false
  }
  if(!email.includes("@")){
    setEmladrr("Invalid email aadress")
    setUsername("")
      return false
  }
  if(!password.match(/^[A-Za-z0-9]+$/)){
      setPsderr("Choose password that must contain A-Z ,a-z and 0-9")
      setUsername("")
      return false
  }
  if(password.length<8){
    setPsderr("Choose password minimum of 6 digits")
    setUsername("")
      return false
  }
  return true
}
const reset = ()=>{
  setAddrerr("")
  setClserr(" ")
  setCrserr("")
  setEmladrr("")
  setFnmerr("")
  setGndrerr("")
  setLnmerr("")
  setPinerr("")
  setPsderr("")
}

const haldlesubmit=(e)=>{
  e.preventDefault()
  reset()
  const isValid = validate()
  if(isValid){
    setFirstname("")
    setLastname("")
    setCourse("")
    setPincode("")
    setEmail("")
    setGender(" Select one")
    setPassword("")
    setAddress("")
    setState("Select one")
    reset()
    setUsername(firstname)
  }
}
  return (
    <>
    <div id="carouselExample" class="carousel slide" style={{textAlign:'center'}}>
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" style={{textAlign:'center'}}>
      <img style ={{height:'700px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rOs80PZdw3FccQNoBZbo3pv7zjZfPvIq7Q&usqp=CAU" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style ={{height:'700px'}} src="https://www.edustoke.com/assets/uploads-new/b450dc4f-49aa-4182-ac06-d7bc16b31b14.JPG" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style ={{height:'700px'}} src="https://www.stmichaelspatna.edu.in/images/School.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br/>
<br/>
    <div className="App">
      <header className='add'>
      <h1>St. Michael High School</h1>
      <h3>Registration Form</h3>
      </header>
      <form class = 'my-3' onSubmit={haldlesubmit}>
      <span><b>Name: </b><input type="text" placeholder='Enter your First Name' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>{fnmerr}
      &nbsp;<input type="text" placeholder='Enter your Last Name' value={lastname} onChange={(e)=>{setLastname(e.target.value)}} />{lnmerr}</span><br/><br/>
      <input type="text" placeholder='Enter your Address' value={address} onChange={(e)=>{setAddress(e.target.value)}} />{addrerr}<br/><br/>
        <select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
        <option value="Select Any" selected>Select Any</option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select><br/>  {gndrerr}     <br/>
        <select name="state" value={state} onChange={(e)=>{setState(e.target.value)}} ><br/><br/>
        <option value="Select Class" selected>Select Class</option>
        <option value="class 1" selected>Class 1</option>
        <option value="class 2" selected>Class 2</option>
        <option value="class 3" selected>Class 3</option>
        <option value="class 4" selected>Class 4</option>
        <option value="class 5" selected>Class 5</option>
        <option value="class 6" selected>Class 6</option>
        <option value="class 7" selected>Class 7</option>
        <option value="class 8" selected>Class 8</option>
        <option value="class 9" selected>Class 9</option>
        <option value="class 10" selected>Class 10</option>
        <option value="class 11" selected>Class 11</option>
        <option value="class 12" selected>Class 12</option>
        </select>{clserr}<br/><br/>
        <input type="text" placeholder='Enter your Pincode' value={pincode} onChange={(e)=>{setPincode(e.target.value)}} />{pinerr}<br/><br/>
        <input type="text" placeholder='Enter your Course' value={course} onChange = {(e)=>{setCourse(e.target.value)}} />{crserr}<br/><br/>
        <input type="email" placeholder='Enter your Email ID' value={email} onChange={(e)=>{setEmail(e.target.value)}} />{emladrr}<br/><br/>
        <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />{psderr}<br/>
       <h5 style={{fontFamily:"cursive"}}> {emptyerr}</h5><br/>
        <button  type="submit" class="btn btn-dark" value="Submit">Register</button>
      </form>
      <div>
        <h2 style={{color:"HighlightText" ,fontFamily:'monospace'}}><b>{username? "Welcome to St. Michaels " + username:" "}</b></h2>
      </div>
    </div>
    </>
  );
}

export default App;
