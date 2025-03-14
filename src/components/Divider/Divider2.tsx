import styled from "styled-components"
import Card1 from "../Card1/Card1"


const MainContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%; 
    

    @media (max-width: 725px) {
        flex-direction: column; /* En pantallas pequeñas, pone los componentes uno debajo del otro */
    }
`

const CardScrollContainer = styled.div`
    flex: 1; /* Hace que cada componente ocupe el 50% del espacio */
    max-width: 50%; /* Establece que el ancho máximo de cada uno sea la mitad de la pantalla */
    box-sizing: border-box; /* Incluye el padding y el borde en el cálculo del ancho */

    @media (max-width: 812px) {
        max-width: 95%; /* En pantallas pequeñas, ocupa el 100% del ancho */
    }
`

const Divider1 = () => {
    return (
        <MainContainer>
            <CardScrollContainer>
                <Card1
                    title="PRIVATE TOUR"
                    parraf="You could explore new places on your own, but you'd miss a lot! Take a private tour
                     with me and learn how much you can add to your travel experience by exploring with a professional tour guide."
                    image="/image/web.png"
                />
            </CardScrollContainer>
            
            <CardScrollContainer>
            <Card1
                    title="GROUP TOUR"
                    parraf="If you're looking to explore something truly unique,but your group or family is 
                    very large, take my group tour. You will discover hidden gems, hear amazing stories and feel like 
                    a resident. Just sign up and let me take care of all the details."
                    image="/image/correo.png"
                />
            </CardScrollContainer>
            
            <CardScrollContainer>
            <Card1
                    title="PRIVATE FOR COUPLES "
                    parraf="If your idea of a perfect vacation is to move quickly to be able to take advantage of the time
                     , then look no further and choose  my PRIVATE FOR COUPLES. I'll take care of all the details, just come and have fun!"
                    image="/image/hostin.png"
                />
            </CardScrollContainer>
            <CardScrollContainer>
            <Card1
                    title="CAR DRIVER AND GUIDE"
                    parraf="You could explore new places on your own, but the driver wouldn't enjoy it and would miss a lot
                     of things! Take advantage of our Professional Tourism Drivers services Remember that we can help with 
                     the rental process in different franchises , we wait for you at the airport with your approved vehicle ."
                    image="/image/rediseno.png"
                />
            </CardScrollContainer>
            <CardScrollContainer>
            <Card1
                    title="FULLDRIVER"
                    parraf="Your need to move around as you please in the own schedule is our reason for being and that is why we 
                    customize your excursions according to your needs, supported by our expert, We are from guanacaste and we want 
                    to show you the true Costa Rican culture."
                    image="/image/api.png"
                />
            </CardScrollContainer>
            <CardScrollContainer>
            <Card1
                    title="ENDLESS POSSIBILITIES"
                    parraf="If you're interested in improving your next trip with an exciting and engaging tour, look no further.
                     Check out my current tours and feel free to contact any questions I have about what I offer."
                    image="/image/mant.png"
                />
            </CardScrollContainer>
            
        </MainContainer>
    )
}

export default Divider1
