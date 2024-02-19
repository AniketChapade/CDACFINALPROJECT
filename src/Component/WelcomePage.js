import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './Registration';

const WelcomePage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const[showRegistrationForm,setShowRegistrationForm]=useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLoginForm(true);
    setShowRegistrationForm(false);
  };

  const handleRegistrationClick = (event) => {
    event.preventDefault();
    setShowRegistrationForm(true);
    setShowLoginForm(false);
  };

  const handleAboutUsClick = () => {
    
  };

  return (
    <div
      className="container-fluid text-center"
      style={{
        backgroundImage: "url('img.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",  
        alignItems: "center",
      }}
    >
      <div className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <ul className="navbar-nav d-flex justify-content-around w-100">
          <li className="nav-item">
            <Link to="/LoginForm" className="nav-link text-primary" onClick={handleLoginClick}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/RegistrationForm" className="nav-link text-success" onClick={handleRegistrationClick}>
              Registration
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AboutUs" className="nav-link text-info" onClick={handleAboutUsClick}>
              AboutUs
            </Link>
          </li>
        </ul>
      </div>

      <h1 className="mt-0" style={{ fontSize: '3rem', color: '#343a40' }}>
        Welcome to Library
      </h1>
      
      {showLoginForm && <LoginForm />}
      {showRegistrationForm && <RegistrationForm/>}


    </div>
  );
};

export default WelcomePage;
