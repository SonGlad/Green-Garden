import styled from "styled-components";
import LogoPng from "../images/images/Logo.png";




export const StyledApp = styled.main`
    background-color: ${p => p.theme.color.body_bg_color};
    position: relative;
    z-index: 15;
    background-color: transparent;

    
    .left-skew{
        outline: none;
        border: none;
        position: absolute;
        top: -0.5%;
        left: 0;
        width: 50%;
        height: 70px;
        transform: skewY(10deg);
        background-color: ${p => p.theme.color.body_bg_color};
        z-index: 35;

        @media screen and (min-width: 768px){
            top: -1.5%;
            height: 105px;  
        }

        @media screen and (min-width: 1140px){
            top: -1.2%;
            transform: skewY(7deg);
        }

        @media screen and (min-width: 1920px){
            top: -1.35%;
            height: 125px;
        }
    }

    .right-skew{
        outline: none;
        border: none;
        position: absolute;
        top: -0.5%;
        right: 0;
        width: 50%;
        height: 70px;
        background-color: ${p => p.theme.color.body_bg_color};
        transform: skewY(-10deg);
        z-index: 35;

        @media screen and (min-width: 768px){
            top: -1.5%;
            height: 105px;  
        }

        @media screen and (min-width: 1140px){
            top: -1.2%;
            transform: skewY(-7deg);
        }

        @media screen and (min-width: 1920px){
            top: -1.35%;
            height: 125px;
        }
    }

    .service-logo{
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 35px;
        z-index: 34;
        left: 50%;
        transform: translate(-52%, -125%);
        background-image: url(${LogoPng});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        @media screen and (min-width: 768px){
            transform: translate(-52%, -135%);
        }

        @media screen and (min-width: 1140px){
            transform: translate(-52%, -115%);
        }

        @media screen and (min-width: 1920px){
            transform: translate(-52%, -95%);
        }
    }
`