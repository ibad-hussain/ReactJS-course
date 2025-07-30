import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  
  function handleHome() {
    navigate("/");
  };
  
  function handleAbout() {
    navigate("/about");
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <h3>
        <button onClick={handleHome}>
          Move to Home Page
        </button>
      </h3>
      <h3>
        <button onClick={handleAbout}>
          Move to About Page
        </button>
      </h3>
      <Outlet />
    </div>
  )
}

export default Dashboard
