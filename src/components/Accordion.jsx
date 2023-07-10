/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { websiteData }from "../data";

import toggleIcon from "../assets/imgs/down.svg";
import bulletIcon from "../assets/imgs/bullet.svg";
import { Link } from "react-router-dom";
const AccordionWrap = styled.ul`
  border: 1px solid var(--orange);
  border-radius: 20px;
  width: calc(100% - 100px);
  margin: 0 auto;
  @media (max-width: 540px) {
    width: calc(100% - 40px);
  }
  li {
    border-bottom: 1px solid var(--lgOrange);
  }
  li:last-of-type{
    border-bottom: 0;
  }
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 50px;
    margin: 0 20px;
    @media (max-width: 540px) {
      margin: 0 15px;
    }
  }

  .content-img {
    position: absolute;
    opacity: 0;
    max-width: 200px;
    min-width: 200px;
    top: 0;
    left: 50%;
    pointer-events: none;
    z-index: 1;
    transition: opacity .3s;
  }

  .content-title {
    display: flex;
    align-items: center;
    a {
       flex-grow: 1;
        position:relative; 
        padding: 20px 20px 20px 30px;
        @media(max-width:540px){
            padding: 10px 10px 10px 25px; 
        }
    }
    a:before {
        content:'';
        width: 24px;
        height: 24px;
        background: url(${bulletIcon}) no-repeat center center;
        background-size: contain;
        position:absolute;
        left:0;
        top:50%;
        transform: translateY(-50%);
        @media(max-width:540px){
          width: 18px;
          height: 18px;
        }
    }
    span {
        font-size: 14px;
        padding: 20px;
        color: var(--lgOrange);
        text-align: center;
        @media(max-width: 540px){display: none;}
    }
  }
  .accordion-content.active button { transform: rotate(-180deg); }

  button {
    background: url(${toggleIcon}) no-repeat center center;
    background-size: contain;
    width: 36px;
    margin: 0 auto;
    transition: transform 0.5s;
  }

  .content-box {
    transition: all 0.5s;
    word-break: break-word;
    padding: 0 30px 20px 50px;
    @media (max-width: 540px) {
      padding: 0 20px 20px 20px;
    }
  }
`;
const Accordion = () => {
  const [items, setItems] = useState(websiteData);

  const toggleAccordion = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const handleMouseMove = (e) => {
    const listItem = e.currentTarget;
    const thumb = listItem.querySelector(".content-img");
    if (!thumb) { return; }
    const center_x = listItem.offsetLeft + thumb.offsetWidth / 2;
    const tween_x = e.clientX - center_x;
    thumb.style.left = `${tween_x}px`;
  };

  const handleMouseLeave = (e) => {
    const listItem = e.currentTarget;
    const thumb = listItem.querySelector(".content-img");
    if (!thumb) { return; }
    thumb.style.opacity = "0";
    listItem.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseEnter = (e) => {
    const listItem = e.currentTarget;
    const thumb = listItem.querySelector(".content-img");
    if (!thumb) { return; }
    thumb.style.opacity = "1";
    listItem.addEventListener("mousemove", handleMouseMove);
  };

  return (
    <AccordionWrap>
      {items.map((item) => (
        <li key={item.id} >
            <div className={`accordion-content ${item.isOpen ? "active" : ""}`}>
                <div className="content-grid">
                    <div className="content-title">
                      <Link to={item.url} target="_blank" rel="noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div>{item.title}</div>
                        
                            <div className="content-img">
                                <figure className="content-thumb">
                                    <img src={item.imgUrl} alt="" />
                                </figure>
                            </div>
                      </Link>
                      <span>{item.skill}</span>
                    </div>
                    
                    <button onClick={() => toggleAccordion(item.id)}>
                    </button>
                </div>
            </div>
            {item.isOpen && (
              <div className='content-box'>
                  <motion.div initial={{ y: 10, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 ,ease: "easeOut"}} >
                  <p className="reg-text">{item.content}</p>
                  </motion.div>
              </div>
            )}
        </li>
      ))}
    </AccordionWrap>
  );
};

export default Accordion;
