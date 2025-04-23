import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(''); // To store the message from the backend

  // Fetch data from backend on component mount
  useEffect(() => {
    // Replace this URL with your EC2 public IP (backend)
    fetch('http://51.21.219.245:3000/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message)) // Assuming the response has a 'message' key
      .catch((error) => console.error('Error:', error));
  }, []); // This runs once when the component mounts

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      {/* Display message fetched from backend */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
