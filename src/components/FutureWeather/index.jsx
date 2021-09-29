import sunnyImg from "../../assets/sunny.png"
import { Container } from "./style";

export function FutureWeather() {
    return (
        <Container>
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
        </Container>
    )
}