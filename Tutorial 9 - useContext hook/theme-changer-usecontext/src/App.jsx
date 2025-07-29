import { useState, createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'

const ThemeContext = createContext();
const InfoContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [info, setInfo] = useState("Welcome to Web Dev course");

  return (
    <>
      <InfoContext.Provider value={info}>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <div className="container" style={{backgroundColor:theme==='light'?"#f7f7c0":"#1f2430"}}>
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </InfoContext.Provider> 
    </>
  )
}

export default App
export {ThemeContext}
export {InfoContext}
