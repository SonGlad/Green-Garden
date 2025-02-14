import styled from "styled-components";
import HeroBackgroundImage from '../../images/images/background.jpg';


export const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: url(${HeroBackgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    min-height: calc(100dvh - 88px);
    margin-top: 88px;
    transform: scaleX(${p => (p.$hebrew ? "1" : "-1")});


    @media screen and (min-width: 1280px){
        min-height: calc(100vh - 96px); 
        margin-top: 96px;
    }


    
    .canvas-cont{
        @media screen and (max-width: 1279px){
            display: none;
        }

        width: 100%;
        height: 100%;
        position: absolute;
        background-color: transparent;
        top: 0;
        left: 0;
        z-index: 2;
        animation: rise 3s linear;

        @keyframes rise {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }


    .gradient-cont{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        background: 
            linear-gradient(15deg, rgba(20, 37, 21, 0) 0%, #142515 97.5%), 
            linear-gradient(271deg, rgba(0, 0, 0, 0) 0%, #142515 80.45%);
        pointer-events: none;
        transform: scaleX(-1);
    }
`