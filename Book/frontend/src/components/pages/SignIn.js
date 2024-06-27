import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ login: "" });

  const users = [
    { username: "krisia", password: "admin123" },
    // Add more users as needed
  ];

  const handleLogin = () => {
    const { username, password } = formData;

    // Check if the entered credentials match any user
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // After successful login, navigate to the 'Admin' route
      navigate("/HomeAdmin");
      
    } else {
      // Handle incorrect login
      setErrors({ login: "Incorrect username or password" });
    }
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
          <h2>Log In to Your Account</h2>
          <form>
            <div className="form-group-username">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
              />
            </div>

            <div className="form-group-password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              />
              <div className="forgot">
                <p>Forgot Password?</p>
              </div>
            </div>

            <button className="loginbutton" type="button" onClick={handleLogin}>
              Login
            </button>
            {errors.login && <p className="error">{errors.login}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
