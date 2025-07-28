import React, { useState, useEffect } from 'react'

const MultiEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Variation 3 : Runs when single dependency renders
  useEffect(() => {
    console.log("Count changed", count);
  }, [count]);

  // Variation 2 : Runs on only first render
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Timer started");
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Timer stopped");
    }
  }, [])

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count+1)}>Click me</button>
      <h2>Seconds : {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
