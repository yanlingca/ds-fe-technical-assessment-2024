import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/feature.css'
import FeatureImgFile from '../assets/img/feature.png'
import FeatureImgFileM from '../assets/img/feature-m.png'
import Feature1ImgFile from '../assets/img/feature1.png'
import Feature2ImgFile from '../assets/img/feature2.png'
import Feature3ImgFile from '../assets/img/feature3.png'
import Feature4ImgFile from '../assets/img/feature4.png'

function Feature({isMobile}) {
    const FeatureImg = () => {
        return (
            <img src={isMobile ? FeatureImgFileM : FeatureImgFile} />
        );
    };
    return (
      <Container fluid className="feature" id="feature">
        <div className="feature-content">
            <div className="feature-title1">A township flanked by</div>
            <div className="feature-title2 pb-4">Natural Wonders</div>
            <div className="feature-img"><FeatureImg /></div>
            <div className="feature-title3 py-4">Designed to be the city of the future - a complete township.</div>
            <Row className="justify-content-center">
                    <Col xs={6} md={3} lg={3} className="feature-col my-3">
                        <div className="feature-col-content p-3 m-1">
                            <span><img src={Feature1ImgFile} /> </span> <br />
                            <span>Central Park</span> <br />
                            <span>at your doorstep</span>
                        </div>
                    </Col>
                    <Col xs={6} md={3} lg={3} className="feature-col my-3">
                        <div className="feature-col-content p-3 m-1">
                            <span><img src={Feature2ImgFile} /> </span> <br />
                            <span>Central Park</span> <br />
                            <span>at your doorstep</span>
                        </div>
                    </Col>
                    <Col xs={6} md={3} lg={3} className="feature-col my-3">
                        <div className="feature-col-content p-3 m-1">
                            <span><img src={Feature3ImgFile} /> </span> <br />
                            <span>Central Park</span> <br />
                            <span>at your doorstep</span>
                        </div>
                    </Col>
                    <Col xs={6} md={3} lg={3} className="feature-col my-3">
                        <div className="feature-col-content p-3 m-1">
                            <span><img src={Feature4ImgFile} /> </span> <br />
                            <span>Central Park</span> <br />
                            <span>at your doorstep</span>
                        </div>
                    </Col>
                </Row>
        </div>      
      </Container>
    );
  }
  
  export default Feature;