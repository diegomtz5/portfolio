import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Import RouterLink and useNavigate from react-router-dom
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import Link and animateScroll from react-scroll
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  // Function to navigate to the home page and scroll to the "projects" section
  const scrollToProjects = () => {
    navigate('/'); // Navigate to the Home page
    setTimeout(() => {
      scroll.scrollTo(document.getElementById('projects').offsetTop); // Scroll to the "projects" section
    }, 100); // Slight delay to ensure the page has loaded before scrolling
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            {/* Call the function to navigate to home and scroll to the projects */}
            <span onClick={scrollToProjects} style={{ cursor: 'pointer', color: 'white', fontWeight: 'bold' }}>
              Projects
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
