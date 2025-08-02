import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // Stopwatch example
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  function handleStart() {
    timerRef.current = setInterval(() => {
      setTime(time => time+1)
    }, 1000);
  }
  
  function handleStop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function handleReset() {
    handleStop();
    setTime(0);
  }


  // DOM element access example
  const [count, setCount] = useState(0);
  let btnRef = useRef(0);

  function handleIncrement() {
    setCount(count+1);
  }

  function handleColor() {
    btnRef.current.style.backgroundColor = "yellow"
  }


  // Variable persistance example
  const [count, setCount] = useState(0);
  let val = useRef(0);

  function handleIncrement() {
    setCount(count+1);
    val.current = val.current + 1;
    console.log("Variable: ", val.current);
  }

  useEffect(() => {
    console.log("Something re-rendered");
  })
  

  return (
    // Stopwatch example
    <div>
      <h3>Stopwatch : {time} sec</h3>
      <br />
      <button onClick={handleStart}>Start</button>
      <br />
      <br />
      <button onClick={handleStop}>Stop</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>


    // DOM element access example
    <div>
      <p>Count : {count}</p>
      <br />
      <br />
      <button
        ref={btnRef}
        onClick={handleIncrement}>Increment</button>
      <br />
      <br />
      <button onClick={handleColor}>Change bg color</button>
    </div>


    // Variable persistance example
    <div>
      <p>Count : {count}</p>
      <br />
      <br />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App
