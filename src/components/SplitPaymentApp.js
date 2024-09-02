import React from 'react';
import './Project.css';
import image1 from '../assets/1.PNG';
import image2 from '../assets/2.PNG';
import image3 from '../assets/3.PNG';

const SplitPaymentApp = () => {
  return (
    <div className="project-detail">
      <h2>Split Payment App</h2>
      <div className="image-gallery">
        <div className="image-wrapper">
          <img src={image1} alt="Budget to Budget Screenshot 1" className="project-images" />
        </div>
        <div className="image-wrapper">
          <img src={image2} alt="Budget to Budget Screenshot 2" className="project-images" />
        </div>
        <div className="image-wrapper">
          <img src={image3} alt="Budget to Budget Screenshot 3" className="project-images" />
        </div>
      </div>
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
