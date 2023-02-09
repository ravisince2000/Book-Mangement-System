
import { useState } from 'react';
//import './App.css';
import Header from './Header';
import Mainsection from './Mainsection';
import Sidenav from './Sidenav';

function App() {
const [active, setActive] = useState("INBOX")
  return (
    <div>
      <Header/>
      <div className = "row">
        <div className ="col -md-5">
          <Sidenav change = {setActive}/>
        </div>
        <div className = 'col-md-10'>
          <Mainsection active={active}/>
        </div>
      </div>
    </div>
  );
}

export default App;
