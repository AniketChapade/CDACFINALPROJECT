import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Navbar, NavDropdown } from 'react-bootstrap';

export default function CustomerHome() {
   
    return (
        <div>
            <h1 style={{ marginLeft: 530 }}>LMS</h1>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <ul className="nav navbar">
                    <li className="nav-item">
                    <Navbar.Brand> Customer Home.</Navbar.Brand>
                    </li>


                    <li className="nav-item">
                        <Link to="Viewaccount" className="nav-link">View Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="CancleMembership" className="nav-link">Cancle Membership</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Reservebook" className="nav-link">Reserve book</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Removereservation" className="nav-link">Remove reservation</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Renewbook" className="nav-link">Renew book</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="Returnbook" className="nav-link">Return book</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Searchbook" className="nav-link">Search book</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Logout" className="nav-link">Logout</Link>
                    </li>



                </ul>
            </nav>
            <Outlet />
       </div>
);
}