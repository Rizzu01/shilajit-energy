import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/Header";
import energyBg from "../images/143848.jpg"; // Your provided background image
import canMockup from "../images/mockup-1-can.png";
import 'animate.css/animate.min.css';

function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => el.classList.add('animate__animated', 'animate__fadeIn'));
  }, []);

  return (
    <section className="hero-section">
      {/* Background image with overlay */}
      <div 
        className="hero-bg-image"
        style={{ backgroundImage: `url(${energyBg})` }}
      ></div>
      <div className="hero-bg-overlay"></div>
      
      <Header className="mb-0" /> {/* Minimal navbar spacing */}
      
      <Container className="position-relative">
        <Row className="align-items-center min-vh-80">
          <Col lg={6} className="fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="hero-content">
              <h1 className="hero-title mb-3 animate__animated animate__fadeInDown">
                <span className="text-stroke">SHILAJIT</span>
                <span className="d-block hero-subtitle animate__animated animate__fadeIn" style={{ animationDelay: '0.4s' }}>
                  UNLEASH <span className="text-energized">PURE POWER</span>
                </span>
              </h1>
              <p className="hero-description animate__animated animate__fadeIn" style={{ animationDelay: '0.6s' }}>
                Himalayan energy concentrate with 3X strength for unstoppable performance
              </p>
              <div className="hero-cta animate__animated animate__fadeInUp" style={{ animationDelay: '0.8s' }}>
                <a 
                  href="#" 
                  className="btn btn-explosion px-5 py-3"
                >
                  <span className="cta-text">GET ENERGIZED</span>
                  <span className="cta-explosion"></span>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} className="fade-in text-center" style={{ animationDelay: '1s' }}>
            <div className="hero-can-container">
              <img 
                src={canMockup} 
                alt="Shilajit Energy Drink Can" 
                className="hero-can floating"
              />
              <div className="energy-burst"></div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx global>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          color: white;
          padding-top: 1rem;
          min-height: 100vh;
        }
        
        .hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: -2;
        }
        
        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          
          z-index: -1;
        }
        
        .hero-title {
          font-size: 6rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -2px;
          text-transform: uppercase;
          margin-bottom: 1rem !important;
        }
        
        .text-stroke {
          color: transparent;
          -webkit-text-stroke: 2px red;
          text-stroke: 2px red;
          display: inline-block;
        }
        
        .hero-subtitle {
          font-size: 4.5rem;
          font-weight: 800;
        
       
          color: #20a6c5;
          line-height: 1.1;
        }
        
        .text-energized {
          color: #ff0000;
          text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
        }
        
        .hero-description {
          font-size: 1.5rem;
          max-width: 500px;
          margin-bottom: 2.5rem;
          color: #000;
          
        }
        
        .btn-explosion {
          position: relative;
          background: #ff0000;
          color: white;
          font-size: 1.2rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          border-radius: 50px;
          overflow: hidden;
          z-index: 1;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          padding: 1rem 2rem;
        }
        
        .btn-explosion:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 0, 0, 0.5);
        }
        
        .btn-explosion:hover .cta-explosion {
          transform: scale(1);
          opacity: 1;
        }
        
        .cta-explosion {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50px;
          z-index: -1;
          transform: scale(0.5);
          opacity: 0;
          transition: all 0.4s ease;
        }
        
        .hero-can-container {
          position: relative;
          display: inline-block;
        }
        
        .hero-can {
          height: 600px;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5));
        }
        
        .energy-burst {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
      
        }
        
        .floating {
          animation: floating 4s ease-in-out infinite;
        }
        
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.8; }
          50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.8; }
        }
        
        @media (max-width: 1200px) {
          .hero-title {
            font-size: 5rem;
          }
          .hero-subtitle {
            font-size: 3.5rem;
          }
        }
        
        @media (max-width: 992px) {
          .hero-title {
            font-size: 4rem;
          }
          .hero-subtitle {
            font-size: 3rem;
          }
          .hero-can {
            height: 500px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }
          .hero-subtitle {
            font-size: 2.5rem;
          }
          .hero-can {
            height: 400px;
            margin-top: 2rem;
          }
          .hero-description {
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.8rem;
            -webkit-text-stroke: 1px white;
            text-stroke: 1px white;
          }
          .hero-subtitle {
            font-size: 2rem;
          }
          .btn-explosion {
            font-size: 1rem;
            padding: 0.8rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;