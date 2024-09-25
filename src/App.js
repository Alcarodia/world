import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/content/AboutPage';
import AuthorPage from './pages/content/AuthorPage';
import ContactPage from './pages/content/ContactPage';
import ProjectsPage from './pages/content/ProjectsPage';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  /*** Methods ***/
  const [color, setColor] = useState('#424242');

  function HandleNavigation({ color, Path }) {
    useEffect(() => {
      setColor(color);
    }, [color]);

    return <Path />;
  }

  /*** Return ***/
  return (
    <div className="Background" style={{ backgroundColor: color }}>
      <div className="Page">
        <Router>
          {/* Navbar */}
          <div className="Sidebar">
            <div className="nav-scrollable">
              <nav className="vcenter-row">
                <div className="nav-item">
                  <NavLink activeclassname="nav-link.active" className="nav-link" to="/about">
                    <span className="nav-title"> ABOUT </span></NavLink>
                </div>
                <div className="nav-item">
                  <NavLink activeclassname="nav-link.active" className="nav-link" to="/projects">
                    <span className="nav-title"> PROJECTS </span></NavLink>
                </div>
                <div className="nav-item">
                  <NavLink activeclassname="nav-link.active" className="nav-link" to="">
                      <span className="nav-title nav-main"> ALCARODIA </span></NavLink>
                </div>
                <div className="nav-item">
                  <NavLink activeclassname="nav-link.active" className="nav-link" to="/author">
                    <span className="nav-title"> AUTHOR </span></NavLink>
                </div>
                <div className="nav-item">
                  <NavLink activeclassname="nav-link.active" className="nav-link" to="/contact">
                    <span className="nav-title"> CONTACT </span></NavLink>
                </div>
              </nav>
            </div>
          </div>
            
          {/* Content */}
          <main className="Content">
            <Routes>
              <Route path="/about"    element={<HandleNavigation color={'#77DD77'} Path={AboutPage}    />} />
              <Route path="/projects" element={<HandleNavigation color={'#E8CE72'} Path={ProjectsPage} />} />
              <Route path=""          element={<HandleNavigation color={'#001F3F'} Path={HomePage}     />} />
              <Route path="/author"   element={<HandleNavigation color={'#FD8787'} Path={AuthorPage}   />} />
              <Route path="/contact"  element={<HandleNavigation color={'#424242'} Path={ContactPage}  />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
