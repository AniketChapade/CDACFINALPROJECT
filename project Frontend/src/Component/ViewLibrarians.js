import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from 'react-router-dom';
import AdminDashboard from './Admin';

const ViewLibrarians = () => {
  const [librarians, setLibrarians] = useState([]);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this librarian?");
    if (isConfirmed) {
      console.log("Delete clicked for librarian with ID:", id);
      fetch(`http://localhost:8080/deleteLibrarian?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("data:", data);
          window.location.reload();
        })
        .catch((error) =>
          console.error("Error fetching data before delete:", error)
        );
    } else {
      console.log("Deletion cancelled for librarian with ID:", id);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8080/viewLibrarian')
      .then(response => {
        setLibrarians(response.data);
      })
      .catch(error => {
        console.error('Error fetching librarian data:', error);
      });
  }, []);

  return (
    
      <div className="container mt-4">
        <h2 className="mb-4" style={{ color: '#007BFF' }}>Librarian List</h2>
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Librarian ID</th>
              <th>Login ID</th>
              <th>Aadhar ID</th>
              <th>First Name </th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Password</th>
              <th>Mobile No.</th>
              <th>Educational Qualification</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {librarians.map(librarian =>
            (
              <tr key={librarian.librarian_id}>
                <td>{librarian.librarian_id}</td>
                <td>{librarian.loginId.loginId}</td>
                <td>{librarian.aadhar_id}</td>
                <td>{librarian.firstname}</td>
                <td>{librarian.lastname}</td>
                <td>{librarian.email}</td>
                <td>{librarian.password}</td>
                <td>{librarian.mobileNo}</td>
                <td>{librarian.educational_qualification}</td>
                <td>{librarian.address}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(librarian.librarian_id)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
};

export default ViewLibrarians;
