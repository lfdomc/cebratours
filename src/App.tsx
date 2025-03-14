import './App.css';
import AppRoutes from './routes';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GlobalContextProvider from './context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';
import WhatsApp from './components/WhatsApp/WhatsApp';
import styled from "styled-components";
import TopMenu from './components/TopMenu/TopMenu';

const IMG = styled.img`
  width: 15rem; // Tamaño inicial más grande
  height: auto; // Mantener la proporción de aspecto
  position: absolute; // Posicionamiento absoluto
  top: 43px; // Espacio desde la parte superior
  right: -10px; // Espacio desde la derecha
  z-index: 9999; // Asegura que esté encima de otros elementos

  @media (max-width: 1024px) {
    width: 12rem; // Reducir el tamaño en pantallas medianas
  }

  @media (max-width: 768px) {
    width: 10rem; // Reducir aún más en pantallas pequeñas
  }

  @media (max-width: 427px) {
    width: 8rem; // Tamaño más pequeño para móviles
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalContextProvider>
          <Background>
            {/* Imagen flotante en la esquina superior derecha */}
            <IMG src="/image/sloth.png" alt="Sloth" />
            
            {/* Componente de WhatsApp */}
            <WhatsApp
              imageSrc="/image/whatsapp.png"
              onClick={() => window.location.href = "https://wa.me/50689670500"}
            />
            
            {/* Encabezado */}
            <TopMenu/>
            <Header />
            
            {/* Rutas de la aplicación */}
            <AppRoutes />
            
            {/* Pie de página */}
            <Footer />
          </Background>
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;