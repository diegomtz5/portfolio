import React from 'react';
import './Project.css';
import interactiveFloorplan from '../assets/InteractiveFloorplan.png'; // Correct image path

const PortfolioWebsite = () => {
  return (
    <div className="project-detail">
      <h2>Java Swing Interactive Floorplan Designer</h2>
      <img src={interactiveFloorplan} alt="Floorplan demo" className="project-image" />

      <p>
        <strong>Description:</strong> This project is an interactive floorplan designer built using Java Swing. It allows users to create and design floorplans by dragging and dropping elements like walls, doors, windows, and furniture onto a canvas. The floorplan designer includes features such as grid snapping, and the ability to save and load designs.
      </p>
      <p>
        <strong>Features:</strong>
        <ul>
          <li>Interactive drag-and-drop floorplan creation</li>
          <li>Grid snapping for precise element placement</li>
          <li>Save and load floorplan designs</li>
          <li>Customizable floorplan elements like walls, doors, and furniture</li>
        </ul>
      </p>
      <p>
        <strong>Design Patterns Implemented:</strong>
        <div className="technologies-used">
          <span>MVC (Model-View-Controller)</span>
          <span>Composite</span>
          <span>Factory</span>
          <span>Command</span>
        </div>
      </p>
      <p>
        <strong>Technologies Used:</strong>
        <div className="technologies-used">
          <span>Java</span>
          <span>Java Swing</span>
          <span>Object-Oriented Design</span>
        </div>
      </p>
      <a href="https://github.com/diegomtz5/InteractiveFloorplan" target="_blank" rel="noopener noreferrer" className="project-button">
        Project Link
      </a>
    </div>
  );
};

export default PortfolioWebsite;
