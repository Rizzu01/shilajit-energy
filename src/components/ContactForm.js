import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import contactImage from "../images/contact-image.jpg"; // Replace with your image

const ContactForm = () => {
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

  return (
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
  );
};

export default ContactForm;