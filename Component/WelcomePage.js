import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const WelcomePage=()=>{

  return (
    
    <div className="container-fluid text-center"><br></br>
          <h1 className="mt-0" style={{ fontSize: '3rem', color: '#333', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
        Welcome to Library
      </h1>
      <br></br>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <ul className="navbar-nav d-flex justify-content-around w-100">
          <li className="nav-item"><a class="nav-link text-primary" href="LoginForm">Login</a></li>
          <li className="nav-item"><a class="nav-link text-success" href="RegistrationForm">Registration</a></li>
          <li className="nav-item"><a class="nav-link text-warning" href="UpdatePassword">UpdatePaswsword</a></li>
          <li className="nav-item"><a class="nav-link text-info" href="#">AboutUs</a></li>
        </ul>
      </nav>  
    </div>
    <div>
      <img src='openbooks.jpg' height={600} width={1200}/>
    </div>
      
    <div>

    </div>
    </div>
  );
};

export default WelcomePage;
