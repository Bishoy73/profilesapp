import React, { useState, useRef } from "react";

export default function FileManagerApp() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState("");
  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.target = "_blank";
      link.download = downloadUrl.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-bold mb-2">Upload File</h2>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleUpload}
          className="block"
        />
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-bold mb-2">Download File by Link</h2>
        <input
          type="text"
          placeholder="Enter file URL"
          value={downloadUrl}
          onChange={(e) => setDownloadUrl(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button onClick={handleDownload} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Download
        </button>
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-bold mb-2">Uploaded Files</h2>
        <ul className="list-disc pl-5">
          {uploadedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
