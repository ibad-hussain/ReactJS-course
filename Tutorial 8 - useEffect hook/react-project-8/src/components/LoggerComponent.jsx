import React, { useState, useEffect } from 'react'

const LoggerComponent = () => {
    const [count, setCount] = useState(0);

    // Variation 1 : Runs on every render
    useEffect(() => {
      console.log("Component rendered or Count changed : ", count)
    })
    
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={()=> setCount(count+1)}>
                Click me
            </button>

        </div>
    )
}

export default LoggerComponent

