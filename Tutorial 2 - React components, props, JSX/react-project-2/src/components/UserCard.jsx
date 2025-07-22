import React from 'react'
import './UserCard.css'
// import img1 from '../assets/img1.jpg'

const UserCard = (props) => {
  return (
    <div>
      <div className="user-container" style={props.style}>
        <div className="user-name">{props.name}</div>
        <div className="user-img"><img src={props.img} alt={props.name}/></div>
        <div className="user-desc">{props.desc}</div>
      </div>
    </div>
  )
}

export default UserCard
