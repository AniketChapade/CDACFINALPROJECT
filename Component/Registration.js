import React, { useState, useReducer } from 'react';
import { Navigate } from 'react-router-dom';

const init = {
  email: '',
  mobile_no:'',
  password: '',
  firstname: '',
  lastname: '',
  address: '',
  roll_id: ''
 
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
    console.log(value)
    dispatch({ type: 'update', fld: name, val: value });

    const emailRegex = /^[\w._#-]{4,20}@[\w]{5,15}\.[a-z]{3}$/;
    const mobile_noRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    const newValidationErrors = { ...validationErrors };

    if (name === 'email' && !emailRegex.test(value)) {
      newValidationErrors.email = 'Invalid email format';
    } else if (name === 'userId' && value.trim() === '') {
      newValidationErrors.userId = 'User ID is required';
    } else if (name === 'mobile_no' && !mobile_noRegex.test(value)) {
      console.log(formData.mobile_no);
      newValidationErrors.mobile_no = 'Enter 10 digit mobile number';
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
    //console.log(JSON.stringify(formData))
    if (Object.values(validationErrors).some((error) => error !== '')) {
        alert('Please fix the validation errors before submitting.');
        return;
    }

    setValidationErrors({});

    try {
        const response = await fetch('http://localhost:8080/userRegister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                firstname:formData.firstname,
                lastname:formData.lastname,
                address:formData.address,
                mobileNo:formData.mobile_no,
                email:formData.email,
                roll_id:formData.roll_id,
                password:formData.password

              }
            ),
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
<div className="container mt-5 login-form-container col-6"  style={{ backgroundColor: 'lightgrey', padding: '20px', border: '1px solid ', borderRadius: '10px' }}>

      <h2 className="text-center mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-4 col-md-6">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
               <input type="text" className="form-control" id="firstname" name="firstname"
                  value={formData.firstname} onChange={handleInputChange}required/>
            </div>

          <div className="mb-4 col-md-6">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={formData.lastname}
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
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="mobile_no"
              name="mobile_no"
              value={formData.mobile_no}
              onChange={handleInputChange}
              
            />
           
            <div className="text-danger">{validationErrors.mobile_no}</div>
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

         

          <div className="mb-4 col-md-6">
            <label htmlFor="roll_id" className="form-label">
              Role
            </label>
            <select
              className="form-select"
              id="roll_id"
              name="roll_id"
              value={formData.roll_id}
              onChange={handleInputChange}
              required
            >
              <option value=""></option>
              <option value="1">User</option>
              <option value="2">Librarian</option>
              
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
