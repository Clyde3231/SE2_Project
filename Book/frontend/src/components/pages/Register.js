import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "", email: "" });
  const [errors, setErrors] = useState({ email: "", username: "", password: "", login: "" });

  const users = [
    { username: "clydeeee", password: "Admin@123", email: "clyde@gmail.com" },
  ];

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleRegistration = () => {
    const { username, password, email } = formData;

    // Validate email format
    if (!email.includes('@')) {
      setErrors({ ...errors, email: "Invalid email address" });
      return;
    } else {
      setErrors({ ...errors, email: "" });
    }

    // Validate username length
    if (username.length < 8) {
      setErrors({ ...errors, username: "Username must be at least 8 characters long" });
      return;
    } else {
      setErrors({ ...errors, username: "" });
    }

    // Validate password strength
    if (!passwordRegex.test(password)) {
      setErrors({ ...errors, password: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character" });
      return;
    } else {
      setErrors({ ...errors, password: "" });
    }

    // Check if the username already exists
    const isExistingUser = users.some(user => user.username === username);
    if (isExistingUser) {
      setErrors({ ...errors, username: "Username already exists" });
      return;
    }

    // If all validations pass, proceed with registration
    // Here you would typically add the new user to your database or perform further actions
    // For now, simulate success by navigating to another page
    navigate("/HomeAdmin");
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <div id="left-side">
        <img src="/images/left.png" alt="splash" className="side-image" />
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

export default SignUp;