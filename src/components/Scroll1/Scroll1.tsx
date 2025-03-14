import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const Img = styled.img`
  height: auto;
  width: 90%;
  object-fit: cover;
  border-radius: 10px;
  margin: 0;
  &:hover {
    background-color: #821f82;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: auto;
    width: 50%;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: false,
  variableWidth: true,
  swipeToSlide: true,
  touchThreshold: 10,
  adaptiveHeight: true, // Agrega esta opción para evitar espacios vacíos
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Scroll1: React.FC = () => (
  <SliderWrapper>
    <Slider {...settings}>
      {["1", "2", "3", "4", "5"].map((img, index) => (
        <SlideContainer key={index}>
          <Img src={`/image/Kawasmy/${img}.png`} alt={`Imagen ${index + 1}`} />
        </SlideContainer>
      ))}
    </Slider>
  </SliderWrapper>
);

export default Scroll1;
