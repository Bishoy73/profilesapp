import { useState } from 'react';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDownload = () => {
    if (!downloadUrl) return alert('Please enter a download URL');
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <h1 className="title">React File Portal</h1>

      <div className="card">
        <h2>📤 Upload File</h2>
        <input type="file" onChange={handleFileUpload} />
        {selectedFile && <p>Selected: {selectedFile.name}</p>}
      </div>

      <div className="card">
        <h2>📥 Download File</h2>
        <input
          type="text"
          placeholder="Enter file URL..."
          value={downloadUrl}
          onChange={(e) => setDownloadUrl(e.target.value)}
        />
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}

export default App;
