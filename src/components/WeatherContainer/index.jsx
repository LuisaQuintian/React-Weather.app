import sunnyImg from "../../assets/sunny.png"

import { Overlay } from "./style";

export function WeatherContainer() {
    return (
        <Overlay>
            <div className="border">
                <div className="todaysWeather">
                    <div>
                        <div className="dateContainer">
                            <p>Domingo</p>
                            <p>26 February 2021</p>
                        </div>
                        <span className="weatherType">Mostly  cloudy</span>
                    </div>
                    <div className="temperatureContainer">
                        <h1 className="temperature">10ºC</h1>
                        <span className="city">Munnar, Kerala</span>
                    </div>
                </div>
                <div className="futureWeather">
                    <div className="dayContainer">
                        <div className="imgAndWeather">
                            <img src={sunnyImg} alt="sun"/>
                            <span>Sunny</span>
                        </div>
                        <div className="tempAndDate">
                            <p className="temp">12ºC</p>
                            <p>27.09.2021</p>
                        </div>
                    </div>
                    <div className="dayContainer">
                        <div className="imgAndWeather">
                            <img src={sunnyImg} alt="sun"/>
                            <span>Sunny</span>
                        </div>
                        <div className="tempAndDate">
                            <p className="temp">12ºC</p>
                            <p>27.09.2021</p>
                        </div>
                    </div>
                    <div className="dayContainer">
                        <div className="imgAndWeather">
                            <img src={sunnyImg} alt="sun"/>
                            <span>Sunny</span>
                        </div>
                        <div className="tempAndDate">
                            <p className="temp">12ºC</p>
                            <p>27.09.2021</p>
                        </div>
                    </div>
                    <div className="dayContainer">
                        <div className="imgAndWeather">
                            <img src={sunnyImg} alt="sun"/>
                            <span>Sunny</span>
                        </div>
                        <div className="tempAndDate">
                            <p className="temp">12ºC</p>
                            <p className="date">27.09.2021</p>
                        </div>
                    </div>
                    <div className="dayContainer">
                        <div className="imgAndWeather">
                            <img src={sunnyImg} alt="sun"/>
                            <span>Sunny</span>
                        </div>
                        <div className="tempAndDate">
                            <p className="temp">12ºC</p>
                            <p>27.09.2021</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Overlay>
    )
}