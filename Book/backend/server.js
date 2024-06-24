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
    database: "pharm_login"
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
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error logging in" });
        }
        if (result.length > 0) {
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ message: "Invalid username or password" });
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening at ${port}`)
  })

// app.listen(port, () => {
//     console.log("Server is running on port 8082");
// });
