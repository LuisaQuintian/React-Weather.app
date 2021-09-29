// const api = {
//   key: "d4bde0cb140aeb4503626fa8d9e4ffcb",
//   url: "https://api.openweathermap.org/data/2.5"
// }

import { useEffect, useState } from "react";
import { Background } from "./components/Background";
import { WeatherContainer } from "./components/WeatherContainer";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global"


export function App() {
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    api.get()
    .then(res => setForecast(res.data.list))
  }, [])

  console.log('forecast:', forecast)

  return (
    <Background>
      <WeatherContainer forecast={forecast} />
      <GlobalStyle />
    </Background>
    

  )
}