import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

   useEffect(() => {
    console.log('Fetching from EC2...');
    fetch('http://51.21.219.245:3000/api/hello')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('Data:', data);
        setMessage(data.message);
      })
      .catch(error => {
        console.error('Error fetching:', error.message);
      });
  }, []);

  return (
    <>
      <h1>Test Connection</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Add</button>
      <p>Message from EC2:</p>
      <strong>{message || 'No message yet'}</strong>
    </>
  );
}

export default App;
