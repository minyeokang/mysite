import styled from "styled-components";
import { Link } from "react-router-dom";
import heartIcon from "../assets/imgs/heart.svg";
const ContactWrap = styled.div`
  margin: 0 auto;
  font-family: sans-serif;
  font-size: 18px;
  h2 {
    margin-bottom: 50px;
    color: var(--green);
    @media(max-width: 540px){
      margin-top: 80px;
      margin-bottom: 25px;
    }
  }
  a { 
    text-decoration: underline;
  }
  ul li {
    position: relative; 
    padding-left: 40px; margin-bottom: 20px; 
    line-height: 1.3;
    @media(max-width: 540px){
      padding-left: 23px;
    }
  }
  li:before{
    content:''; 
    position: absolute; left: 0; top: -4px; 
    width: 30px; height: 30px; 
    background: url(${heartIcon}) no-repeat;
    @media(max-width: 540px){
      width: 20px; height: 20px; top: 0; 
    }
  }
  p {
    line-height: 1.3;
    margin-top: 50px;
    padding-bottom: 50px;
    @media(max-width: 540px){
      padding-bottom: 30px;
      margin-top: 30px;
    }
  }
  
`;
const About = () => {
  const email = "minyeo0729@gmail.com";
  return (
    <>
      <ContactWrap>
        <h2 className="recoleta">Hello! I am minyeo </h2>
        <ul>
          <li>
            I am a passionate and skilled front-end developer with a strong
            focus on creating engaging, interactive, pixel-perfect websites.
          </li>
          <li>
            I thrive on the challenge of making websites not only visually stunning but also functional and responsive across all devices. With my abilities, I can bring any concept to life and deliver exceptional results.
          </li>
          <li>
            If you want to get to know more about me, check out my {" "}<Link to={"https://github.com/minyeokang"} target="_blank">Github</Link>, or <Link to={`mailto:${email}`} className="no-line">Email me</Link>
          </li>
        </ul>

        <p>
          This portfolio has been created entirely from scratch, without any
          copy-pasting. <br />
          While I drew inspiration from{" "}
          <Link to={"https://selfaware.studio/"} target="_blank">Selfaware Studio</Link>{" "}
          for the design, I have customized and implemented it using my own
          code. The SVG resources used in this project were sourced from{" "}
          <Link to={"https://svghub.vercel.app/"} target="_blank">
            Svghub.
          </Link>
        </p>
       
      </ContactWrap>
    </>
  );
};

export default About;
