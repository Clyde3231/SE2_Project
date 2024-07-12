import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });
  const [errors, setErrors] = useState({ email: "", username: "", password: "", login: "" });

  const navigate = useNavigate();

  // Regular expression for password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleRegistration = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ email: "", username: "", password: "", login: "" });

    const newErrors = {};

    // Validate email format
    if (!formData.email.includes('@')) {
      newErrors.email = "Invalid email address";
    }

    // Validate username length
    if (formData.username.length < 8) {
      newErrors.username = "Username must be at least 8 characters long";
    }

    // Validate password strength
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    // If there are errors, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Proceed with registration
    axios.post('http://localhost:8082/register', formData)
      .then(res => {
        if (res.status === 200) {
          navigate('/signin');
        } else {
          alert("Status: " + res.status);
        }
      })
      .catch(err => {
        if (err.response && err.response.status === 409) {
          setErrors({ ...errors, login: err.response.data.message });
        } else {
          console.error("Error:", err);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div className="container-register">
      <div id="left-side">
        <img src="/images/left.png" alt="splash" className="side-image-register" />
      </div>

      <div id="right-side">
        <div className="login-form">
          <img src="/images/logo.png" alt="logo" className="logo-image" />
          <h2>Register Account</h2>
          <form>
            <div className="form-group-email">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group-username">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>

            <div className="form-group-password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <button className="register-button" type="button" onClick={handleRegistration}>
              Register
            </button>
            {errors.login && <p className="error">{errors.login}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
