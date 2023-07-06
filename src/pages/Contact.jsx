import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../components/Header";
import About from "../components/About";
const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .contact-inner {
    max-width: 800px;
    padding: 0 20px;
  }
`;

const Contact = () => {
  return (
    <>
      <Header />
      <ContactContainer className="contact">
        <motion.div
          className="contact-inner"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <About />
        </motion.div>
      </ContactContainer>
    </>
  );
};

export default Contact;
