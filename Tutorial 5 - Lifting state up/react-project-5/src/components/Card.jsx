import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div>
        <div className="card-container">
            <input type="text" onChange={(e)=> props.setName(e.target.value)}/>
            <h2>I am {props.title} and my name is : {props.name}</h2>
        </div>
    </div>
  )
}

export default Card
