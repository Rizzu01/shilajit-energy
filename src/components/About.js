import React from "react";
import shilajitImg from "../images/Shilajit_Benefits.jpg";
import checkImg from "../images/icons/check-mark.png";

const About = () => (
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
);

export default About;