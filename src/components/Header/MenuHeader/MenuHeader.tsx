import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";


const Section = styled.section`
  display: flex;
  background-color: transparent;
  flex-wrap: wrap;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
  padding: 2px;
`;

interface UlProps {
  $isOpen: boolean;
}

const Ul = styled.ul<UlProps>`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 554px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: absolute;
    top: 20px;  /* Ajuste de la posición vertical */
    left: 120px;
    transform: translateX(-50%);  /* Centrado horizontal */
    background-color: #11417b2f;
    width: 200px;
    flex-direction: column;
    border-radius: 30px;
    border: 2px solid;
    gap: 10px;
    padding: 1px;
    z-index: 300;
  }
`;

const StyledLink = styled(Link)`
  font-size: 30px;
  font-family: "Dosis", sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  border: 2px solid transparent;
  border-radius: 20px;
  background-color: #076c2f;
  color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #7b4708;
    border: 2px solid #cc7c04;
   
    transform: scale(1.05);
  }
`;


const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  span {
    width: 35px;
    height: 6px;
    background-color: #f2f3f5;
    border-radius: 5px;
  }

  @media (max-width: 554px) {
    display: flex;
  }
`;

function MenuHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false); // Función para cerrar el menú

  return (
    <Section>
      <Nav>
        <Hamburger onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Ul $isOpen={isOpen}>
          <li>
            <StyledLink to="/" onClick={closeMenu}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/servicios" onClick={closeMenu}>Services</StyledLink>
          </li>
          <li>
            <StyledLink to="/tours" onClick={closeMenu}>Tours</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact" onClick={closeMenu}>Contact</StyledLink>
          </li>
          <li>
          </li>
          
          

          
        </Ul>
      </Nav>
      
    </Section>
  

  );
}

export default MenuHeader;
