import './App.css';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import AuthorPage from './pages/author/AuthorPage';
import ContactPage from './pages/contact/ContactPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import React, { useState, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

function App() {
  /*** Methods ***/
  const [color, setColor] = useState('#424242');
  const [image, setImage] = useState('');  /* ? Used for a background texture, like egg-shell, old paper, etc. */

  function HandleNavigation({ color, image, Path }) {
    useEffect(() => {
      setColor(color);
      setImage(image);
    }, [color, image]);

    return <Path />;
  }

  /*** Return ***/
  return (
    <div className="Background" style={{ backgroundColor: color, backgroundImage: image }}>
      <div className="Page">
        {/* Navbar */}
        <div className="Sidebar">
          <div className="nav-scrollable">
            <nav className="vcenter-row">
              <div className="nav-item">
                <NavLink activeclassname="nav-link.active" className="nav-link" to="about">
                  <span className="nav-title"> ABOUT </span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink activeclassname="nav-link.active" className="nav-link" to="projects">
                  <span className="nav-title"> PROJECTS </span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink activeclassname="nav-link.active" className="nav-link" to="">
                    <span className="nav-title nav-main"> ALCARODIA </span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink activeclassname="nav-link.active" className="nav-link" to="author">
                  <span className="nav-title"> AUTHOR </span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink activeclassname="nav-link.active" className="nav-link" to="contact">
                  <span className="nav-title"> CONTACT </span></NavLink>
              </div>
            </nav>
          </div>
        </div>
          
        {/* Content */}
        <main className="Content">
          <Routes>
            <Route path="about"    element={<HandleNavigation color={'#77DD77'} image={''} Path={AboutPage}    />} />
            <Route path="projects" element={<HandleNavigation color={'#E8CE72'} image={''} Path={ProjectsPage} />} />
            <Route path=""         element={<HandleNavigation color={'#001F3F'} image={'url("https://www.transparenttextures.com/patterns/egg-shell.png")'} Path={HomePage}     />} />   { /* 'url(/images/home/bg.webp)' doesn't work in build, just dev */ }
            <Route path="author"   element={<HandleNavigation color={'#FD8787'} image={''} Path={AuthorPage}   />} />
            <Route path="contact"  element={<HandleNavigation color={'#424242'} image={''} Path={ContactPage}  />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
