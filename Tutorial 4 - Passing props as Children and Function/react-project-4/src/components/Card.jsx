import React from 'react'

// const Card = ({name, desc}) => {
//   return (
//     <div>
//       {name}, {desc}
//     </div>
//   )
// }

const Card = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Card
