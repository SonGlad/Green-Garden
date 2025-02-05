import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
   
    html,
    body {
        height: 100%;
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        letter-spacing: 0;
        color: ${(props) => props.theme.color.text_color1};
        background-color: ${(props) => props.theme.color.body_bg_color};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body.no-scroll {
        overflow: hidden;
    }
    

    a {
        text-decoration: none;
        color: inherit;
    }

    ul,
    ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6, 
    p {
        margin: 0;
    }

    *{
        box-sizing: border-box;
    }

    button {
        padding: 0;
        margin: 0;
        border: none;
        outline: none;
        cursor: pointer;
    }
`;
