import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }
    
    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    
    a {
        text-decoration: none;
        
        &:visited {
            text-decoration: none;
        }
    }

`;
