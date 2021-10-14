import { Container } from "./styles";
import locationIcon from "../../assets/location-icon.svg"


export function ErrorMessage() {
    return (
        <Container>
            <div className="errorModal">
                <img src={locationIcon} alt="location symbol" />
                <h1>Oops...</h1>
                <p>This app requires your location to work properly. Please go to your navigator settings and allow the acess to your location.</p>
                <hr />
                <p>Este aplicativo requer a sua locatização para funcionar corretamente. Por favor vá até as configurações do seu navegador e permita o uso da sua localização.</p>
                
            </div>
        </Container>
    )
}
