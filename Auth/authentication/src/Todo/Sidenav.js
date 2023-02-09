import React from 'react'

export default function Sidenav(props) {
  return (
    <div>
    <ul>
      <li type="button" class="btn btn-outline-success" onClick={()=>{props.change("INBOX")}}>Inbox</li><br/><br/>
      <li type="button" class="btn btn-outline-info" onClick={()=>{props.change("TODAY")}}>Today</li><br/><br/>
      <li type="button" class="btn btn-outline-dark" onClick={()=>{props.change("NEXT")}}>Next 7 days</li>
    </ul>
    </div>
   
  )
}
