import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { Link, useNavigate } from 'react-router-dom';
import './Style/MainLogIn.css'; // Import the CSS file
//import mainImage from './img/mainImg.jpg';
import playerImage from './img/org.jpg';
import  organizerImage from './img/player.jpg';
import Navbar from './Navbar';

function MainLogIn() {
  const navigate = useNavigate();

  const handleClick1 = () => {
    // Redirect to the organizer login page
    navigate('/orginizerLogin');
  }

  const handleClick2 = () => {
    // Redirect to the player login page
    navigate('/playerLogin');
  }

  return (
    <>
    <Navbar/>
    <div className="login-container">
      <div className="login-box">
        <img src={organizerImage} alt="Organizer Image" />
        <h2>Login As Organizer</h2>
        <button onClick={handleClick1}>Login</button>
      </div>
      <div className="login-box">
        <img src={playerImage} alt="Player Image" />
        <h2>Login As Player</h2>
        <button onClick={handleClick2}>Login</button>
      </div>
    </div>
    </>
  );
}

export default MainLogIn;