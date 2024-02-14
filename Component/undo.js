import React, { useState, useReducer } from 'react';

const init = {
  userId: '',
  username: '',
  email: '',
  phoneNumber: '',
  password: '',
  firstName: '',
  lastName: '',
  address: '',
  role: 'User', 
};

const roles = ['User', 'Librarian']; 

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.fld]: action.val };
    case 'reset':
      return init;
    default:
      return state;
  }
};

const RegistrationForm = () => {
  const [formData, dispatch] = useReducer(reducer, init);
  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'update', fld: name, val: value });

    const emailRegex = /^[\w._#-]{4,20}@[\w]{5,15}\.[a-z]{3}$/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const phoneNumberRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    const newValidationErrors = { ...validationErrors };

    if (name === 'email' && !emailRegex.test(value)) {
      newValidationErrors.email = 'Invalid email format';
    } else if (name === 'username' && !usernameRegex.test(value)) {
      newValidationErrors.username = 'Only letters, numbers, and underscores are allowed';
    } else if (name === 'userId' && value.trim() === '') {
      newValidationErrors.userId = 'User ID is required';
    } else if (name === 'phoneNumber' && !phoneNumberRegex.test(value)) {
      newValidationErrors.phoneNumber = 'Enter 10 digit mobile number';
    } else if (name === 'password' && !passwordRegex.test(value)) {
      newValidationErrors.password =
        'Password must contain at least one letter, one number, and one special character';
    } else {
      delete newValidationErrors[name];
    }

    setValidationErrors(newValidationErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(validationErrors).some((error) => error !== '')) {
      alert('Please fix the validation errors before submitting.');
      return;
    }

    setValidationErrors({});

    try {
      const response = await fetch('http://localhost:9000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        alert('Registration successful');

        dispatch({ type: 'reset' });
      } else {
        console.error('Registration failed');
        alert('Registration failed!');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
  
<div className="container mt-5 login-form-container col-6" style={{ backgroundColor: 'lightblue', padding: '20px', border: '1px solid ', borderRadius: '10px' }}>
<h2 className="text-center mb-4">Registration Form</h2>
  <form onSubmit={handleSubmit}>
    
    <div className="row">
      <div className="mb-4 col-md-6">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>

      

      <div className="mb-3 col-md-6">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-4 col-md-6">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <div className="text-danger">{validationErrors.email}</div>
      </div>

      <div className="mb-3 col-md-6">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <div className="text-danger">{validationErrors.username}</div>
      </div>

      <div className="mb-3 col-md-6">
        <label htmlFor="phoneNumber" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <div className="text-danger">{validationErrors.phoneNumber}</div>
      </div>

      <div className="mb-3 col-md-6">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <div className="text-danger">{validationErrors.password}</div>
      </div>

      <div className="mb-3 col-md-6">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <textarea
          className="form-control"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3 col-md-6">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <select
          className="form-select"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          required
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
    </div>

    <button type="submit" className="btn btn-primary">
      Register
    </button>
  </form>
</div>
  );
};

export default RegistrationForm;
