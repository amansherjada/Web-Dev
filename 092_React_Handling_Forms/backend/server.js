// Importing necessary packages
import express from "express"; // Import Express, a web application framework for Node.js
import cors from "cors"; // Import CORS (Cross-Origin Resource Sharing) middleware
import bodyParser from "body-parser"; // Import Body Parser middleware to parse incoming request bodies

// Create an instance of Express
const app = express();
const port = 3000; // Define the port number for the server

// Use middleware functions
app.use(cors()); // Enable CORS for all routes, allowing cross-origin requests
app.use(bodyParser.json()); // Use Body Parser to parse incoming JSON request bodies

// Define a GET route at the root URL ('/')
app.get('/', (req, res) => {
  // When a GET request is made to '/', send a "Hello World!" response
  res.send('Hello World!');
});

// Define a POST route at the root URL ('/')
app.post('/', (req, res) => {
  // When a POST request is made to '/', log the request body to the console
  console.log(req.body);

  // Send a "Hello World!" response back to the client
  res.send('Hello World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message to the console indicating the server is running and listening on the specified port
  console.log(`Example app listening on port ${port}`);
});
