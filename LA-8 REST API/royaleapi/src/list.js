import React from 'react'

export default function List({card}) {
  
    return (
        <div>
    {card.map(p=>(
        <div key={p}>
            <img src={p}></img>
        </div>
    ))}
    </div>
  )
}