const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5500;

// Enable CORS and JSON parsing middleware
app.use(cors());
app.use(express.json());

// Database connection setup
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Connect to the MySQL database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
