import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function StandardImageList() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const theme = useTheme();

  // Detectar si la pantalla es pequeña usando un media query
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Definir explícitamente el tipo del parámetro imageSrc
  const handleImageClick = (imageSrc: string) => {
    setExpandedImage(imageSrc);
  };

  const handleClose = () => {
    setExpandedImage(null);
  };

  return (
    <div>
      {/* Lista de imágenes */}
      <ImageList
        sx={{
          width: '100%', // Ocupa el 100% del ancho de la página
          height: 300,   // Altura fija de 400px
          overflowY: 'auto', // Permite desplazamiento vertical si es necesario
        }}
        cols={isSmallScreen ? 2 : 6} // Cambia el número de columnas según el tamaño de la pantalla
        rowHeight={300} // Altura de cada fila
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => handleImageClick(item.img)}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ cursor: 'pointer' }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal para la vista expandida */}
      <Modal open={!!expandedImage} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 1,
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
          }}
        >
          <img
            src={expandedImage || ''}
            alt="Expanded view"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}

// Definir el tipo de itemData
const itemData: { img: string; title: string }[] = [
  {
    img: '/image/ima/33.webp',
    title: 'sloth',
  },
  {
    img: '/image/ima/22.webp',
    title: 'Burger',
  },
  {
    img: '/image/ima/35.webp',
    title: 'Camera',
  },
  {
    img: '/image/ima/20.webp',
    title: 'Coffee',
  },
  {
    img: '/image/ima/37.webp',
    title: 'Hats',
  },
  {
    img: '/image/ima/40.webp',
    title: 'Honey',
  },
];