
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import contactImage from "../images/contact-image.png";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import 'animate.css/animate.min.css';


// import About from '../components/About';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import feature1Img from '../images/icons/icon-feature1.png';
import feature2Img from '../images/icons/icon-feature2.png';
import feature3Img from '../images/icons/icon-feature3.png';
import feature4Img from '../images/icons/icon-feature4.png';
import imgSec from '../images/banner-1.png';
import shilajitImg from "../images/Shilajit_Benefits.jpg";
import checkImg from "../images/icons/check-mark.png";





const benefits = [
  {
    title: "Instant Energy Boost",
    icon: "bi-lightning-charge-fill",
    color: "#ff0000", // Red
    delay: "0.1s",
    desc: "0 to 100 energy in under 5 minutes"
  },
  {
    title: "Enhanced Stamina",
    icon: "bi-speedometer2",
    color: "#20a6c5", // Teal
    delay: "0.2s",
    desc: "3X longer endurance than standard drinks"
  },
  {
    title: "Laser Focus",
    icon: "bi-bullseye",
    color: "#0a1921", // Dark
    delay: "0.3s",
    desc: "Sharpen mental clarity for 6+ hours"
  },
  {
    title: "100% Natural",
    icon: "bi-emoji-heart-eyes-fill",
    color: "#ff8a00", // Orange accent
    delay: "0.4s",
    desc: "Pure Himalayan Shilajit, no artificial junk"
  }
];




function Home() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
    return <>
   
     <Hero/>

     <section className="features-section py-5" style={{ backgroundColor: '#f0f8ff' }}>
  <Container>
    <Row className="justify-content-center">
      {/* Section Header */}
      <Col xs={12} className="text-center mb-5">
        <h2 className="section-title" style={{ color: '#0a1921' }}>
          WHY <span style={{ color: '#ff0000' }}>SHILAJIT</span> ENERGY?
        </h2>
        <div className="title-divider mx-auto" style={{ backgroundColor: '#20a6c5' }}></div>
      </Col>

      {/* Feature 1 */}
      <Col lg={3} md={6} className="mb-4 feature-col">
        <div className="feature-card h-100 p-4 text-center">
          <div className="feature-icon mb-4" style={{ color: '#ff0000' }}>
            <img src={feature1Img} alt="Maximum Energy" className="img-fluid" style={{ height: '80px' }} />
          </div>
          <h3 className="feature-title mb-3" style={{ color: '#0a1921' }}>Maximum Energy</h3>
          <p className="feature-text" style={{ color: '#0a1921' }}>
            Experience 3X stronger energy boost with our Himalayan Shilajit formula
          </p>
        </div>
      </Col>

      {/* Feature 2 */}
      <Col lg={3} md={6} className="mb-4 feature-col">
        <div className="feature-card h-100 p-4 text-center">
          <div className="feature-icon mb-4" style={{ color: '#ff0000' }}>
            <img src={feature2Img} alt="Smart Organics" className="img-fluid" style={{ height: '80px' }} />
          </div>
          <h3 className="feature-title mb-3" style={{ color: '#0a1921' }}>Smart Organics</h3>
          <p className="feature-text" style={{ color: '#0a1921' }}>
            100% natural ingredients with clinically proven effectiveness
          </p>
        </div>
      </Col>

      {/* Feature 3 */}
      <Col lg={3} md={6} className="mb-4 feature-col">
        <div className="feature-card h-100 p-4 text-center">
          <div className="feature-icon mb-4" style={{ color: '#ff0000' }}>
            <img src={feature3Img} alt="Optimal Size" className="img-fluid" style={{ height: '80px' }} />
          </div>
          <h3 className="feature-title mb-3" style={{ color: '#0a1921' }}>Optimal Size</h3>
          <p className="feature-text" style={{ color: '#0a1921' }}>
            Perfect 250ml energy shot for instant revitalization
          </p>
        </div>
      </Col>

      {/* Feature 4 */}
      <Col lg={3} md={6} className="mb-4 feature-col">
        <div className="feature-card h-100 p-4 text-center">
          <div className="feature-icon mb-4" style={{ color: '#ff0000' }}>
            <img src={feature4Img} alt="Zero Guilt" className="img-fluid" style={{ height: '80px' }} />
          </div>
          <h3 className="feature-title mb-3" style={{ color: '#0a1921' }}>Zero Guilt</h3>
          <p className="feature-text" style={{ color: '#0a1921' }}>
            Only 15 calories per serving with no sugar crash
          </p>
        </div>
      </Col>
    </Row>

    <style jsx>{`
      .features-section {
        position: relative;
        overflow: hidden;
      }
      
      .section-title {
        font-size: 2.5rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      .title-divider {
        height: 4px;
        width: 80px;
        margin-top: 15px;
        margin-bottom: 30px;
      }
      
      .feature-card {
        background: white;
        border-radius: 12px;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        border-top: 4px solid transparent;
      }
      
      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(32, 166, 197, 0.15);
        border-top: 4px solid #ff0000;
      }
      
      .feature-title {
        font-size: 1.3rem;
        font-weight: 700;
      }
      
      .feature-text {
        font-size: 0.95rem;
        opacity: 0.9;
      }
      
      @media (max-width: 992px) {
        .section-title {
          font-size: 2rem;
        }
      }
      
      @media (max-width: 768px) {
        .feature-col {
          margin-bottom: 2rem !important;
        }
      }
    `}</style>
  </Container>
