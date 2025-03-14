import styled from "styled-components";

const Section = styled.section`
  display: flex;
  background-color: transparent;
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
  padding-right :20px;
`;

const Nav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #0b0362;
  padding: 2px;
  gap: 10px;
`;



const Img = styled.img`
width: 40px;

&:hover {
    background-color: #2f1475;
   
    
    transform: scale(1.05);
  }
    
`




const SocialButtons = () => {
  return (
    <Section>

      <Nav>
       
        <SectionA>
          <button>
            <Img src="/image/Redes/instagramw.png" alt="instagram" onClick={() => window.open("https://www.instagram.com/transporteskawasmy/", "_blank")}/>
          </button>
          <button>
            <Img src="/image/Redes/fbw.png" alt="facebook" onClick={() => window.open("https://www.facebook.com/kawasmy", "_blank")}/>
          </button>

        </SectionA>


      </Nav>

    </Section>
  )
}

export default SocialButtons