import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  // Variation 1 : Runs on every render
  // useEffect(() => {
  //   alert("I will run on each render");
  // })

  // Variation 2 : Runs on only first render
  // useEffect(() => {
  //   alert("I will run on only first render");
  // }, [])

  // Variation 3 : Runs when single dependency renders
  // useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count])
  
  // Variation 4 : Runs when multiple dependencies renders
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated");
  // }, [count, total])

  // Variation 5 : Used clean-up function
  // useEffect(() => {
  //   alert("Count is updated")
  //   return () => {
  //     alert("Count is unmounted")
  //   }
  // }, [count])
  
  
  // function handleClick() {
  //   setCount(count+1)
  // }
  
  // function handleTotal() {
  //   setTotal(total+1)
  // }
  

  return (
    <div>
      {/* <button onClick={handleClick}>
        Update Count
      </button>
      <h2>Count is : {count}</h2>
      <br />
      <button onClick={handleTotal}>
        Update Total
      </button>
      <h2>Total is : {total}</h2> */}

      {/* <LoggerComponent /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      {/* <ResizeComponent /> */}
      {/* <MultiEffectComponent /> */}
    </div>
  )
}

export default App
