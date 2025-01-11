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
