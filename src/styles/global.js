import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle ` //esse createGlobalStyle é uma função do styled components q cria um estilo global para a aplicação
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body, input, textarea, button { //esses três últimos n importam a fonte do html por padrão, então precisa definir
        font-family: 'PT Sans', sans-serif;
    }
    button {
        cursor: pointer;
    }
`