import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import MenuHeader from "./MenuHeader/MenuHeader";

const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding-top: 0px;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Espacio entre logo/título y menú */
  background-color: #ca7610;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1px;
  }
`;

const LogoSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px; /* Espacio entre la imagen y el título */

  img {
    max-width: 6.528rem;
    max-height: 6.5rem;
  }

  @media (max-width: 1024px) {
    gap: 1px;
    img {
      max-width: 18rem;
    }
  }

  @media (max-width: 768px) {
    gap: 1px;
    flex-direction: column;
    img {
      max-width: 80%;
      margin-bottom: 15px;
      margin-left: 25px;
    }
  }

  @media (max-width: 427px) {
    gap: 1px;
    flex-direction: column;
    img {
      max-width: 80%;
    }
  }
`;

const H1 = styled.h1`
  font-size: clamp(30px, 5vw, 60px); /* Responsive font size */
  font-family: "Zilla Slab", serif;
  font-weight: 900; /* Nota: tienes dos veces font-weight, solo necesitas uno */
  font-style: normal;
  color: #ffffff;
  margin: 0;
  white-space: nowrap; /* Evita que el texto se divida en varias líneas */
`;

const MenuHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Header = () => {
  const { colorprimary, logo } = useContext(GlobalContext);

  return (
    <HeaderStyle theme={{ colorprimary }}>
      {/* Contenedor del logo y título */}
      <Link to="/">
        <LogoSection>
          <img src={logo} alt="Logo" />
          <H1>CEBRA TOURS</H1>
        </LogoSection>
      </Link>

      {/* Contenedor del menú centrado */}
      <MenuHeaderContainer>
        <MenuHeader />
      </MenuHeaderContainer>
    </HeaderStyle>
  );
};

export default Header;