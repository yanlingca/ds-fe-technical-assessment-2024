import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/style/banner.css'

function Banner() {
    return (
      <Container fluid className="banner">
        <div className="banner-content">
            <div className="banner-title1">Live in a</div>
            <div className="banner-title2">
                Nature<br />Sanctuary</div>
            <div className="banner-desc">Lavishly designed with private gardens, <br />canals and a 20-acre greenhouse.</div>
        </div>
      </Container>
    );
  }
  
  export default Banner;