import { FutureWeather } from "../FutureWeather"
import { TodaysWeather } from "../TodaysWeather"

import { Overlay } from "./style"

export function WeatherContainer() {

    return (
        <Overlay>
            <div className="border">
                <TodaysWeather />
                <FutureWeather />
            </div>
        </Overlay>
    )
}