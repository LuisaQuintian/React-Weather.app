import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #4e5153;
    
    img {
        width: 5rem;
    }
    
    .errorModal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 80%;
        height: 70%;
        background-color: white;
        padding: 3rem;
        border-radius: 1.5rem;

        @media (max-width: 720px){
            height: 85%;
        }


        h1 {
            margin-bottom: 35px;
            font-size: 2.5rem;
            color: #EB5777;
        }

        p {
            font-size: 1.4rem;
            margin: 5px;
            text-align: center;
        }

        hr {
            width: 70%;
            height: 3px;
            margin: 15px;
            text-align: center;
            
            background-color: #EB5777;
            border: none;
            border-radius: 50px;
        }
    }

`