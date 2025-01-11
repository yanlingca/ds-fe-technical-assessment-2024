import './assets/style/App.css';
import './assets/style/animation.css';
import './assets/style/custom-bootstrap.scss';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Feature from './components/Feature';
import ProjectList from './components/ProjectList';
import RegForm from './components/RegForm';
import Footer from './components/Footer';

function App() {
  function IsMobileCheck(){
    const [isMobile, setIsMobile] = useState(window.innerWidth < 552);
  
    const handleResize = () => {
      setIsMobile(window.innerWidth < 552);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return isMobile;
  };

  useEffect(() => {
    // Add offset to advoid fixed navbar cover the contents
    const handleScroll = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const scrollPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    // Remove the event listener
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);
  
  return (
    <div>
      {/* Header Section */}
      <Header isMobile={IsMobileCheck()} />
      <Banner />
      <Feature isMobile={IsMobileCheck()} />
      <ProjectList isMobile={IsMobileCheck()} />
      <RegForm />
      <Footer isMobile={IsMobileCheck()} />
    </div>
  );
}

export default App;
