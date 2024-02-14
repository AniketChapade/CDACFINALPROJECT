import React, { useState } from 'react';

const LibrarianDashboard = () => {
  const [books, setBooks] = useState([]); 
  const [newBook, setNewBook] = useState({ title: '', author: '', price: '' });

  const handleAddBook = () => {
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '', price: '' });
  };

  const handleViewAccounts = () => {
    
    console.log('View Accounts');
  };

  return (
    <div className="container mt-5"style={{ backgroundColor: '', padding: '', border: '', borderRadius: '' }}>
    
      <h2 className="mb-4">Add New Book</h2>
      <div className="row">
        <div className="col-md-4">
          <label>Title:</label>
          <input type="text" className="form-control"  value={newBook.title}
           onChange={(e) => setNewBook({ newBook, title: e.target.value })}/>
        </div>
        <div className="col-md-4">
          <label>Author:</label>
          <input type="text" className="form-control" value={newBook.author}
           onChange={(e) => setNewBook({ newBook, author: e.target.value })} />
        </div>
        <div className="col-md-4">
          <label>Price:</label>
          <input type="text" className="form-control" value={newBook.price}
           onChange={(e) => setNewBook({ newBook, price: e.target.value })}
          />
        </div>
      </div>
      <button type="button" className="btn btn-primary mt-3" onClick={handleAddBook}>
        Add Book
      </button>

      <hr />

      <h2 className="mt-4">View Accounts</h2>
      <button className="btn btn-secondary" onClick={handleViewAccounts}>
        View Accounts
      </button>
    </div>
  );
};

export default LibrarianDashboard;