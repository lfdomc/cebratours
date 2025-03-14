import './App.css'
import AppRoutes from './routes'
import Background from './components/Background/Background'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import GlobalContextProvider from './context/GlobalContext'
import { BrowserRouter } from 'react-router-dom'
import WhatsApp from './components/WhatsApp/WhatsApp'
import TopMenu from './components/TopMenu/TopMenu'
import styled from 'styled-components'

// Estilizando la imagen para que esté fija en la esquina superior derecha
const IMG = styled.img`
  position: fixed; // Fija la posición en relación con la ventana
  top: 0px;       // Ajusta la distancia desde la parte superior
  right: -5px;     // Ajusta la distancia desde la derecha
  z-index: 9999;   // Asegura que esté encima de otros elementos
  width: 200px;     // Define un ancho (ajusta según necesites)
  height: auto;    // Mantiene la proporción de la imagen

  @media (max-width: 427px) {
    display: flex;}
    width: 180px;
    height: auto;


`

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalContextProvider>
          <Background>
            {/* Agregamos la imagen */}
            <IMG src="image/sloth.png" alt="Sloth Icon" />
            <WhatsApp
              imageSrc="/image/whatsapp.png"
              onClick={() => window.location.href = "https://wa.me/50689280606"}
            />
            
            <Header />
            <AppRoutes />
            <TopMenu/>
            <Footer />
           
          </Background>
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App