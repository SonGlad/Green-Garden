import styled from "styled-components";
// import HeroBackgroundImage from '../../images/images/Subtract.png';
import FogBackgroundImage from '../../images/images/fog.png';
import HeroBackgroundImage from '../../images/images/background.jpg';




export const HeroStyled = styled.div`
    min-height: calc(100dvh - 88px);
    position: absolute;
    z-index: 1;
    overflow: hidden;
    background: url(${HeroBackgroundImage});
    /* transform: rotate(180deg); */
    /* background-image: 
        linear-gradient(to right, #000000 0%, #142515 80%),
        linear-gradient(to top right, #142515 0%, #142515 100%),
        url(${HeroBackgroundImage}); */
    /* background-image: url(${HeroBackgroundImage}); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    left: 0;
    /* border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px; */
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    inset: 0;
    transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
    position: fixed;
    z-index: 10;
    
    
    @media screen and (min-width: 1280px){
        min-height: calc(100vh - 96px); 
        align-items: flex-start;
    }

    .fog-div {
        width: 100%;
        min-height: calc(100dvh);
        position: absolute;
        top: 0;
        left: 0;
        background: 
        linear-gradient(15deg, rgba(20, 37, 21, 0) 0%, #142515 97.5%), 
        linear-gradient(271deg, rgba(0, 0, 0, 0) 0%, #142515 80.45%);
        pointer-events: none;
        /* background-image: url(${FogBackgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
        z-index: 2;
        overflow: hidden;


        @media screen and (min-width: 1280px){
            height: calc(100vh - 96px);  
        }

        -webkit-mask-image: 
            linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
            linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
        -webkit-mask-composite: intersect;

        mask-image: 
            linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
            linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
        mask-composite: intersect;
        animation: fogRise 15s linear infinite; */

    }

    /* @keyframes fogRise {
        0% {
            transform: translateY(100%);
            opacity: 1;
        }
        50% {
            transform: translateY(50%);
            opacity: 1;
        }
        100% {
            transform: translateY(0%);
            opacity: 0;
        }
    } */


    .content-cont{
        /* backdrop-filter: blur(4px);
        background-color: #e7ffcb3b; */
        border-radius: 30px;
        padding: 43px 24px;
        width: 95%;
        transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});

        @media screen and (min-width: 780px){
            margin-left: auto;
            margin-right: auto;
            max-width: 70%;
        }
        
        @media screen and (min-width: 1280px){
            width: auto;
            max-width: none;
            min-width: 670px;
            margin-left: 140px;
            margin-right: 0;
            inset: 0;
        }
    }

    .title{
        text-align: center;
        font-weight: 600;
        font-size: 48px;
        margin-bottom: 20px;

        @media screen and (min-width: 780px){
            font-size: 56px;
        }

        @media screen and (min-width: 1280px){
            text-align: ${p => p.$hebrew ? "right" : "left"};
            font-size: 64px;
        }
    }

    .sub-title{
        font-weight: 400;
        font-size: 20px;
        text-align: center;

        @media screen and (min-width: 780px){
            font-size: 28px;
        }

        @media screen and (min-width: 1280px){
            font-size: 32px;
            text-align: ${p => p.$hebrew ? "right" : "left"};
        }
    }

    .contact-link-cont{
        margin-top: 40px;
        text-align: center;
        width: 50%;
        transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});

        @media screen and (min-width: 768px){
            max-width: 50%;
        }


        @media screen and (min-width: 1280px){
            max-width: none;
            margin-top: 24px;
            margin-left: 140px;
            margin-right: 0;
            margin-bottom: 0;
            width: fit-content;
        }
    }
    
    .hero-contact-link{
        width: 100%;
        display: block;
        padding: 15px;
        border-radius: 10px;
        border: 1px solid ${(p) => p.theme.color.logo_green_color};
        color: ${(p) => p.theme.color.text_color2};
        background-color: ${(p) => p.theme.color.body_bg_color};
        font-weight: 500;
        font-size: 20px;
        line-height: 14px;
        transition: color ${p => p.theme.transition.main_transition},
                    background-color ${p => p.theme.transition.main_transition},
                    outline ${p => p.theme.transition.main_transition};

        @media screen and (min-width: 768px){
            text-align: center;
            text-decoration: none;
        }

        @media screen and (min-width: 1280px){
            line-height: 22px;
            font-weight: 500;
            padding: 12px 90px;
            border-radius: 30px;
        }  

        &:hover{
            background-color: ${(props) => props.theme.color.hover_color};
            border: 1px solid ${(p) => p.theme.color.hover_color};  
        }
    }

`