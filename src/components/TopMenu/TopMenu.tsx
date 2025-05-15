import styled from "styled-components";


const Section = styled.section`
  display: flex;
  background-color: #015e12;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  
`;

const SectionA = styled.section`
  display: flex;
  background-color: transparent;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  padding-right: 20px;
`;

const Nav = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  background-color: transparent;
  padding: 2px;
  gap: 10px;
  margin-top: 0px; /* Agregamos un margen superior para mover la sección hacia abajo */
`;

const Img = styled.img`
  width: 40px;

  &:hover {
    background-color: #c4c4c4;
    transform: scale(1.05);
  }
`;

function TopMenu() {
  return (
    <Section>
      <Nav>
        <SectionA>
          <button>
            <Img
              src="/image/Redes/instagram.png"
              alt="instagram"
              onClick={() =>
                window.open("https://www.instagram.com/cebratourscr?igsh=c2h4aGgyeGtxdGFi", "_blank")
              }
            />
          </button>
          <button>
            <Img
              src="/image/Redes/fb.png"
              alt="facebook"
              onClick={() => window.open("https://www.facebook.com/share/15FR4foyqs/", "_blank")}
            />
          </button>
          <button>
            <Img
              src="/image/Redes/tiktok.svg"
              alt="facebook"
              onClick={() => window.open("https://www.tiktok.com/@cebratourscr?_t=ZM-8wA7wnbgSNa&_r=1", "_blank")}
            />
          </button>
        </SectionA>
      </Nav>
    </Section>
  );
}

export default TopMenu;