require('dotenv').config()
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const axios = require('axios');
const port = 8082;

const SITE_SECRET = process.env.SITE_SECRET

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    //default sql user
    user: "root",
    //default sql password
    password: "",
    //name of database
    database: "book_acc"
});

app.post('/verify', async (request, response) => {
    const { captchaValue } = request.body
    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET}&response=${captchaValue}`,
    )
    response.send(data)
  })
  


//page
app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";

    db.query(sql, [username,password], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error logging in" });
        }
        if (data.length > 0) {
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ message: "Invalid username or password" });
        }
    });
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Check if the username already exists
    const checkUsernameQuery = "SELECT * FROM login WHERE username = ?";
    db.query(checkUsernameQuery, [username], (err, usernameResults) => {
        if (err) {
            console.error("Error checking username:", err);
            return res.status(500).json({ message: "Error registering user" });
        }

        // Check if the email already exists
        const checkEmailQuery = "SELECT * FROM login WHERE email = ?";
        db.query(checkEmailQuery, [email], (err, emailResults) => {
            if (err) {
                console.error("Error checking email:", err);
                return res.status(500).json({ message: "Error registering user" });
            }

            // Check for existing username or email
            const usernameExists = usernameResults.length > 0;
            const emailExists = emailResults.length > 0;

            // Validation
            if (usernameExists && emailExists) {
                return res.status(409).json({ message: "Username and Email already taken" });
            } else if (usernameExists) {
                return res.status(409).json({ message: "Username already taken" });
            } else if (emailExists) {
                return res.status(409).json({ message: "Email already taken" });
            }

            // If good, proceed with the registration
            const insertQuery = "INSERT INTO login (username, email, password) VALUES (?, ?, ?)";
            db.query(insertQuery, [username, email, password], (err, result) => {
                if (err) {
                    console.error("Error registering:", err);
                    return res.status(500).json({ message: "Error registering user" });
                }

                if (result.affectedRows > 0) {
                    return res.status(200).json({ message: "Registration successful" });
                } else {
                    return res.status(500).json({ message: "Registration failed" });
                }
            });
        });
    });
});

  
app.listen(port, () => {
    console.log(`Server listening at ${port}`)
  })

// app.listen(port, () => {
//     console.log("Server is running on port 8082");
// });
