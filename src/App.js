import './assets/style/App.css';
import './assets/style/animation.css';
import './assets/style/custom-bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
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

  const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <>
        {showButton && (
          <button
            onClick={scrollToTop}
            className="position-fixed back-to-top-btn bottom-0 end-0 m-2">
            <i className="bi bi-arrow-up-circle-fill" style={{flexShrink: 0 }}></i>
          </button>
        )}
      </>
    );
  };
  
  return (
    <div>
      {/* Header Section */}
      <Header isMobile={IsMobileCheck()} />
      <Banner />
      <Feature isMobile={IsMobileCheck()} />
      <ProjectList isMobile={IsMobileCheck()} />
      <RegForm />
      <Footer isMobile={IsMobileCheck()} />
      <BackToTopButton />
    </div>
  );
}

export default App;
