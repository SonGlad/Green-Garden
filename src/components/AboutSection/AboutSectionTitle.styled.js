import styled from "styled-components";


export const AboutSectionTitleStyled = styled.div`
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, #FCFFF9 45%, #FCFFF9 55%, rgba(0, 0, 0, 0) 100%);
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
        padding: 60px 34px;
    }

    & .about-section-title{
        color: ${p => p.theme.color.text_color2};
        font-weight: 500;
        font-size: 36px;
        white-space: nowrap;
        flex-shrink: 0;
        transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});

        @media screen and (min-width: 768px){
            font-size: 48px;
        }
    }

    & .span-before{
        position: relative;
        width: 100%;

        @media screen and (min-width: 1280px){
            max-width: 333px;
        }
        
        &::before{
            position: absolute;
            left: 0;
            content: '';
            background-color: ${p => p.theme.color.text_color2};
            width: 100%;
            height: 1px;
            z-index: 1;
        }
    }

    .span-after{
        position: relative;
        width: 100%;

        &::before{
            position: absolute;
            left: 0;
            content: '';
            background-color: ${p => p.theme.color.text_color2};
            width: 100%;
            height: 1px;
            z-index: 1;
        }
    } 
`