</section>
{/* <About/> */}

<section className="about-section py-5" style={{ backgroundColor: '#f0f8ff' }}>
    <div className="container">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="image-container position-relative">
            <img 
              src={shilajitImg} 
              alt="Shilajit Energy Benefits" 
              className="img-fluid rounded-3 shadow-lg main-image"
            />
            <div className="floating-badge bg-danger text-white p-3 rounded-circle shadow">
              <span className="fw-bold">100%</span>
              <span className="d-block">Natural</span>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="col-lg-6 ps-lg-5">
          <h2 className="section-title mb-4">
            <span className="text-dark">ABOUT </span>
            <span className="text-danger">SHILAJIT ENERGY</span>
          </h2>
          
          <p className="lead-text mb-4" style={{ color: '#0a1921' }}>
            At <span className="fw-bold">Shilajit Energy</span>, we believe in more than just energy—we believe in <span className="fw-bold">powering potential</span>. Our premium Himalayan formula delivers clean, sustained energy without compromise.
          </p>
          
          <ul className="benefits-list list-unstyled mb-4">
            <li className="d-flex align-items-start mb-3">
              <img src={checkImg} alt="check" width="24" className="me-3 mt-1" style={{ filter: 'hue-rotate(120deg)' }} />
              <span style={{ color: '#0a1921' }}>Clean energy—zero crash, just pure focus and clarity</span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <img src={checkImg} alt="check" width="24" className="me-3 mt-1" style={{ filter: 'hue-rotate(120deg)' }} />
              <span style={{ color: '#0a1921' }}>Plant-powered with 84+ trace minerals from pure Shilajit</span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <img src={checkImg} alt="check" width="24" className="me-3 mt-1" style={{ filter: 'hue-rotate(120deg)' }} />
              <span style={{ color: '#0a1921' }}>Electrolyte-infused for hydration and peak performance</span>
            </li>
          </ul>
          
          <button 
            className="btn btn-lg btn-danger rounded-pill px-4 py-2 fw-bold shadow-sm"
            style={{ 
              background: '#ff0000',
              transition: 'all 0.3s ease'
            }}
          >
            DISCOVER THE DIFFERENCE →
          </button>
        </div>
      </div>
    </div>

    <style jsx>{`
      .about-section {
        position: relative;
        overflow: hidden;
      }
      
      .section-title {
        font-size: 2.5rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      .lead-text {
        font-size: 1.1rem;
        line-height: 1.7;
      }
      
      .image-container {
        position: relative;
        max-width: 100%;
        overflow: hidden;
        border-radius: 12px;
      }
      
      .main-image {
        transition: transform 0.5s ease;
      }
      
      .image-container:hover .main-image {
        transform: scale(1.02);
      }
      
      .floating-badge {
        position: absolute;
        top: -15px;
        right: -15px;
        width: 80px;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        animation: float 3s ease-in-out infinite;
      }
      
      .benefits-list li {
        transition: transform 0.3s ease;
      }
      
      .benefits-list li:hover {
        transform: translateX(5px);
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      @media (max-width: 992px) {
        .section-title {
          font-size: 2rem;
        }
        
        .ps-lg-5 {
          padding-left: 0 !important;
        }
      }
      
      @media (max-width: 768px) {
        .section-title {
          font-size: 1.8rem;
          text-align: center;
        }
        
        .lead-text {
          text-align: center;
        }
        
        .floating-badge {
          width: 70px;
          height: 70px;
          font-size: 0.8rem;
        }
      }
    `}</style>
  </section>
    <section>


    <Container>
        <div className="image-container"><img src={imgSec} alt="img" className="img-fluid w-100" /></div>
    </Container>
        
    </section>

    <section className="benefits-section py-5" style={{ 
      backgroundColor: '#f0f8ff',
      overflow: "hidden"
    }}>
      <div className="container position-relative">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="section-title mb-3">
            <span className="text-dark">POWER UP </span>
            <span className="text-danger">YOUR PERFORMANCE</span>
          </h2>
          <div className="title-divider mx-auto"></div>
          <p className="lead-text mx-auto" style={{ maxWidth: "600px" }}>
            Experience the Shilajit difference with clinically-proven energy benefits
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="row g-4 justify-content-center">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="col-lg-3 col-md-6 animate__animated animate__fadeInUp" 
              style={{ animationDelay: benefit.delay }}
            >
              <div 
                className="benefit-card h-100 p-4 text-center"
                style={{
                  borderBottom: `3px solid ${benefit.color}`,
                }}
              >
                <i 
                  className={`bi ${benefit.icon} display-4 mb-3`}
                  style={{ color: benefit.color }}
                ></i>
                <h3 className="fw-bold mb-3" style={{ color: '#0a1921' }}>
                  {benefit.title}
                </h3>
                <p className="benefit-desc">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-5">
          <button 
            className="btn btn-lg btn-danger rounded-pill px-4 py-2 fw-bold shadow-sm"
            style={{ 
              background: '#ff0000',
              transition: 'all 0.3s ease'
            }}
          >
            BOOST YOUR ENERGY →
          </button>
        </div>
      </div>

      <style jsx>{`
        .benefits-section {
          position: relative;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          text-transform: uppercase;
        }
        
        .title-divider {
          height: 4px;
          width: 80px;
          background: #20a6c5;
          margin: 1rem auto;
        }
        
        .lead-text {
          color: #0a1921;
          font-size: 1.1rem;
          opacity: 0.9;
        }
        
        .benefit-card {
          background: white;
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(32, 166, 197, 0.15);
        }
        
        .benefit-desc {
          color: #0a1921;
          font-size: 0.95rem;
          opacity: 0.9;
        }
        
        @media (max-width: 992px) {
          .section-title {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
 
    <section className="contact-section py-5 bg-light" style={{ overflow: "hidden" }}>
      <Container>
        <Row className="align-items-stretch g-0"> {/* Changed to align-items-stretch and g-0 */}
          
          {/* Image Column */}
          <Col lg={6} className="d-none d-lg-flex"> {/* Changed to flex display */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-100 w-100" // Added h-100 and w-100
              style={{
                minHeight: "500px", // Set minimum height
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px 0 0 12px" // Rounded left corners only
              }}
            >
              <img 
                src={contactImage} 
                alt="Contact Us" 
                className="h-100 w-100 object-fit-cover" // Changed to cover entire space
                style={{
                  objectPosition: "center",
                  borderRight: "1px solid rgba(0,0,0,0.1)"
                }}
              />
            </motion.div>
          </Col>

          {/* Form Column */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="h-100 p-4 p-lg-5 bg-white d-flex flex-column justify-content-center" // Added flex classes
              style={{
                borderRadius: "0 12px 12px 0", // Rounded right corners only
                borderLeft: "none",
                minHeight: "500px", // Match image height
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
              }}
            >
              <h2 className="text-center mb-4 fw-bold" style={{ color: '#0a1921' }}>
                GET IN <span style={{ color: '#ff0000' }}>TOUCH</span>
              </h2>
              
              <Form onSubmit={handleSubmit} className="mt-3">
                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="py-3 px-3"
                    style={{
                      border: "1px solid #dee2e6",
                      borderRadius: "8px",
                      backgroundColor: "rgba(240, 248, 255, 0.5)"
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-3 px-3"
                    style={{
                      border: "1px solid #dee2e6",
                      borderRadius: "8px",
                      backgroundColor: "rgba(240, 248, 255, 0.5)"
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3 px-3"
                    style={{
                      border: "1px solid #dee2e6",
                      borderRadius: "8px",
                      backgroundColor: "rgba(240, 248, 255, 0.5)"
                    }}
                    required
                  />
                </Form.Group>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-100 py-3 fw-bold border-0"
                    style={{
                      backgroundColor: "#ff0000",
                      borderRadius: "8px",
                      fontSize: "1.1rem"
                    }}
                  >
                    <FaPaperPlane className="me-2" />
                    SEND MESSAGE
                  </Button>
                </motion.div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
      <Footer />

  
      </>
  }
  
  export default Home;
  