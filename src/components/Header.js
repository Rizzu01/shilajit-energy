import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myImage from "../images/logo.svg";

function Header() {
  return (
    <Navbar expand="lg" className="py-3" >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src={myImage} 
            alt="Shilajit Energy Logo" 
            width="100"
            className="hover-grow"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          style={{ borderColor: '#20a6c5' }}
        >
          <span className="navbar-toggler-icon" style={{ color: '#20a6c5' }}></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              as={Link} 
              to="/" 
              className="nav-link mx-2 px-3 py-2"
              style={{ color: '#000' }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className="nav-link mx-2 px-3 py-2"
              style={{ color: '#000' }}
            >
              About Us
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className="nav-link mx-2 px-3 py-2"
              style={{ color: '#000' }}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/shop" 
              className="nav-link-cta ms-lg-3 mt-2 mt-lg-0 px-4 py-2 rounded-pill"
              style={{ 
                backgroundColor: '#ff0000',
                color: 'white',
                fontWeight: '600'
              }}
            >
              Shop Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx global>{`
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .nav-link:hover {
          color: #20a6c5 !important;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #20a6c5;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 60%;
          left: 20%;
        }
        
        /* CTA specific styles */
        .nav-link-cta {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .nav-link-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 0, 0, 0.4);
          color: white !important;
        }
        
        /* Remove underline effect from CTA */
        .nav-link-cta::after {
          display: none !important;
        }
        
        .hover-grow {
          transition: transform 0.3s ease;
        }
        
        .hover-grow:hover {
          transform: scale(1.05);
        }
        
        @media (max-width: 992px) {
          .nav-link {
            margin: 0.5rem 0;
            padding: 0.5rem 1rem !important;
          }
          
          .nav-link-cta {
            margin: 1rem 0 0 0 !important;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default Header;