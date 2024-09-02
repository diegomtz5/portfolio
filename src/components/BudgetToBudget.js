import React from 'react';
import './Project.css';
import image1 from '../assets/01.png';
import image2 from '../assets/02.png';
import image3 from '../assets/03.png';

const BudgetToBudget = () => {
  return (
    <div className="project-detail">
      <h2>BudgetToBudget App</h2>
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
        <strong>Description:</strong> BudgetToBudget is a personal finance app designed to help users manage their monthly budgets, track expenses, and scan receipts using MLKit. It provides financial insights and allows for custom budgeting solutions.
      </p>
      <p>
        <strong>Features:</strong>
        <ul>
          <li>Create and manage budgets</li>
          <li>Track expenses</li>
          <li>Scan receipts with Apple Vision</li>
          <li>Financial insights and analytics</li>
        </ul>
      </p>
      <p>
        <strong>Technologies and Patterns Used:</strong>
        <div className="technologies-used">
          <span>SwiftUI</span>
          <span>Swift</span>
          <span>Firebase</span>
          <span>MLKit</span>
          <span>MVVM (Model-View-ViewModel)</span>
        </div>
      </p>
     
      <a href="https://www.budgettobudget.com" target="_blank" rel="noopener noreferrer" className="project-button">
        Project Link
      </a>
    </div>
  );
};

export default BudgetToBudget;
