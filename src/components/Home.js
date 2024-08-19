import React from 'react';
import './Home.css';
import portfolioImage from '../assets/portfolio.png'; // Correct image path
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons
import Footer from './Footer'; // Import the Footer component

const Home = () => {
  return (
    <div className="home">
          <header className="header">
                <div className="navbar-left">
                  <h1>Diego Martinez</h1>
                </div>
                <div className="navbar-center">
                  <ul>
                    <li>
                      <Link
                        activeClass="active"
                        to="welcome"
                        spy={true}
                        smooth={true}
                        duration={1000} // Adjust the duration for smoother scrolling
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={1000}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={1000}
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="navbar-right">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/diego-sebastian-martinez/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.github.com/diegomtz5" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                      </a>
                    </li>
                  </ul>
                </div>
              </header>
              <section id="welcome" className="welcome-section">
        <h1>Welcome, I'm Diego Martinez</h1>
        <p>Software engineer specializing in mobile app development and machine learning, focused on delivering impactful and efficient solutions.</p>
        {/* Button to link to projects section */}
        <Link to="projects" spy={true} smooth={true} duration={1000}>
          <button className="view-projects-button">View My Projects</button>
        </Link>
        <div className="scroll-icon"></div>

      </section>
     {/* About Me Section */}
    {/* Main About Me Section */}
    <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-container">
          {/* Get to Know Me Subsection */}
          <div className="about-text">
            <h3>Get to Know Me</h3>
            <p>
              I am a dedicated software engineer with a strong foundation in mobile app development and machine learning. I specialize in building functional, efficient, and user-focused applications that deliver impactful results. With experience in developing intuitive, high-performance mobile apps and leveraging machine learning models for valuable insights, I bring a balance of technical expertise and user-centric design to every project.
            </p>

            <p>
              I earned my Bachelor of Science in Computer Science from the University of California, Davis, and have applied my skills across various domains, particularly in full-stack development. My approach blends innovation with practicality, ensuring that the solutions I create are advanced yet easy to use.
            </p>

            <p>
              I focus on delivering precision, performance, and quality design in every project. I enjoy working in collaborative environments and am always eager to take on new challenges that expand my skills and knowledge.
            </p>

          </div>

          {/* Skills Subsection */}
          <div className="skills-section">
            <h3>Skills</h3>
            <div>
              <span>Swift</span>
              <span>SwiftUI</span>
              <span>Firebase</span>
              <span>MLKit</span>
              <span>Java</span>
              <span>Java Swing</span>
              <span>C++</span>
              <span>Python</span>
              <span>React</span>
              <span>Unity</span>
              <span>C#</span>
            </div>
          </div>


        </div>
      </section>

      <section id="projects" className="projects-list">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="/projects/budget-to-budget">BudgetToBudget App</a>
            <span> - A personal finance app for managing budgets and tracking expenses effortlessly.</span>
          </li>
          <li>
            <a href="/projects/split-payment-app">Split Payment App</a>
            <span> - A peer-to-peer payment app using Stripe, simplifying the process of splitting expenses.</span>
          </li>
          <li>
            <a href="/projects/ml-song-predictor">Machine Learning Song Popularity Predictor</a>
            <span> - A machine learning model that predicts the popularity of songs based on various parameters.</span>
          </li>
          <li>
            <a href="/projects/portfolio">Java Swing Interactive Floorplan Designer</a>
            <span> - A Java-based application for designing and customizing interactive floorplans.</span>
          </li>
          <li>
            <a href="/projects/coop-spaceship-fight">Couch Co-op Spaceship Fight Game</a>
            <span> - A multiplayer spaceship battle game designed for couch co-op fun.</span>
          </li>
        </ul>
      </section>
          {/* New Contact Section */}
          <section id="contact" className="contact-section">
               <h2>Contact Me</h2>
               <p>If you'd like to get in touch, feel free to email me at <a href="mailto:diegosms45@gmail.com">diegosms45@gmail.com</a> or reach out through LinkedIn.</p>
             </section>
             <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default Home;
