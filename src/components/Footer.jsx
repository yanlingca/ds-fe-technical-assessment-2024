import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/style/footer.css'
import devCompanyIMG from '../assets/img/develop-company-icon.png'

function Footer({isMobile}) {
    return (
        <Container fluid className="footer">
            {/* Company Info */}
            <Row className="justify-content-center">
                <Col sm={12} md={3} lg={3} className="footer-col d-flex justify-content-center">
                    <div className="p-3 m-1 d-flex">
                        <i className="bi-pin-map footer-icon" style={{flexShrink: 0 }}></i>
                        <div style={{ flex: 1 }}>
                            <div>Unit C-3-7, Block C,</div>
                            <div>Pacific Place Commercial Centre,</div>
                            <div>Jalan PJU 1A/4, Ara Damansara,</div>
                            <div>47301 Petaling Jaya.</div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={3} lg={3} className="footer-col d-flex justify-content-center">
                    <div className="p-3 m-1 d-flex">
                        <i className="bi-clock footer-icon" style={{flexShrink: 0 }}></i>
                        <div style={{ flex: 1 }}>
                            <div>Mon - Fri | 9 AM - 6 PM</div>
                            <div>Sat - Sun | 10 AM - 5PM</div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={3} lg={3} className="footer-col d-flex justify-content-center">
                    <div className="p-3 m-1">
                        <i className="bi-telephone footer-icon"></i>
                        03 1234 1234
                    </div>
                </Col>
                {/* Hide development company in mobile */}
                {!isMobile ?
                    <Col sm={12} md={3} lg={3} className="footer-col d-flex justify-content-center">
                        <div className="p-3 m-1 align-middle">
                            <p>A Development by</p>
                            <span><img src={devCompanyIMG} /> </span> <br />
                        </div>
                    </Col> : null
                }
            </Row>
            {/* Disclaimer */}
            <div className="disclaimer text-center">
                <span className="p-1">© DIGITAL SYMPHONY 2024</span>
                {isMobile ? <br /> : "|"}
                <span className="p-1"><a href="#" className="text-decoration-none text-reset">DISCLAIMER</a></span>|
                <span className="p-1"><a href="#" className="text-decoration-none text-reset">PRIVACY POLICY</a></span>
            </div>
        </Container>
    );
  }
  
  export default Footer;