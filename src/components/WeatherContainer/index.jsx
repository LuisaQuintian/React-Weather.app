import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { FutureWeather } from "../FutureWeather"
import { TodaysWeather } from "../TodaysWeather"

import { Overlay } from "./style"

export function WeatherContainer({ forecast }) {
    const [futureWeatherList, setFutureWeatherList] = useState([])
    const TODAY = new Date().toISOString().split('T')[0]

    useEffect(()=> {
        const weatherList = forecast?.filter((item) => {
            if(item.dt_txt.includes('15:00:00') && !item.dt_txt.includes(TODAY)){ return item }
            return '' //sem essa linha tava dando bug, mas n sei se colocar ela n da ruim
        })
        setFutureWeatherList(weatherList)
        
    }, [forecast, TODAY])

    console.log('futureWeatherList: ', futureWeatherList)

    return (
        <Overlay>
            <div className="border">
                <TodaysWeather />
                <FutureWeather futureWeatherList={futureWeatherList} />
            </div>
        </Overlay>
    )
}