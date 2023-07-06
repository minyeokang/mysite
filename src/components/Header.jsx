import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import star from "../assets/imgs/star.svg";
const Gnb = styled.header`
  position: absolute; left: 0; top: 0; 
  width: 100%;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  .minyeo-logo{padding-left: 20px;}
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    padding: 0 20px;
    @media(max-width: 540px){
      column-gap: 10px;
    }
  } 
  .active {position: relative;}
  .active:before { 
    content:''; 
    position: absolute; 
    right: 3px; top: 7px; 
    width:14px; height: 14px;  
    background: url(${star}) no-repeat; background-size: contain; 
    transform: translateX(100%); 
  }
  a {
    padding: 12px 0;
    color: inherit;
  }
`;

const Header = () => {
  const [currentUrl, setCurrentUrl] = useState(false);
  const location = useLocation();
  useEffect(()=>{
    handleUrl()
  },[location])
  const handleUrl = () => {
    setCurrentUrl(location.pathname === "/about");
  };
  return (
    <Gnb>
      <NavLink to="/">
        <div onClick={handleUrl} className={`minyeo-logo ${currentUrl ? 'is-about' : ''}`}>
        Minyeo
        </div>
      </NavLink>
      <ul>
        <li onClick={handleUrl} className={currentUrl ? 'is-about' : ''}>
          <NavLink to="/work">Work</NavLink>
        </li>
        <li onClick={handleUrl} className={currentUrl ? 'is-about' : ''}>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </Gnb>
  );
};

export default Header;
