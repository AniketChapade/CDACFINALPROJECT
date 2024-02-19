import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WelcomePage from "./WelcomePage";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [roll_id, setRoleId] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Please enter your email";
    }
    if (!formData.password) {
      newErrors.password = "Please enter your password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        localStorage.setItem("role", data.rollId.roll_id);

      
       if(data.rollId.roll_id===3)
       navigate('/AdminPage')

       else if(data.rollId.roll_id===2)
       navigate('/LibrarianPage')

       else if(data.rollId.roll_id===1)
        navigate('/CustomerPage')
        
      } else {
        console.error("Login failed");
        alert("Please enter valid email and password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Internal server error");
    }
  };  

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
   
    <div
      className="container mt-5 login-form-container col-4"
      style={{
        padding: "20px",
        border: "1px solid ",
        borderRadius: "10px",
        backgroundColor: "lightblue",
      }}
    >
      <h2>Login Form</h2>
      <form>
        <div className="mb-3 col-12">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your Email"
            required={true}
          />
          <div className="text-danger">{errors.email}</div>
        </div>
        <div className="mb-3 col-12">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            required={true}
          />
          <div className="text-danger">{errors.password}</div>
          <div className="form-check mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="showPassword"
              onChange={toggleShowPassword}
            />
            <label className="form-check-label" htmlFor="showPassword">
              Show Password
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
      
      </form>
    </div>
   
  );
};

export default LoginForm;
