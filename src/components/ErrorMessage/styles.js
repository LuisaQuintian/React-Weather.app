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

        width: 60rem;
        height: 30rem;
        background-color: white;
        padding: 3rem;
        border-radius: 1.5rem;

        h1 {
            margin-bottom: 35px;
            font-size: 3rem;
        }

        p {
            font-size: 1.5rem;
            margin: 5px;
        }

        button {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            margin-top: 20px;
            padding: 10px 25px;
            border-radius: 0.5rem;
            border: none;

            background-color: #EB5777;
            color: white;
        }
    }

`