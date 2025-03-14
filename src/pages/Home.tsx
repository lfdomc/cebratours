import styled from "styled-components"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import BetterBanner from "../components/BetterBanner/BetterBanner"
import Banner from "../components/Banner/Banner"
import Divider2 from "../components/Divider/Divider2"
import { FormContact } from "../components/FormContact/FormContact"


const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 450px) {
  }
`;


const Home = () => {
  const { colorprimary } = useContext(GlobalContext);

  return (
    <div>
      <BetterBanner
        //MainProps
        flexdirection="row"
        imgflexdirection="none"
        bgmain=" #fafafa"
        bgimage=""
        //Imagen Props
        image="/image/Kawasmy/imagen1.jpg"
        //imonClick={() => window.location.href = "https://wa.me/50670453129"}
        //Titulo Props
        bimage="/image/logo.png"
        title="OUR ADVISOR"
        text="We have a Bilingual guide and professional tourism driver with extensive knowledge on  
        Guanacaste province, its culture and its destinations with 11 years of experience in tourist transportation and customer service."
        //Texto Props
        text2=""
        text3=""
        //Button1 Props
        textbutton="Visitar Página"
        btColor={colorprimary}
        fbtColor="white"
        hbtColor="#0499b7"
        btonClick={() => window.open("https://restaurante-machote.vercel.app/", "_blank")}

        //btimage="/image/ktrina/calabera.png"

        //Button2 Props
        //btimage2="/image/ktrina/calabera.png"
        bt2display="none"
        bt2Color="#2e0143"
        fb2tColor="white"
        textbutton2="Conozca Nuestro Menú"
        hbt2Color="#ece2df"

      />
      
      {/*<Scroll1/>*/}
      <Section>
      <Banner image="/image/servicios.png" h1 ="OUR SERVICES" color="#1b6b03" fcolor="#f3f3f3"/>
      <Divider2/>
      </Section>
      <Section>
      <Banner image="/image/contacto.png" h1 ="FORM FOR YOUR QUERIES" color="#1b5e0f" fcolor="#f3f3f3"/>
      <FormContact/>
      </Section>
    </div>
  )
}

export default Home
