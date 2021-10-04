import styled from "styled-components";

export const Container = styled.div`
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
                    @media (max-width: 720px) {
                        margin-left: 4rem;
                    }
                }   
            }

            .tempAndDate {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .temp {
                    font-size: 2rem;
                    margin: 0 2.8rem;
                    @media (max-width: 720px) {
                        margin: 0 4rem;
                    }
                }
            }       
        }
`