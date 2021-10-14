import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface ForecastProviderProps {
    children: ReactNode
}

interface UserLocation {
        lat?: number,
        lon?: number
}

interface Forecast {
    dt: number
      main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        sea_level: number
        grnd_level: number
        humidity: number
        temp_kf: number
      }
      weather: [
        {
          id: number
          main: string
          description: string
          icon: string
        }
      ]
      clouds: {
        all: number
      }
      wind: {
        speed: number
        deg: number
        gust: number
      }
      visibility: number
      pop: number
      sys: {
        pod: string
      }
      dt_txt: string
}

export interface Weather {
    coord: {
        lon: number
        lat: number
      }
      weather: [
        {
          id: number
          main: string
          description: string
          icon: string
        }
      ]
      base: string
      main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
      }
      visibility: number
      wind: {
        speed: number
        deg: number
        gust: number
      }
      clouds: {
        all: number
      }
      dt: number
      sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
      }
      timezone: number
      id: number
      name: string
      cod: number
}

interface ForecastContextData {
    weatherNow: Weather
    forecast: Forecast[]
    futureWeatherList: Forecast[]
    errorMessage: boolean
    getLocation: () => void
}

const ForecastContext = createContext<ForecastContextData>({} as ForecastContextData)

export const ForecastProvider = ({children}:ForecastProviderProps) => {
    const TODAY = new Date().toISOString().split('T')[0]

    const [forecast, setForecast] = useState<Forecast[]>([])
    const [weatherNow, setWeatherNow] = useState<Weather>({} as Weather)
    const [futureWeatherList, setFutureWeatherList] = useState<Forecast[]>([])

    const[userLocation, setUserLocation] = useState<UserLocation>({})
    
    const [errorMessage, setErrorMessage] = useState<boolean>(false)

    useEffect(() => {
        getLocation()
    }, [])

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation({
            lon: position.coords.longitude,
            lat: position.coords.latitude
        })
    })
    }


    useEffect(() => {
        if(!userLocation.lat) { 
          setErrorMessage(true)
          return
        }
        
        api.get(`/forecast?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(res => setForecast(res.data.list))
    
        api.get(`/weather?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(res => setWeatherNow(res.data))

        setErrorMessage(false)
      }, [userLocation])

      useEffect(()=> {
        const weatherList = forecast?.filter((item) => {
            if(item.dt_txt.includes('15:00:00') && !item.dt_txt.includes(TODAY)){ return item }
            return '' //sem essa linha tava dando bug, mas n sei se colocar ela n da ruim
        })
        setFutureWeatherList(weatherList)
        
    }, [forecast, TODAY])

      return (
          <ForecastContext.Provider value={{forecast, weatherNow, futureWeatherList, errorMessage, getLocation}}>
              {children}
          </ForecastContext.Provider>
      )
}

export function useForecast() {
    const context = useContext(ForecastContext)

    return context
}