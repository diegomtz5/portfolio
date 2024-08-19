import React from 'react';
import './Project.css';

const ReceiptScanner = () => {
  return (
    <div className="project-detail">
      <h2>Receipt Scanner Using Apple Vision</h2>
      <p>
        <strong>Description:</strong> This app uses Apple Vision to scan receipts, allowing users to store and track expenses automatically. It's a useful tool for anyone who needs a quick way to log expenses by simply scanning receipts.
      </p>
      <p>
        <strong>Features:</strong>
        <ul>
          <li>Scan receipts using Apple Vision</li>
          <li>Automatically log expenses</li>
          <li>Simple and intuitive interface</li>
        </ul>
      </p>
      <p>
        <strong>Technologies Used:</strong> Swift, Apple Vision, Firebase
      </p>
    </div>
  );
};

export default ReceiptScanner;

