import styled from "styled-components";
import LogoPng from "../../images/images/Logo.png";



export const StyledServiceSectionTitle = styled.div`
    background: linear-gradient(to bottom, #FCFFF9 0%, #FCFFF9 50%, rgba(0, 0, 0, 0) 100%);
    padding: 60px 10px 90px 10px; 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
    position: relative;
    margin: 0 auto;



    @media screen and (min-width: 768px){
        padding: 90px 27px;
    }

    @media screen and (min-width: 1280px){
        padding: 90px 34px 120px 34px;
        background: linear-gradient(to bottom, #FCFFF9 0%, #FCFFF9 45%, rgba(0, 0, 0, 0) 100%);
    }

    & .service-section-title{
        color: ${p => p.theme.color.text_color2};
        font-weight: 500;
        font-size: 48px;
        transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
        position: relative;
        z-index: 6;
    }

    & .span-before{
        position: relative;
        width: 100%;

        @media screen and (min-width: 1280px){
            max-width: 182px;
        }
        
        &::before{
            position: absolute;
            left: 0;
            content: '';
            background-color: ${p => p.theme.color.text_color2};
            width: 100%;
            height: 1px;
            z-index: 6;
        }
    }

    & .span-after{
        position: relative;
        width: 100%;

        &::after{
            position: absolute;
            left: 0;
            content: '';
            background-color: ${p => p.theme.color.text_color2};
            width: 100%;
            height: 1px;
            z-index: 6;
        }
    }
    
    
        
    .left-skew{
        outline: none;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        transform: skewY(10deg);
        background: linear-gradient(to left, rgba(0, 0, 0, 0) 50%, #FCFFF9 50%);
        z-index: 5;

        @media screen and (min-width: 768px){
            height: 105px;  
        }

        @media screen and (min-width: 1140px){
            transform: skewY(7deg);
        }

        @media screen and (min-width: 1920px){
            height: 125px;
        }
    }

    .right-skew{
        outline: none;
        border: none;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 70px;
        background: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, #FCFFF9 50%);
        transform: skewY(-10deg);
        z-index: 5;

        @media screen and (min-width: 768px){
            height: 105px;  
        }

        @media screen and (min-width: 1140px){
            transform: skewY(-7deg);
        }

        @media screen and (min-width: 1920px){
            height: 125px;
        }
    }

    .service-logo{
        position: absolute;
        top: 0%;
        left: 50%;
        width: 195px;
        height: 135px;
        z-index: 4;
        left: 50%;
        transform: translate(-53%, -90%);
        background-image: url(${LogoPng});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

`