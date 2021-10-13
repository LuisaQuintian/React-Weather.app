import { useForecast } from "../../hooks/useForecast"
import { FutureWeather } from "../FutureWeather"
import { TodaysWeather } from "../TodaysWeather"
import { ErrorMessage } from "../ErrorMessage"

import { Overlay } from "./style"

export function WeatherContainer() {
    const { errorMessage } = useForecast()

    console.log('error:', errorMessage)
    return (
        <>
        {errorMessage ? (<ErrorMessage />) :
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