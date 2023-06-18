import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Gnb = styled.header`
  padding: 0 20rem;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20rem;
  } 
  a {
    padding: 12rem 0;
  }
`;
const Header = () => {
  return (
    <Gnb>
      <NavLink to="/" activeclassname="active">
        Minyeo
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
