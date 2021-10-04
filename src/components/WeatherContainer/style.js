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
    
    @media (max-width: 720px){
        align-items: flex-start;

            .border {
                border: 0;
                flex-wrap: wrap;
                height: 100%;
            }
        }
`