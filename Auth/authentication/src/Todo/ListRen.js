import React from 'react'

export default function ListRen(props) {
  return (
   <>
   {props.list.map((list)=>{
    return (
        <div>
                <div>
                    {list.title}({list.date.toLocaleString()})
                </div>
        </div>
    )
   })}
   </>
  )
}
