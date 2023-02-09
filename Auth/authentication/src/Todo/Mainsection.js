import React, { useState } from 'react'
import Inboox from './Inboox'
import Next from './Next'
import Today from './Today'

export default function Mainsection(props) {
  const [filteredList, setFilteredList] = useState([])
  const addToList = (obj)=>{
    const newList=[...filteredList,obj]
    setFilteredList(newList)

  }
  const pull = (index)=>{
   // console.log(index)
    const updateList = filteredList.filter((item)=>{
        return item.number !== index
    })
    setFilteredList(updateList)
  }
  return (
    <div >
        <div className='col-md-4'>
        {props.active==="INBOX" && (
          <Inboox list = {filteredList} append ={addToList} delete={pull}/>
        )}
        {props.active==="TODAY" &&(
          <Today list ={filteredList} />
        )}
        {props.active==="NEXT" &&(
          <Next list={filteredList} />
        )}
    </div>
    </div>
  )
}
