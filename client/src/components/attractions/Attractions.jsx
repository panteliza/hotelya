import React from 'react';
import "./attractions.css";
import { Link } from 'react-router-dom';
function Attractions() {
  return (
    <div className="hero-section">
    <div className="text-container">
      <h1>Your Journey Your Story</h1>
      <p>Choose your favourite destinations.</p>
      <button className='show'><Link to="/travelplan" className="link">
          Travel Plan
        </Link></button>
    </div>
    </div>
    
    
  );
}

export default Attractions;
