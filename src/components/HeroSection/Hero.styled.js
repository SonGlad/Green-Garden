import styled from "styled-components";


export const HeroStyled = styled.div`
    height: 100dvh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
    
    
    @media screen and (min-width: 1280px){
        align-items: flex-start;
    }

    .content-cont{
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
        opacity: 0;
        transform: scale(0);
        transition: transform 1s ease,
                        opacity 1s ease;

        @media screen and (min-width: 780px){
            font-size: 56px;
        }

        @media screen and (min-width: 1280px){
            text-align: ${p => p.$hebrew ? "right" : "left"};
            font-size: 64px;
            transform: translateX(${p => p.$hebrew ? "50%" : "-50%"});
            opacity: 0;
            transition: transform 1s ease,
                        opacity 1s ease;
        }
    }

    .activ-title{
        opacity: 1;
        transform: scale(1);


        @media screen and (min-width: 1280px){
            transform: translateX(0%);
            opacity: 1;
        }
    }


    .sub-title{
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        opacity: 0;
        transform: scale(0);
        transition: transform 1s ease,
                    opacity 1s ease;

        @media screen and (min-width: 780px){
            font-size: 28px;
        }

        @media screen and (min-width: 1280px){
            font-size: 54px;
            text-align: ${p => p.$hebrew ? "right" : "left"};
            transform: translateX(${p => p.$hebrew ? "50%" : "-50%"});
            opacity: 0;
            transition: transform 1s ease,
                        opacity 1s ease;
        }
    }

    .active-sub-title{
        opacity: 1;
        transform: scale(1);


        @media screen and (min-width: 1280px){
            transform: translateX(0%);
            opacity: 1;
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
        opacity: 0;
        transform: scale(0);
        transition: color ${p => p.theme.transition.main_transition},
                    background-color ${p => p.theme.transition.main_transition},
                    outline ${p => p.theme.transition.main_transition},
                    transform 1s ease,
                    opacity 1s ease;

        @media screen and (min-width: 768px){
            text-align: center;
            text-decoration: none;
        }

        @media screen and (min-width: 1280px){
            line-height: 22px;
            font-weight: 500;
            padding: 12px 90px;
            border-radius: 30px;
            transform: translateX(${p => p.$hebrew ? "50%" : "-50%"});
        }  

        &:hover{
            background-color: ${(props) => props.theme.color.hover_color};
            border: 1px solid ${(p) => p.theme.color.hover_color};  
        }
    }

    .active-hero-link{
        opacity: 1;
        transform: scale(1);


        @media screen and (min-width: 1280px){
            transform: translateX(0%);
            opacity: 1;
        }
    }

`