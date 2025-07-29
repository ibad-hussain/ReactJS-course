import { useState, createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'

// Step 1 : Create context
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({name:"John"});

  return (
    <>
      {/* Step 2 : Wrap all child components inside Provider */}
      {/* Step 3 : Pass data to children */}
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}