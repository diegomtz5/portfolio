import React from 'react';
import './Project.css';

const SplitPaymentApp = () => {
  return (
    <div className="project-detail">
      <h2>Split Payment App</h2>
      <p>
        <strong>Description:</strong> The Split Payment App enables users to divide expenses with friends using peer-to-peer payments powered by Stripe. The app includes receipt scanning and a simple UI for managing group expenses.
      </p>
      <p>
        <strong>Features:</strong>
        <ul>
          <li>Split payments with friends</li>
          <li>Peer-to-peer payments via Stripe</li>
          <li>Scan and track expenses with receipts</li>
        </ul>
      </p>
      <p>
        <strong>Technologies Used:</strong>
        <div className="technologies-used">
          <span>SwiftUI</span>
          <span>Swift</span>
          <span>Firebase</span>
          <span>Stripe API</span>
        </div>
      </p>
     
      <a href="https://github.com/SaltMeister/bill-sharing-app" target="_blank" rel="noopener noreferrer" className="project-button">
        Project Link
      </a>
    </div>
  );
};

export default SplitPaymentApp;
