import sunnyImg from "../../assets/sunny.png"
import { TodaysWeather } from "../TodaysWeather";

import { Overlay } from "./style";

export function WeatherContainer() {
    return (
        <Overlay>
            <div className="border">
                <TodaysWeather />
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