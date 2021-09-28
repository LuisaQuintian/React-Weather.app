import { Overlay } from "./style";

export function WeatherContainer() {
    return (
        <Overlay>
            <div className="border">
                <div className="todaysWeather">
                    <div>
                        <p>Domingo</p>
                        <p>26 February 2021</p>
                        <p>Mostly  cloudy</p>
                    </div>
                    <div>
                        <p>10ºC</p>
                        <span>Munnar, Kerala</span>
                    </div>
                </div>
                <div className="futureWeather">
                    <p>teste</p>
                </div>
            </div>
        </Overlay>
    )
}