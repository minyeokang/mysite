/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Accordion from "../components/Accordion";
import Header from "../components/Header";
import middleIcon from "../assets/imgs/circle.svg";
import cornerIcon from "../assets/imgs/new-corner.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion"
const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  .work {
    max-width: 800px;
    padding: 0 20px;
    margin: 0 auto;
  }
`;
const ListWrap = styled.div`
  padding-bottom: 30px;
  &:last-of-type { padding-bottom: 50px;
    @media (max-width: 540px) {
      padding-bottom: 30px;
    }
   }
  
  .work-title {
    margin: 90px 0 50px;
    @media (max-width: 540px) {
      margin: 70px 0 25px;
    }
  }
  p.recoleta {
    color: var(--newBlue);
  }
  .work-title.ability {
    position: relative;
  }
  .work-title.ability:before {
    content: "";
    background: url(${middleIcon}) no-repeat;
    background-size: cover;
    width: 250px;
    height: 250px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    mix-blend-mode: color-burn;
    @media (max-width: 540px) {
      width: 180px;
      height: 180px;
    }
  }
  
  .work-title.projects {
    position: relative;
    padding-left: 70px;
    @media (max-width: 540px) {
      padding-left: 40px;
    }
  }
  .work-title.projects:before {
    content: "";
    background: url(${cornerIcon}) no-repeat;
    background-size: cover;
    width: 80px;
    height: 80px;
    position: absolute;
    left: 0;
    top: -60px;
    @media (max-width: 540px) {
      width: 55px;
      height: 55px;
      top: -40px;
    }
  }
  .work-title.projects:after {
    content: "";
    background: url(${cornerIcon}) no-repeat;
    background-size: cover;
    width: 80px;
    height: 80px;
    position: absolute;
    right: 0;
    top: -60px;
    transform: rotate(-270deg);
    @media (max-width: 540px) {
      width: 55px;
      height: 55px;
      top: -40px;
    }
  }

  .bottom {
    margin: 50px 0 90px;
    position: relative;
    padding-right: 70px;
  }
  .bottom:before {
    content: "";
    background: url(${cornerIcon}) no-repeat;
    transform: rotate(270deg);
    background-size: cover;
    width: 80px;
    height: 80px;
    position: absolute;
    left: 0;
    bottom: -30px;
    @media (max-width: 540px) {
      width: 55px;
      height: 55px;
      bottom: 0px;
    }
  }
  .bottom:after {
    content: "";
    background: url(${cornerIcon}) no-repeat;
    transform: rotate(180deg);
    background-size: cover;
    width: 80px;
    height: 80px;
    position: absolute;
    right: 0;
    bottom: -30px;
    @media (max-width: 540px) {
      width: 55px;
      height: 55px;
      bottom: 0px;
    }
  }
  
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: var(--lgOrange);
  }
  h3:not(:first-of-type) {
    margin-top: 20px;
  }

  p.reg-text {
    a {
      text-decoration: underline;
    }
    font-size: 18px;
    word-break: break-all;
  }
`;

const Work = () => {
  const scrollProject = useRef(null)
  const isInView = useInView(scrollProject,{ once: true })
 
  return (
    <>
      <Header />
      <ListContainer>
        <div className="work">
          <ListWrap className="ability-wrap">
            <div className="work-title ability">
              <p className="recoleta">Abilities</p>
            </div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            >

              <h3 className="recoleta">Expertise in</h3>
              <p className="reg-text">WordPress Development, Responsive Website Creation using HTML & CSS, and High-Quality Motion Work with JavaScript. What truly sets me apart is my proficiency in quickly adapting to new tools and frameworks. 
              </p>

              <h3 className="recoleta">Work Experience</h3>
              <p className="reg-text"> With one year of work experience as a junior front-end developer at <Link to={"https://studio-jt.co.kr/"} target="_blank" rel="noreferrer noopenner">Studio-JT</Link>, I had the opportunity to be part of a renowned web agency in South Korea, recognized for delivering high-quality websites with a strong emphasis on WordPress expertise. </p>
              
              <h3 className="recoleta">My roles</h3>
              <p className="reg-text">Maintaining and creating new pages to meet customer needs. I worked with {""}
              <Link to={"https://www.cafe24.com/"} target="_blank" rel="noreferrer noopenner">Cafe24,</Link> <Link to={"https://richwood.net/"} target="_blank" rel="noreferrer noopenner">Richwood,</Link> <Link to={"https://dongil82.co.kr/"} target="_blank" rel="noreferrer noopenner">Dongil,</Link> <Link to={"https://itshanbul.com/"} target="_blank" rel="noreferrer noopenner">Hanbul,</Link> <Link to={"https://www.nasmedia.co.kr/"} target="_blank" rel="noreferrer noopenner">Nasmedia</Link> and more. Moreover, I actively contributed to the development of <Link to={"https://klaytn.foundation/"} target="_blank" rel="noreferrer noopenner">Klaytn.</Link> 
              {""} Alongside my development skills, I wrote an aritcle about SEO for the company. A remarkable accomplishment was when my article on <Link to={"https://studio-jt.co.kr/%ec%8a%a4%ed%82%a4%eb%a7%88-%eb%a7%88%ed%81%ac%ec%97%85/"} target="_blank" rel="noreferrer noopenner">schema markup</Link> achieved a higher ranking on Google compared to the official Google document.</p>

              <h3 className="recoleta">By doing that..</h3>
              <p className="reg-text"> Working at a company that values cross-browser compatibility and pixel-perfect details has cultivated my meticulous approach towards my work. It has emphasized the significance of open communication with teammates, meeting deadlines, the importance of self-study, and staying updated with the latest advancements. Consequently, I am confident in my ability to transform my envisioned projects into reality. Below are examples of that. </p>

            </motion.div>

          </ListWrap>
          <ListWrap ref={scrollProject}>
            <div
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.8s ease-in 0.5s"
            }}
            >
              <div className="work-title projects">
                <p className="recoleta">Projects</p>
              </div>

              <Accordion />

              <div className="bottom"></div>

            </div>
            
          </ListWrap>
        </div>
       
      </ListContainer>
    </>
  );
};

export default Work;
