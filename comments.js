// Create web server with express.js
// Use express.js to create a simple web server and handle requests
// Handle requests to the /comments endpoint and return a list of comments
// Use the comments.json file to store the comments
// Use the fs module to read the comments.json file
// Use the fs module to write a new comment to the comments.json file
// Use the body-parser module to parse JSON data from the request body
// Use the cors module to enable CORS
// Use the morgan module to log requests
// Use the nodemon module to automatically restart the server when changes are made

// Import the express module
const express = require("express");
// Import the fs module
const fs = require("fs");
// Import the body-parser module
const bodyParser = require("body-parser");
// Import the cors module
const cors = require("cors");
// Import the morgan module
const morgan = require("morgan");

// Create an express application
const app = express();

// Use the body-parser middleware
app.use(bodyParser.json());

// Use the cors middleware
app.use(cors());

// Use the morgan middleware
app.use(morgan("dev"));

// Handle GET requests to the /comments endpoint
app.get("/comments", (req, res) => {
  // Read the comments.json file
  fs.readFile("comments.json", "utf8", (err, data) => {
    if (err) {
      // Return an error response if there was an error reading the file
      res.status(500).json({ error: "Error reading comments" });
    } else {
      // Parse the JSON data from the file
      const comments = JSON.parse(data);
      // Return a success response with the comments
      res.json(comments);
    }
  });
});

// Handle POST requests to the /comments endpoint
app.post("/comments", (req, res) => {
  // Read the comments.json file
  fs.readFile("comments.json", "utf8", (err, data) => {
    if (err) {
      // Return an error response if there was an error reading the file
      res.status(500).json({ error: "Error reading comments" });
    } else {
      // Parse the JSON data from the file
      const comments = JSON.parse(data);
      // Add the new comment to the comments array
      comments.push(req.body);
      // Write the updated comments array back to
      }
    });
  }
); 
