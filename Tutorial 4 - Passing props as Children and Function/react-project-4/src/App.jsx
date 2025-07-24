import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <Button handleClick={handleClick} text="Click me">
        <h1>{count}</h1>
      </Button>

      {/* <Card name="ibad" desc="hello">
        <h1>I am John Doe</h1>
        <p>I am a Software Engineer</p>
        <p>I work at Google</p>
      </Card>
      <Card children="I am a children">
        I am a Web Developer
      </Card> */}
    </div>
  )
}

export default App
