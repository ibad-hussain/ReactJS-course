import './App.css'
import { useState } from 'react'
import ColorSwitch from './components/ColorSwitch';

function App() {
  function handleClick() {
    alert("Button is clicked")
  }
  
  function handleMouseOver() {
    alert("Paragraph is hovered")
  }
  
  function handleInputChange(e) {
    console.log("Form value till now: ", e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form is submitted")
  }

  {/* Stop Propagation example */}
  const [clicks, setClicks] = useState(0);
  function handleClicksOutside() {
    setClicks(clicks+1)
  }
  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }
  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
    <div>

      {/* Stop Propagation example */}
      <div style={{ width: '100%', height: '100%' }} onClick={handleClicksOutside}>
        <ColorSwitch onChangeColor={handleChangeColor} />
        <br />
        <br />
        <h2>Clicks on the page: {clicks}</h2>
      </div>


      {/* Immediate invokation
      {/* (incorrect way) */}
      <button style={{"marginBottom":"20px"}} onClick={alert("Immediate invokation")}>
        Click me
      </button>
      {/* (correct way) */}
      <button style={{"marginBottom":"20px"}} onClick={()=> alert("Immediate invokation")}>
        Click me
      </button>


      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
      </form>


      <p onMouseOver={handleMouseOver} style={{"border":"1px solid black", "borderRadius":"5px", "padding":"3px"}}>
        I am a para
      </p>


      <button onClick={handleClick}>
        Click me
      </button>

    </div>
  )
}

export default App
