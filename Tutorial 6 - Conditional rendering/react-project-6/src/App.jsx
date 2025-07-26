import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [isLoggedIn, setLoggodIn] = useState(true)

  // Using early return
  if (!isLoggedIn) {
    return (
      <div>
        <h3>Welcome to the Web Dev course</h3>
        <div>
          <LoginBtn />
        </div>
      </div>
    )
  }

  // Using Logical operator
  return (
    <div>
      <h3>Welcome to the Web Dev course</h3>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )
  
  // Using ternary operator
  return (
    <div>
      {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
    </div>
  )
  
  // Using if/else
  if (isLoggedIn) {
    return (
      <LogoutBtn />
    )
  }
  else {
    return (
      <LoginBtn />
    )
  }
}

export default App
