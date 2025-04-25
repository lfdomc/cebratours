import styled from "styled-components";
import React from "react";

const MainSection = styled.section<{ $bgmain: string; $flexdirection: string; $bgimage: string }>`
    display: flex;
    flex-direction: ${(props) => props.$flexdirection};
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    background-color: ${(props) => props.$bgmain};
    opacity: 0.9;
    align-items: center;
    justify-content: center;
    background-image: ${(props) => (props.$bgimage ? `url(${props.$bgimage})` : "none")};
    padding: 5px;
    border: 0.2rem solid;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 0;
    }
`;

const imagenUp = "/image/Kawasmy/imagen1.jpg";

const SectionA = styled.section<{ $imgflexdirection?: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    padding-top: 5px;
    padding-bottom: 10px;

    img {
        max-width: 90%;
        height: 30%;
        border-radius: 390px;
        padding-bottom: 20px;
    }

    .imagenUp {
        display: ${(props) => props.$imgflexdirection};
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: auto;
        max-width: 700px;
    }

    @media (max-width: 768px) {
        width: 100%;
        img {
            max-width: 100%;
        }
    }
`;

const H23 = styled.h4`
    font-size: clamp(1rem, 1.5vw, 2rem);
    font-weight: 900;
    max-width: 100%;
    padding-bottom: 2px;
    padding-top: 2px;
    text-align: left;
    margin: 0;
    background-color: #004805; /* Resaltado */
    color: #f7f7f7; /* Color del texto */
    padding: 8px;
    border-radius: 60px;
`;

const SectionB = styled.section`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Cambio clave */
    justify-content: center;
    font-family: "Dosis", sans-serif;
    text-align: left; /* Alineación a la izquierda */
    padding: 20px 100px 20px 50px;
    background-color: transparent;

    img {
        max-width: 40%;
        height: auto;
        border-radius: 60px;
        padding-bottom: 20px;
    }

    h1 {
        font-size: clamp(2rem, 2vw, 3rem);
        font-weight: 900;
        max-width: 100%;
        padding-bottom: 16px;
    }

    h2 {
        font-size: clamp(1rem, 2vw, 1.5rem);
        font-weight: 500;
        text-align: left; /* Alineación a la izquierda */
        max-width: 90%;
        line-height: 1.4;
    }

    @media (max-width: 768px) {
        width: 100%;
        align-items: start; /* Mantener centrado en pantallas pequeñas */
        text-align: start;
        padding: 10px;
    }
`;

const SectionC = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    background-color: #f3eded68;
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 15px;
    text-align: left; /* Alineación a la izquierda */

    h1 {
        font-size: clamp(1rem, 2vw, 1.5rem);
        font-weight: 600;
        text-align: left; /* Alineación a la izquierda */
    }

    h3 {
        font-size: clamp(1rem, 2vw, 1.5rem);
        font-weight: 700;
        text-align: left; /* Alineación a la izquierda */
        padding-left: 3px;
        padding-right: 3px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        text-align: start;
        gap: 5px;
        width: 100%;
        padding: 5px;
    }
`;

const SectionD = styled.section`
    display: flex;
    flex-direction: column; /* Cambiado a columna para alinear texto a la izquierda */
    align-items: flex-start; /* Alineación a la izquierda */
    justify-content: flex-start; /* Alineación a la izquierda */
    gap: 10px;
    width: 100%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Button = styled.button<{ $btColor: string; $fbtColor: string; $hbtColor: string }>`
    display: none;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 250px;
    background-color: ${(props) => props.$btColor};
    color: ${(props) => props.$fbtColor};
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    margin-top: 15px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
        background-color: ${(props) => props.$hbtColor};
    }

    img {
        width: 50px;
    }

    @media (max-width: 768px) {
        width: 20%;
    }
`;

const Button2 = styled(Button)<{ $bt2display: string }>`
    display: ${(props) => props.$bt2display};
`;

interface BannerProps {
    image: string;
    bimage: string;
    title: string;
    text: string;
    text2: string;
    text3: string;
    textbutton: string;
    btColor: string;
    hbtColor: string;
    fbtColor: string;
    bgmain: string;
    flexdirection: string;
    btimage?: string;
    bgimage?: string;
    btonClick?: () => void;
    imonClick?: () => void;
    bt2display: string;
    btimage2?: string;
    bt2Color: string;
    fb2tColor: string;
    textbutton2: string;
    hbt2Color: string;
    bt2onClick?: () => void;
    imgflexdirection?: string;
}

const Tour2: React.FC<BannerProps> = ({
    image,
    title,
    text,
    text2,
    text3,
    textbutton,
    btColor,
    fbtColor,
    bgmain,
    hbtColor,
    flexdirection,
    btimage = "",
    bgimage = "",
    btonClick,
    btimage2 = "",
    bt2display,
    bt2Color,
    fb2tColor,
    textbutton2,
    hbt2Color,
    bt2onClick,
    imgflexdirection,
}) => {
    return (
        <MainSection $bgmain={bgmain} $flexdirection={flexdirection} $bgimage={bgimage}>
            <SectionA $imgflexdirection={imgflexdirection}>
                <img className="imagenUp" src={imagenUp} alt="Imagen Up" />
                <img src={image} alt="Imagen" />
            </SectionA>
            <SectionB>
                <h1>{title}</h1>
                <H23>Description:</H23>
                <h2>{text}</h2>
                <H23>What do you need?</H23>
                <SectionC>
                    <h1>{text2}</h1>
                </SectionC>
                <SectionD>
                    <H23>What the tour include?</H23>
                    <h2>{text3}</h2>
                    <Button
                        $btColor={btColor}
                        $hbtColor={hbtColor}
                        $fbtColor={fbtColor}
                        onClick={btonClick}
                    >
                        {btimage && <img src={btimage} alt="boton" />}
                        {textbutton}
                    </Button>

                    <Button2
                        $btColor={bt2Color}
                        $hbtColor={hbt2Color}
                        $fbtColor={fb2tColor}
                        onClick={bt2onClick}
                        $bt2display={bt2display}
                    >
                        {btimage2 && <img src={btimage2} alt="boton" />}
                        {textbutton2}
                    </Button2>
                </SectionD>
            </SectionB>
        </MainSection>
    );
};

export default Tour2;