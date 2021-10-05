import { useForecast } from "../../hooks/useForecast"
import { FutureWeather } from "../FutureWeather"
import { TodaysWeather } from "../TodaysWeather"

import { Overlay } from "./style"

export function WeatherContainer() {
    const { errorMessage } = useForecast()

    console.log('error:', errorMessage)
    return (
        <>
        {errorMessage ? (<h1>{errorMessage}</h1>) :
        <Overlay>
            <div className="border">
                <TodaysWeather />
                <FutureWeather />
            </div>
        </Overlay>
    }
    </>
    )
}