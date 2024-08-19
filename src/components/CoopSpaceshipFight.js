import React from 'react';
import './Project.css';

const CoopSpaceshipFight = () => {
  return (
    <div className="project-detail">
      <h2>Couch Co-op Spaceship Fight Game</h2>
      <p>
        <strong>Description:</strong> This is a competitive couch co-op video game where two players engage in 1v1 spaceship battles. The game is designed for fast-paced, action-packed combat on a single screen, with each player controlling a spaceship and trying to outmaneuver and defeat the other.
      </p>
      <p>
        <strong>Features:</strong>
        <ul>
          <li>Local multiplayer 1v1 spaceship combat</li>
          <li>Dynamic and fast-paced gameplay</li>
          <li>Retro-style graphics and sound design</li>
          <li>Simple and intuitive controls</li>
        </ul>
      </p>
      <p>
        <strong>Technologies Used:</strong>
        <div className="technologies-used">
          <span>Unity</span>
          <span>C#</span>
        </div>
      </p>
     
      <a href="https://github.com/SamuelDMFerreira/2024_Game_Programming_Slingshot_Effect" target="_blank" rel="noopener noreferrer" className="project-button">
        Project Link
      </a>
    </div>
  );
};

export default CoopSpaceshipFight;
