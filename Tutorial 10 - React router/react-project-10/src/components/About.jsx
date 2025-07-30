import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  
  function handleHome() {
    navigate("/");
  };
  
  function handleDashboard() {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>About Page</h1>
      <h3>
        <button onClick={handleHome}>
          Move to Home Page
        </button>
      </h3>
      <h3>
        <button onClick={handleDashboard}>
          Move to Dasboard Page
        </button>
      </h3>
    </div>
  )
}

export default About
