import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddBookPage from './AddBookPage';
import ViewBooks from './ViewBooks';
import RegistrationLibrarianForm from './RegistrationLibrarian';
import ViewLibrarians from './ViewLibrarians';
import ViewMembers from './ViewMembers'; 

import WelcomePage from './WelcomePage';


const AdminDashboard = () => {
  const [showAddBook, setAddBook] = useState(false);
  const [showViewBooks, setViewBooks] = useState(true);
  const [showAddLibrarian, setAddLibrarian] = useState(false);
  const [showViewLibrarians, setViewLibrarians] = useState(false);
  const [showViewMembers, setViewMembers] = useState(false); 

  const handleAddBook = (e) => {
    e.preventDefault();
    setAddBook(true);
    setViewBooks(false);
    setAddLibrarian(false);
    setViewLibrarians(false);
    setViewMembers(false);
  };

  const handleViewBooks = (e) => {
    e.preventDefault();
    setViewBooks(true);
    setAddBook(false);
    setAddLibrarian(false);
    setViewLibrarians(false);
    setViewMembers(false);
  };

  const handleAddLibrarian = (e) => {
    e.preventDefault();
    setAddLibrarian(true);
    setAddBook(false);
    setViewBooks(false);
    setViewLibrarians(false);
    setViewMembers(false);
  };

  const handleViewLibrarians = (e) => {
    e.preventDefault();
    setViewLibrarians(true);
    setAddBook(false);
    setViewBooks(false);
    setAddLibrarian(false);
    setViewMembers(false);
  };

  const handleViewMembers = (e) => {
    e.preventDefault();
    setViewMembers(true);
    setAddBook(false);
    setViewBooks(false);
    setAddLibrarian(false);
    setViewLibrarians(false);
  };
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 bg-dark text-light text-center" style={{ padding: '15px 0', borderBottom: '2px solid #fff', margin: 0 }}>
          <h1 className="mb-0" style={{ margin: 0, color: 'Lightblue' }}>Admin</h1>
        </div>
      </div>
      <div className="row">
      <div className="col-md-2" style={{ minHeight: '100vh', borderRight: '1px solid #ccc', backgroundColor: '#333', fontSize: '18px' }}>
  
          <nav className="nav flex-column">
          <Link to="/AddLibrarian" className="nav-link" onClick={handleAddLibrarian}>
              Add Librarian
            </Link>
            <Link to="/ViewLibrarians" className="nav-link" onClick={handleViewLibrarians}>
              View Librarians
            </Link>
            <Link to="/AddBookPage" className="nav-link" onClick={handleAddBook}>
              Add Book
            </Link>
            <Link to="/ViewBooks" className="nav-link" onClick={handleViewBooks}>
              View Books
            </Link>
            <Link to="/ViewMembers" className="nav-link" onClick={handleViewMembers}>
              View Members
            </Link>
            <Link to="/" className="nav-link">
              Logout
            </Link>
          </nav>
        </div>
        <div className="col-md-10">
          {showAddBook && <AddBookPage />}
          {showViewBooks && <ViewBooks />}
          {showAddLibrarian && <RegistrationLibrarianForm />}
          {showViewLibrarians && <ViewLibrarians />}
          {showViewMembers && <ViewMembers />} 
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
