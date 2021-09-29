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

    .futureWeather {
        flex-grow: 1;
        background-color: rgba(255, 255, 8255, 0.7);
        padding: 0 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .dayContainer {
            border-bottom: 2px solid #777b7f30;

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
                justify-content: space-between;

                .temp {
                    font-size: 2rem;
                    margin: 0 2.8rem;
                }

                .date {
                    
                }

            }       
        }
        
    }
        
`