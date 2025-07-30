import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  
  function handleAbout() {
    navigate("/about");
  };
  
  function handleDashboard() {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <h3>
        <button onClick={handleAbout}>
          Move to About Page
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

export default Home
