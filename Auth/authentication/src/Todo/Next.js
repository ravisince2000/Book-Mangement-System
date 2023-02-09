import React from 'react'
import ListRen from './ListRen'

export default function Next(props) {
  const date = new Date()
  const filteredList = props.list.filter((task)=>{
    const difference = task.date - date
    const diffDays = difference/(1000*60*60*24)
  
    if(diffDays<7 && diffDays>0)
    return true
    else
    return false
  })
  return (
    <div>
          <ListRen list={filteredList} />
    </div>
  )
}
