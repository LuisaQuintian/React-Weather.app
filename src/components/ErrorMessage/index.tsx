import { Container } from "./styles";
import locationIcon from "../../assets/location-icon.svg"

export function ErrorMessage() {
    return (
        <Container>
            <div className="errorModal">
                <img src={locationIcon} alt="location symbol" />
                <h1>Oops...</h1>
                <p>This app requires your location to work properly.</p>
                <p>Este aplicativo requer sua locatização para funcionar corretamente.</p>
                <button>Allow location Permitir localização</button>
            </div>
        </Container>
    )
}
