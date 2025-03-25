import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'; // Using Material Design icons instead
import logoImage from "../images/logo.svg";

const Footer = () => {
  return (
    <footer className="site-footer py-5" style={{ backgroundColor: '#0a1921', color: '#f0f8ff' }}>
      <Container>
        <Row className="g-4">
          {/* Brand Info Column */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <a href="/" className="d-inline-block mb-3">
                <img 
                  src={logoImage} 
                  alt="Shilajit Energy Logo" 
                  width="100"
                  className="hover-grow"
                />
              </a>
              <p className="footer-description mb-4">
                Premium Himalayan energy drink with pure Shilajit extract for unstoppable performance.
              </p>
              
              <div className="contact-info">
                <div className="d-flex align-items-center mb-2">
                  <MdLocationOn className="me-2" style={{ color: '#20a6c5', fontSize: '1.2rem' }} />
                  <span>123 Energy Street, Mountain View, HV 94043</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <MdPhone className="me-2" style={{ color: '#20a6c5', fontSize: '1.2rem' }} />
                  <span>+1 (234) 567-8910</span>
                </div>
                <div className="d-flex align-items-center">
                  <MdEmail className="me-2" style={{ color: '#20a6c5', fontSize: '1.2rem' }} />
                  <span>energy@shilajit.com</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Quick Links Column */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-heading mb-4" style={{ color: '#20a6c5' }}>Quick Links</h5>
            <ListGroup variant="flush" className="footer-links">
              <ListGroup.Item action href="#" className="bg-transparent text-white border-0 ps-0 py-1">
                Home
              </ListGroup.Item>
              <ListGroup.Item action href="#" className="bg-transparent text-white border-0 ps-0 py-1">
                About Us
              </ListGroup.Item>
              <ListGroup.Item action href="#" className="bg-transparent text-white border-0 ps-0 py-1">
                Products
              </ListGroup.Item>
              <ListGroup.Item action href="#" className="bg-transparent text-white border-0 ps-0 py-1">
                Benefits
              </ListGroup.Item>
              <ListGroup.Item action href="#" className="bg-transparent text-white border-0 ps-0 py-1">
                Contact
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Support Column */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-heading mb-4" style={{ color: '#20a6c5' }}>Support</h5>
            <ListGroup variant="flush" className="footer-links">
              <ListGroup.Item action href="#" className="bg-transparent text-white border-0 ps-0 py-1">
                FAQ
              </ListGroup.Item>
              <ListGroup.Item action href="#" className="bg-transparent text-white border-0 ps-0 py-1">
                Shipping
              </ListGroup.Item>
              <ListGroup.Item action href="#" className="bg-transparent text-white border-0 ps-0 py-1">
                Returns
              </ListGroup.Item>
              <ListGroup.Item action href="#" className="bg-transparent text-white border-0 ps-0 py-1">
                Privacy Policy
              </ListGroup.Item>
              <ListGroup.Item action href="#" className="bg-transparent text-white border-0 ps-0 py-1">
                Terms
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Social Media Column */}
          <Col lg={4} md={6} className="mb-4">
            <h5 className="footer-heading mb-4" style={{ color: '#20a6c5' }}>Stay Connected</h5>
            <p className="mb-4">Subscribe for energy tips and exclusive offers</p>
            
            <div className="social-icons d-flex mb-4">
              <a href="#" className="social-icon me-3" style={{ color: '#f0f8ff', backgroundColor: '#20a6c5' }}>
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon me-3" style={{ color: '#f0f8ff', backgroundColor: '#20a6c5' }}>
                <FaTwitter />
              </a>
              <a href="#" className="social-icon me-3" style={{ color: '#f0f8ff', backgroundColor: '#20a6c5' }}>
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" style={{ color: '#f0f8ff', backgroundColor: '#20a6c5' }}>
                <FaLinkedinIn />
              </a>
            </div>
            
            <div className="payment-methods">
              <h6 className="mb-3">We Accept</h6>
              <div className="d-flex flex-wrap gap-2">
                <span className="payment-icon">VISA</span>
                <span className="payment-icon">MC</span>
                <span className="payment-icon">AMEX</span>
                <span className="payment-icon">PP</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Copyright Row */}
        <Row className="mt-5">
          <Col className="text-center">
            <div className="copyright-text pt-3 border-top" style={{ borderColor: '#1e3a56 !important' }}>
              &copy; {new Date().getFullYear()} Shilajit Energy. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .site-footer {
          position: relative;
          overflow: hidden;
        }
        
        .footer-heading {
          font-size: 1.1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .footer-description {
          opacity: 0.8;
          line-height: 1.6;
        }
        
        .footer-links .list-group-item {
          background: transparent;
          padding-left: 0;
          border: none;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        
        .footer-links .list-group-item:hover {
          opacity: 1;
          color: #20a6c5 !important;
          transform: translateX(5px);
        }
        
        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background-color: #ff0000 !important;
          transform: translateY(-3px);
        }
        
        .payment-icon {
          background: rgba(255,255,255,0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .copyright-text {
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
        }
        
        .hover-grow {
          transition: transform 0.3s ease;
        }
        
        .hover-grow:hover {
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .footer-heading {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;