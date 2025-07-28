import React, { useState, useEffect } from 'react'

const ResizeComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Variation 2 : Runs on only first render
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      console.log("Event listener added");
    
      return () => {
        window.removeEventListener('resize', handleResize);
        console.log("Event listener removed");
      }
    }, [])
    
  return (
    <div>
      <h1>Window width : {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent
