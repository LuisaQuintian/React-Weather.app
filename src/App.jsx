// const api = {
//   key: "d4bde0cb140aeb4503626fa8d9e4ffcb",
//   url: "https://api.openweathermap.org/data/2.5"
// }

import { Background } from "./components/Background";
import { WeatherContainer } from "./components/WeatherContainer";
import { GlobalStyle } from "./styles/global"


export function App() {
  return (
    <Background>
      <WeatherContainer />
      <GlobalStyle />
    </Background>
    
  )
}