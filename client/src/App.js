import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Making an API request to the backend server running on port 5000 (or whatever port you choose)
    fetch('http://localhost:5000')  // Adjust the URL if necessary
      .then((response) => response.text())  // Handle the response as text
      .then((data) => setData(data));  // Set the received data to state
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* Display the data from the server */}
          {data || "Loading..."}
        </p>
      </header>
    </div>
  );
}

export default App;
