import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(180deg, rgba(255,255,255,0.6755077030812324) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 100%);
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
`