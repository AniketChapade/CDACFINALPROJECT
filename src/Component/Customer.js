import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomerHome() {
    return (
        <div className="container-fluid text-center">
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav d-flex justify-content-around w-100">
                    <li className="nav-item">
                      
                    </li>
                    <li className="nav-item">
                        <Link to="Viewaccount" className="nav-link">View Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Searchbook" className="nav-link">Search book</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Logout" className="nav-link">Logout</Link>
                    </li>
                </ul>
            </nav>
            </div>
   
        </div>
    );
}
