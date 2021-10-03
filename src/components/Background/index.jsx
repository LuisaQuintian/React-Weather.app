import { useForecast } from "../../hooks/useForecast";
import { Container } from "./style";


export function Background({children}) {
    const { weatherNow } = useForecast()
    const currentWeather = weatherNow?.weather?.[0]?.main

    console.log('currentWeather', currentWeather)
    return (
        <Container weatherImage={currentWeather} >
            {children}
        </Container>
    )
}