import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate } from 'react-router-dom';
import AdminDashboard from './Admin';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    
    if (isConfirmed) {
      console.log("Delete clicked for Users with ID:", id);
      fetch(`http://localhost:8080/deleteMember?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("data:", data);
          window.location.reload();
        })
        .catch((error) =>
          console.error("Error fetching data before delete:", error)
        );
    } else {
      console.log("Deletion cancelled for Users with ID:", id);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8080/viewmembers')
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
   
      <div className="container mt-4">
        <h2 style={{ color: '#007BFF' }}>Members List</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Password</th>
              <th>Address</th>
              <th>Login ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
              <tr key={member.user_id}>
                <td>{member.userId}</td>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.email}</td>
                <td>{member.mobileNo}</td>
                <td>{member.password}</td>
                <td>{member.address}</td>
                <td>{member.loginId.loginId}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(member.userId)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   
  );
};

export default ViewMembers;
