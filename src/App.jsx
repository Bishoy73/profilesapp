import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(''); // To store the message from the backend

  useEffect(() => {
    // Replace with your EC2 public IP
   // fetch('http://<your-ec2-public-ip>:3000/api/hello')
     
    fetch('https://51.21.219.245:3000/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message)) // Assuming the response has a 'message' key
      .catch((error) => console.error('Error:', error));
  }, []); // This will run once when the component mounts

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 9)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Display the message from the backend */}
      {message && <p>{message}</p>}
    </>
  );
}

export default App;
