import { Background } from "./components/Background";
import { WeatherContainer } from "./components/WeatherContainer";
import { ForecastProvider } from "./hooks/useForecast";
import { GlobalStyle } from "./styles/global"


export function App() {

  return (
    <ForecastProvider>
      <Background>
        <WeatherContainer />
        <GlobalStyle />
      </Background>
    </ForecastProvider>
    

  )
}