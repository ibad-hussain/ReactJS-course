import React, { useContext } from 'react'
import { ThemeContext, InfoContext } from '../App'

const ChildC = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const info = useContext(InfoContext);

    function toggleTheme() {
      if (theme === 'light')
        setTheme('dark')
      else
        setTheme('light')
    }

  return (
    <div>
      <h2 style={{color:"#ff0000"}}>{info}</h2>
      <button onClick={toggleTheme} style={{padding:"10px", fontSize:"20px"}}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC
