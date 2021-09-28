import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    .border {
        width: 100%;
        height: 70%;
        border: 20rem solid rgba(87, 87, 87, 0.34);
        box-sizing: initial;

        display: flex;
    }

    .todaysWeather {
        flex-basis: 60%;
        padding: 3.5rem 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .dateContainer {
            margin-bottom: 10px;
        }
        .weatherType {
            font-size: 1.9rem;
        }

        .temperature {
            font-size: 7rem;
            color: white;
        }
        .city {
            color: white;
        }
    }
    .futureWeather {
        flex-grow: 1;
        background-color: rgba(255, 255, 8255, 0.7);
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .dayContainer {
            .imgAndWeather {
                display: flex;
                align-items: center;
                
                img{
                    width: 40px;
                    position: absolute;
                }

                span {
                    margin-left: 2.8rem;
                }
            }

            .tempAndDate {
                display: flex;
                align-items: center;

                .temp {
                    font-size: 2rem;
                    margin: 0 2.8rem;
                }

            }       
        }
        
    }
        
`