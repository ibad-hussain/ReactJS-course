import React from 'react'
import { useParams } from 'react-router-dom'

const ParamsComponent = () => {
    const {id} = useParams();

  return (
    <div>
      Student : {id}
    </div>
  )
}

export default ParamsComponent
