import { ReactNode } from "react";
import { useForecast } from "../../hooks/useForecast";
import { Container } from "./style";

interface BackgroundProps {
    children: ReactNode
}

export function Background({children}: BackgroundProps) {
    const { weatherNow } = useForecast()
    const currentWeather = weatherNow?.weather?.[0]?.main

    console.log('currentWeather', currentWeather)
    return (
        <Container weatherImage={currentWeather} >
            {children}
        </Container>
    )
}