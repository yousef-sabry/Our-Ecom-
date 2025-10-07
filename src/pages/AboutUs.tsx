import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

// 🧩 Styled Components
const AboutSection = styled.div`
  background-color: #f9f9f9;
  border-radius: 25px;
  padding: 40px 20px;
  margin-top: 25px;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: #0dcaf0;
  text-align: center;
  margin-bottom: 30px;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.8;
  text-align: justify;
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

// ✉️ Contact Section
const ContactSection = styled.div`
  background-color: #0dcaf0;
  border-radius: 25px;
  padding: 40px 20px;
  text-align: center;
  color: #fff;
  margin-top: 50px;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 25px;
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 1.8rem;
`;

const ContactIcon = styled.a`
  color: #fff;
  transition: 0.3s;
  &:hover {
    color: #333;
  }
`;

const AboutUs = () => {
  return (
    <AboutSection>
      <Container>
        {/* 🔹 About Section */}
        <Row className="align-items-center">
          <Col md={6}>
            <AboutImage
              src="https://i.pinimg.com/736x/24/ff/cf/24ffcfb1e082b236f6898007351d7f76.jpg"
              alt="About Us"
            />
          </Col>
          <Col md={6}>
            <AboutTitle>About Our Store</AboutTitle>
            <AboutText>
              Welcome to our E-Commerce platform! We’re passionate about delivering
              high-quality products that combine style, comfort, and affordability.
              Our mission is to create an easy, enjoyable shopping experience for
              everyone — from fashion lovers to tech enthusiasts.
              <br /><br />
              This project was developed by <b>Yousef Sabry</b> as part of a full-stack
              learning journey, blending design, React development, and modern UI
              techniques to build a professional shopping experience.
            </AboutText>
          </Col>
        </Row>

        {/* 🔹 Contact Section */}
        <ContactSection>
          <Container>
            <ContactTitle>Contact Me</ContactTitle>
            <ContactText>
              Feel free to reach out for collaborations, freelance work, or just to say hi 👋
            </ContactText>
            <IconGroup>
              <ContactIcon href="https://www.linkedin.com/in/yousef-sabry" target="_blank">
                <FaLinkedin />
              </ContactIcon>
              <ContactIcon href="https://github.com/yousef-sabry" target="_blank">
                <FaGithub />
              </ContactIcon>
              <ContactIcon href="https://wa.me/201234567890" target="_blank">
                <FaWhatsapp />
              </ContactIcon>
              <ContactIcon href="mailto:yousef.sabry@example.com">
                <FaEnvelope />
              </ContactIcon>
            </IconGroup>
          </Container>
        </ContactSection>
      </Container>
    </AboutSection>
  );
};

export default AboutUs;








