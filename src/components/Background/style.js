import sunImg from "../../assets/sunny-background.jpg"
import cloudImg from "../../assets/cloudy-background.jpg"
import rainImg from "../../assets/rainy-background.jpg"
import snowImg from "../../assets/snowy-background.jpg"
import thunderImg from "../../assets/thunderstorm-background.jpg"
import styled from "styled-components";

const backgroundImg = {
    Clear: sunImg,
    Clouds: cloudImg,
    Rain: rainImg,
    Snow: snowImg,
    Thunderstorm: thunderImg
}

export const Container = styled.main`
    background-image: ${({weatherImage}) => `url(${backgroundImg[weatherImage]})`};
    color: ${({weatherImage}) => weatherImage};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
`