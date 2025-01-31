import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //
import LogoImageFile from '../assets/img/company-logo.png'
import '../assets/style/header.css'

function Header({isMobile}) {


  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const collapseNavbar = () => {
    setExpanded(false); // Collapse navbar after click nav items
  };

  return (
    <nav id="header" className="navbar navbar-expand-sm navbar-light bg-white custom-nav p-3">
      <div className="container-fluid">
        {/* Company Logo */}
        <a className="navbar-brand" href="#header"><img src={LogoImageFile} /></a>
        
        {/* Navbar Collapse Section */}
        <div
          className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#feature" onClick={collapseNavbar}>Feature</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project" onClick={collapseNavbar}>Projects</a>
            </li>
          </ul>
        </div>

        {/* Register Button */}
        <button className="btn primary-btn ms-auto"
          onClick={() => document.getElementById('register').scrollIntoView()}>
          {isMobile ? 'Register' : 'Register Now'}
        </button>
        
        {/* Navbar Toggle Button */}
        <button className="navbar-toggler border-0" 
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleToggle}>
          <i className="bi bi-list fs-1"></i>
        </button>
      </div>
    </nav>
  );
}

export default Header;