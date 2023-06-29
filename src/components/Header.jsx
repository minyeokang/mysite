import { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import star from "../assets/imgs/star.svg";
const Gnb = styled.header`
  position: absolute; left: 0; top: 0; width: 100%;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  .minyeo-logo{padding-left: 20px;}
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    padding: 0 20px;
  
  } 
  li.is-contact { color: #fff; } 
  .minyeo-logo.is-contact {
    color: #fff;
  }
  .active {position: relative;}
  .active:before { 
    content:''; position: absolute; right: 0; top: 5px; width:16px; height: 16px;  background: url(${star}) no-repeat; background-size: contain; transform: translateX(100%);
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
    setCurrentUrl(location.pathname === "/contact");
  };
  return (
    <Gnb>
      <Link to="/" >
        <div onClick={handleUrl} className={`minyeo-logo ${currentUrl ? 'is-contact' : ''}`} >
        Minyeo
        </div>
      </Link>
      <ul>
        <li onClick={handleUrl} className={currentUrl ? 'is-contact' : ''}>
          <NavLink to="/work" >Work</NavLink>
        </li>
        <li onClick={handleUrl} className={currentUrl ? 'is-contact' : ''}>
          <NavLink to="/contact" >Contact</NavLink>
        </li>
      </ul>
    </Gnb>
  );
};

export default Header;
