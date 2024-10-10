import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you have CSS for styling

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Personal Finance Tracker</h1>
      <p className="importance-text">
        Tracking your finances is essential for managing your budget effectively, saving for future goals, and making informed financial decisions. 
        It helps you understand where your money goes and enables you to take control of your financial health.
      </p>
      <div className="images-container">
        <img src="path_to_image1.jpg" alt="Finance Tracking" className="finance-image" />
        <img src="path_to_image2.jpg" alt="Budgeting" className="finance-image" />
      </div>
      <Link to="/dashboard">
        <button className="start-button">Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
