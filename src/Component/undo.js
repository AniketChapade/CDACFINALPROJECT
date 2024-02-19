import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LibrarianDashboard = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', subject: '', price: '' });
  const [selectedOption, setSelectedOption] = useState(null);
  const [topNavbarTitle, setTopNavbarTitle] = useState('Library Management');

  const handleAddBook = () => {
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '', subject: '', price: '' });
    setSelectedOption('Add Book');
    setTopNavbarTitle('Add Book');
  };

  const handleViewUsers = () => {
    setSelectedOption('View Users');
    setTopNavbarTitle('View Users');
  };

  const handleViewBooks = () => {
    setSelectedOption('View Books');
    setTopNavbarTitle('View Books');
  };

  const handleEditBook = () => {
    setSelectedOption('Edit Book');
    setTopNavbarTitle('Edit Book');
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
      <div className="col-md-12 bg-lightgrey text-center" style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
  <h1 className="mb-0">{topNavbarTitle}</h1>
</div>

      </div>
      <div className="row">
        <div className="col-md-2 bg-light" style={{minHeight: '100vh', borderRight: '1px solid #ccc' }}>
          <nav className="nav flex-column">
            <Link to="/add-book" className="nav-link" onClick={() => setSelectedOption('Add Book')}>
              Add Book
            </Link>
            <Link to="/view-users" className="nav-link" onClick={() => handleViewUsers()}>
              View Users
            </Link>
            <Link to="/view-books" className="nav-link" onClick={() => handleViewBooks()}>
              View Books
            </Link>
            <Link to="/edit-book" className="nav-link" onClick={() => handleEditBook()}>
              Edit Book
            </Link>
          </nav>
        </div>
        
      </div>
    </div>
  );
};

export default LibrarianDashboard;
