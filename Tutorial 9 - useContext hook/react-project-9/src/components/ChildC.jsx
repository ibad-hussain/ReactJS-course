import React, { useContext } from 'react'
import { UserContext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext);

  return (
    <div>
      {/* Step 4 : Consume data inside particular child component as Consumer */}
      {user.name}
    </div>
  )
}

export default ChildC
