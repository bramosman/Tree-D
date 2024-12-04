const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample route
app.get('/', (req, res) => {
  console.log("Received request to root route");  // Log for request tracking
  res.send('Hello from the server!');
});

// Start the server and log a message
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
    return;
  }
  console.log(`Server is running on port ${PORT}`);
});
