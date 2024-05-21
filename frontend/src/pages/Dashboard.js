import React, { useState } from 'react';
import './dashboard.css'; // Import the CSS file

// UserProfile component
const UserProfile = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="logo-container">
          <div className="logo">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <h3>User Profile</h3>
        {showForm ? (
          // User profile form goes here
          <div>User profile form content</div>
        ) : (
          <button className="btn" onClick={handleClick}>
            View Profile
          </button>
        )}
      </div>
    </div>
  );
};

// ProjectInfo component
const ProjectInfo = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="logo-container">
          <div className="logo">
            <i className="fas fa-project-diagram"></i>
          </div>
        </div>
        <h3>Project Info</h3>
        {showForm ? (
          // Project info form goes here
          <div>Project info form content</div>
        ) : (
          <button className="btn" onClick={handleClick}>
            View Project
          </button>
        )}
      </div>
    </div>
  );
};

// Dashboard component
const Dashboard = () => {
  return (
    <div className="dashboard">
      <main>
        <div className="cards-container">
          <div className="card-wrapper">
            <UserProfile />
          </div>
          <div className="card-wrapper">
            <ProjectInfo />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;