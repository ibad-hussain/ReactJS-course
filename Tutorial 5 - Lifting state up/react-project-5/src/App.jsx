import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState('');

  return (
    <div className="container">
      <Card title="card1" name={name} setName={setName}/>
      <Card title="card2" name={name} setName={setName}/>
      <h3>I am inside parent and my name is : {name}</h3>
    </div>
  )
}

export default App
