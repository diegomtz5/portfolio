import React from 'react';
import './Project.css';
import songPopularity from '../assets/SongPopularityFrontEnd.png'; // Correct image path

const MLProject = () => {
  return (
    <div className="project-detail">
      <h2>Machine Learning Song Popularity Predictor</h2>
      <img src={songPopularity} alt="ML Project Visualization" className="project-image" />

      <p>
        <strong>Description:</strong> This project uses machine learning to predict whether a song will be popular based on parameters like tempo, key, and loudness. The model was trained on a dataset of popular songs and evaluated for accuracy.
      </p>
      <p>
        <strong>Features:</strong>
        <ul>
          <li>Data collection and preprocessing</li>
          <li>Model training and evaluation</li>
          <li>Prediction of song popularity</li>
        </ul>
      </p>
      <p>
        <strong>Technologies Used:</strong>
        <div className="technologies-used">
          <span>Python</span>
          <span>Scikit-learn</span>
          <span>Pandas</span>
          <span>Matplotlib</span>
        </div>
      </p>
     
      <a href="https://github.com/xiaolin-m/ECS171_BopOrFlop" target="_blank" rel="noopener noreferrer" className="project-button">
        Project Link
      </a>
    </div>
  );
};

export default MLProject;
