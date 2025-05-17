import styled from "styled-components"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import BetterBanner from "../components/BetterBanner/BetterBanner"
import Banner from "../components/Banner/Banner"
import Divider2 from "../components/Divider/Divider2"
import { FormContact } from "../components/FormContact/FormContact"
import Card2 from "../components/Card1/Card2"

import Tours from "./Tours"


const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 450px) {
  }
`;

const CardScrollContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 812px) {
    flex-direction: column;
    padding: 10px;
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
        image="/image/ima/36.webp"
        //imonClick={() => window.location.href = "https://wa.me/50670453129"}
        //Titulo Props
        bimage="/image/logo.png"
        title="OUR ADVISOR"
        text="Kennet is our Bilingual guide and professional tourism driver with extensive knowledge on  
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

<CardScrollContainer>
            <Card2
                    title="OUR MISION"
                    parraf="Your need to move around as you please in the own schedule is our reason for being and that is why we 
                    customize your excursions according to your needs, supported by our expert, We are from guanacaste and we want 
                    to show you the true Costa Rican culture."
                    image="/image/api.png"
                />
            </CardScrollContainer>
      
      {/*<Scroll1/>*/}
      <Section>
      <Banner image="/image/servicios.png" h1 ="OUR SERVICES" color="#1b6b03" fcolor="#f3f3f3"/>
      <Divider2/>
      </Section>
      <Section>
      <Tours/>
      <Banner image="/image/contacto.png" h1 ="FORM FOR YOUR QUERIES" color="#1b5e0f" fcolor="#f3f3f3"/>
      <FormContact/>
      </Section>
    </div>
  )
}

export default Home
