import styled from "styled-components";
import profile from "../assets/imgs/profile.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";
const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  display:flex;
  align-items: center;
  justify-content: center;
  color: var(--baige);
  .contact-wrap {
    display: grid;
    grid-template-columns: minmax(280px, 500px) 280px;
    column-gap: 100px;
    align-items: center;
    padding: 0 20px;
    @media (max-width: 768px){
      column-gap: 20px;
    }
    @media (max-width: 540px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      max-width: 300px;
      row-gap: 30px;
    }
  }
  .left{
    @media (max-width: 540px) {
      text-align: center;
    }
    br {
      display: none;
    }
  }
  
  p.recoleta{margin-bottom: 30px; color: var(--baige)}

  .clip-img {
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    img {
      aspect-ratio: 1 / 1;
      object-fit: cover;
      @media (max-width: 768px){
        max-width: 150px;
      }
    }
  }
  
  .right {  
    text-align: center;
  }
  .right ul {
    margin-top: 20px;
    opacity: 0.7;
    font-size: 14px;
  }
  .right ul li {
    display: inline-block;
    padding-right: 20px;
    position: relative;
  }
  .right ul li:after {
    content:'';
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background: #ccc;
    margin-right: 10px;
  }
  .right ul li:last-of-type { padding-right: 0}
  .right ul li:last-of-type:after{
    display:none;
  }
  
`;


const Contact = () => {
  useEffect(()=>{console.log('test')},[])
  return (
    <>
   
      <ContactContainer>
      
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: 'easeIn' }} className="contact-wrap">
          <div className="left">
            <p className="recoleta">Welcome!</p>
            <p className="reg-text">
            hello! welcome to my website<br/>
            currently working at studio-jt as front-end junior developer<br />
            I am passionate about making..
            I am specializing in...
            </p>
          </div>

          <div className="right">
            <div className="clip-img">
              <img src={profile} alt="" />
            </div>
            <ul>
              <li>Minyeo kang</li>
              <li><a href="https://github.com/minyeokang">Github</a></li>
              <li>Email</li>
            </ul>
          </div>
      </motion.div>
      
      </ContactContainer>
     
            
    </>
  );
};

export default Contact;
