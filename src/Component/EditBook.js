import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 

const ViewBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState('genre');
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    console.log("Delete clicked for book with ISBN:", id);
    fetch(`http://localhost:8080/deleteBook?ISBN=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
      })
      .catch((error) =>
        console.error("Error fetching data before delete:", error)
      );
  };

  const handleSearch = () => {
    console.log(`Searching by ${searchCriteria}: ${searchTerm}`);
    
  };

  useEffect(() => {
    axios.get('http://localhost:8080/ViewBooks')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching book data:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ color: '#007BFF' }}>Books</h2>
      <div className="mb-3 row">
        <div className="col-md-3">
          <select
            className="form-select"
            value={searchCriteria}
            onChange={(e) => setSearchCriteria(e.target.value)}
          >
            <option value="genre">Genre</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder={`Search by ${searchCriteria}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>BookId</th>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Genre</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.iSBN}>
              <td>{book.book_id}</td>
              <td>{book.iSBN}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.genre}</td>
              <td>
              <Link to={`/edit-book/${book.iSBN}`} className="btn btn-primary me-2">
              Edit
             </Link>

                <button className="btn btn-danger" onClick={() => handleDelete(book.ISBN)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBooks;
