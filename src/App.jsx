import React from 'react';
import { Download } from 'lucide-react';
import './App.css';

const DownloadCard = ({ type, size, url }) => (
  <div className="download-card">
    <div className="card-content">
      <h2>{type}</h2>
      <p className="size">Size: {size}</p>
      <a href={url} className="download-link">
        <Download size={18} />
        <span>Download</span>
      </a>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <img 
          src="images/secos-logo.png"
          alt="secOS" 
          className="logo"
        />
        
        <div className="version">
          Latest Release: v1.0.0 beta
        </div>

        <div className="downloads-container">
          <DownloadCard 
            type="ISO Image"
            size="2.1 GB"
            url="#"
          />
          <DownloadCard 
            type="OVA Image"
            size="2.4 GB"
            url="#"
          />
        </div>

        <a href="https://github.com/Sechorda/secOS" className="github-link">
          <img 
            src="images/GitHub.png" 
            alt="GitHub" 
            className="github-logo"
          />
        </a>
      </div>
    </div>
  );
}