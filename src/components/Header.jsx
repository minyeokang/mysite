import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  a {
    padding: 12px 0;
  }
  a.dark-mode {color: #fff;}
  //rnd -> /contact이면 a링크에 dark-mode addclass 
  //activeclassname 어떤걸로 효과 넣을지 
`;

const Header = () => {
  useEffect(()=>{
    console.log('test')
  })
  return (
    <Gnb>
      <NavLink to="/" activeclassname="active">
        <div className="minyeo-logo">
        Minyeo
        </div>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </Gnb>
  );
};

export default Header;
