import styled from "styled-components";


export const ContactStyledButton = styled.a`
    border: none;
    outline: none;
    border-radius: 50%;
    position: fixed;
    z-index: 100;
    bottom: 5%;
    ${p => (p.$hebrew ? "left: 1rem;" : "right: 1rem;")}
    background-color: ${p => p.theme.color.text_color1};
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${p => p.theme.color.text_color2};
    -webkit-animation: bounce-in-fwd 1.5s both;
    animation: bounce-in-fwd 1.5s both;


    @media screen and (min-width: 768px){
        display: none;
    }


    & .whatsapp-icon{
        width: 30px;
        height: 30px;
        fill: ${p => p.theme.color.text_color2};
    }

    & .icon-animation{
        -webkit-animation: bounce-in-fwd 1.5s both;
        animation: bounce-in-fwd 1.5s both;
    }

    @-webkit-keyframes bounce-in-fwd {
        0% {
            -webkit-transform: scale(0);
                    transform: scale(0);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
            opacity: 0;
        }
        38% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
            opacity: 1;
        }
        55% {
            -webkit-transform: scale(0.7);
                    transform: scale(0.7);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        72% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        81% {
            -webkit-transform: scale(0.84);
                    transform: scale(0.84);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        89% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        95% {
            -webkit-transform: scale(0.95);
                    transform: scale(0.95);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
    }


    @keyframes bounce-in-fwd {
        0% {
            -webkit-transform: scale(0);
                    transform: scale(0);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
            opacity: 0;
        }
        38% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
            opacity: 1;
        }
        55% {
            -webkit-transform: scale(0.7);
                    transform: scale(0.7);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        72% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        81% {
            -webkit-transform: scale(0.84);
                    transform: scale(0.84);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        89% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        95% {
            -webkit-transform: scale(0.95);
                    transform: scale(0.95);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
    }
`