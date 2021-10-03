import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

const ForecastContext = createContext({})

export const ForecastProvider = ({children}) => {
    const TODAY = new Date().toISOString().split('T')[0]

    const [forecast, setForecast] = useState([])
    const [weatherNow, setWeatherNow] = useState([])
    const [futureWeatherList, setFutureWeatherList] = useState([])

    const[userLocation, setUserLocation] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setUserLocation({
                lon: position.coords.longitude,
                lat: position.coords.latitude
            })
        })
    }, [])


    useEffect(() => {
        if(!userLocation.lat) { return }
        
        api.get(`/forecast?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(res => setForecast(res.data.list))
    
        api.get(`/weather?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(res => setWeatherNow(res.data))
      }, [userLocation])

      useEffect(()=> {
        const weatherList = forecast?.filter((item) => {
            if(item.dt_txt.includes('15:00:00') && !item.dt_txt.includes(TODAY)){ return item }
            return '' //sem essa linha tava dando bug, mas n sei se colocar ela n da ruim
        })
        setFutureWeatherList(weatherList)
        
    }, [forecast, TODAY])

      return (
          <ForecastContext.Provider value={{forecast, weatherNow, futureWeatherList}}>
              {children}
          </ForecastContext.Provider>
      )
}

export function useForecast() {
    const context = useContext(ForecastContext)

    return context
}