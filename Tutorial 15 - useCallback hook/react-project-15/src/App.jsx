import { useState, useCallback } from 'react'
import './App.css'
import ChildComponent from './components/childComponent';
import ExpensiveComponent from './components/ExpensiveComponent'

function App() {
  // First use case
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count+1)
  }, [count])


  return (
    // Second use case
    <div>
      <ExpensiveComponent />
    </div>


    // First use case
    <div>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Increment</button>
      <br />
      <br />
      <ChildComponent
        buttonName="Click me"
        handleClick={handleClick}
      />
    </div>
  )
}

export default App

