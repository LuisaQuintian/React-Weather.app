import sunImg from "../../assets/sun.svg"
import rainImg from "../../assets/rain.svg"
import cloudImg from "../../assets/cloud.svg"
import snowImg from "../../assets/snow.svg"
import thunderImg from "../../assets/thunder.svg"
import { Container } from "./style";
import { useForecast } from "../../hooks/useForecast"

export function FutureWeather() { 
    const { futureWeatherList } = useForecast()
    
    function weatherImg(weatherDescription) {
        let Img
        switch (weatherDescription) {
            case 'Clear':
                Img = sunImg;
                break;
            case 'Clouds':
                Img = cloudImg;
                break;
            case 'Rain':
                Img = rainImg;
                break;
            case 'Snow':
                Img = snowImg;
                break;
            case 'Thunderstorm':
                Img = thunderImg;
                break;
            default:
                return sunImg
        }
        return Img
    }

    function formatedDate(fullDate) {
        return fullDate.split(" ")[0].split('-').reverse().join('.')
    }
    
    return (
        <Container>
            {!futureWeatherList ? 'loading weather list...': (
                futureWeatherList.map(weather => (
                    <div className="dayContainer" key={weather.dt}>
                        <div className="imgAndWeather">
                            <img src={weatherImg(weather.weather[0].main)} alt="sun"/>
                            <span>{weather.weather[0].main}</span>
                        </div>
                        <div className="tempAndDate">
                            <p className="temp">{Math.round(weather.main.temp)}°C</p>
                            <p>{formatedDate(weather.dt_txt)}</p>
                        </div>
                    </div>
                ))
            )}
        </Container>
    )
}