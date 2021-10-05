import { useForecast } from "../../hooks/useForecast";
import { Container } from "./style";


export function TodaysWeather() {
    const { weatherNow } = useForecast()

    const GET_WEEK_DAY = new Date().getDay()
    const WEEK_DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    const GET_MONTH = new Date().getMonth()
    const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const GET_YEAR = new Date().getFullYear()
    const GET_DAY = new Date().getDate()

    const weatherMain = weatherNow?.weather?.[0].main
    const fontColor = (weatherMain === 'Clear' || weatherMain === 'Clouds')

    console.log('isWorking:', fontColor)
    
    return (
        <Container fontColor={fontColor}>
            <div>
                <div className="dateContainer">
                    <p>{WEEK_DAY[GET_WEEK_DAY]}</p>
                    <p>{GET_DAY} {MONTH[GET_MONTH]} {GET_YEAR}</p>
                </div>
                <span className="weatherType">{weatherMain}</span>
            </div>
            <div className="temperatureContainer">
                <h1 className="temperature">{Math.round(weatherNow?.main?.temp)}ºC</h1>
                <span className="city">{weatherNow?.name}</span>
            </div>
        </Container>
    )
}