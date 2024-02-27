import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddBookPage from './AddBookPage';
import ViewBooks from './ViewBooks'; 
import ViewMembers from './ViewMembers';

const LibrarianDashboard = () => {
  const [showAddBook, setAddBook] = useState(true);
  const [showViewBook, setViewBook] = useState(false);
  const[showMembers,setViewMembers]=useState(false);

  const handleAddBook = (e) => {
    e.preventDefault();
    setAddBook(true);
    setViewBook(false);
    setViewMembers(false);
  };

  const handleViewBook = (e) => {
    e.preventDefault();
    setViewBook(true);
    setAddBook(false);
    setViewMembers(false);
  };

  const handleViewMembers=(e)=>{
    e.preventDefault();
    setViewMembers(true);
    setViewBook(false);
    setAddBook(false);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 bg-dark text-light text-center" style={{ padding: '15px 0', borderBottom: '2px solid #fff', margin: 0 }}>
          <h1 className="mb-0" style={{ margin: 0, color: 'Lightblue' }}>Librarian</h1>
        </div>
      </div>
      <div className="row">
      <div className="col-md-2" style={{ minHeight: '100vh', borderRight: '1px solid #ccc', backgroundColor: '#333', fontSize: '18px' }}>
  <nav className="nav flex-column">
    <Link to="/AddBookPage" className="nav-link" onClick={handleAddBook} style={{ color: 'lightblue' }}>
      Add Book
    </Link>
    <Link to="/viewMembers" className="nav-link" onClick={handleViewMembers} style={{ color: 'lightblue' }}>
      View Users
    </Link>
    <Link to="/ViewBooks" className="nav-link" onClick={handleViewBook} style={{ color: 'lightblue' }}>
      View Books
    </Link>
    <Link to="/EditBook" className="nav-link" style={{ color: 'lightblue' }}>
      Edit Book
    </Link>
    <Link to="/" className="nav-link" style={{ color: 'lightblue' }}>
      Logout
    </Link>
  </nav>
</div>

        <div className="col-md-10">
          {showAddBook && <AddBookPage />}
          {showViewBook && <ViewBooks />}
          {showMembers&& <ViewMembers/>}
        </div>
      </div>
       
    </div>
  );
};

export default LibrarianDashboard;
