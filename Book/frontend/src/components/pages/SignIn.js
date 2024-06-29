import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignIn.css";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ login: "" });

  // const users = [
  //   { username: "krisia", password: "admin123" },
  //   // Add more users as needed
  // ];

  const handleLogin = async (event) => {
    event.preventDefault();
    // const captchaValue = recaptcha.current.getValue();
    // if (!captchaValue) {
    //   alert("Please verify the reCAPTCHA!");
    //   return;
    // }
  
    try {
      const res = await axios.post("http://localhost:8082/signin", {
        username: formData.username,
        password: formData.password,
        // captchaValue: captchaValue,
      });
  
      if (res.status === 200 && res.data.message === "Login successful") {
        // Redirect to admin page after successful login
        navigate("/HomeAdmin");
      } else if (res.status === 401) {
        // Display error message to the user for invalid username or password
        alert("Invalid username or password");
        console.error("Invalid username or password");
      } else {
        // Handle other error cases
        console.error("An error occurred:", res.data.message);
      }
    } catch (err) {
      console.error(err);
      // Handle network or other errors here
      alert("Invalid username or password");
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

export default SignIn;
