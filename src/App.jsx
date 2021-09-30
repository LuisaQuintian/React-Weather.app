import { useEffect, useState } from "react";
import { Background } from "./components/Background";
import { WeatherContainer } from "./components/WeatherContainer";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global"


export function App() {
  const [forecast, setForecast] = useState([])
  const [weatherNow, setWeatherNow] = useState([])

  useEffect(() => {
    api.get(`/forecast?q=pelotas&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    .then(res => setForecast(res.data.list))

    api.get(`/weather?q=pelotas&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    .then(res => setWeatherNow(res.data))
  }, [])

  console.log('forecast:', forecast)
  console.log('weather:', weatherNow)

  return (
    <Background>
      <WeatherContainer forecast={forecast} weatherNow={weatherNow} />
      <GlobalStyle />
    </Background>
    

  )
}