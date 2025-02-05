import styled from "styled-components";


export const NavLinksStyled = styled.nav`
    font-size: 24px;
    line-height: 56px;
    color: ${(p) => p.theme.color.text_color1};
    padding: 30px 0 30px 0;
    border-bottom: 1px solid ${(p) => p.theme.color.text_color1};

    @media screen and (min-width: 768px){
        padding: 0;
        border-bottom: none;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        gap: 10px;
        min-width: 400px;
    }

    @media screen and (min-width: 1280px){
        flex-direction: ${p => p.$hebrew ? "row-reverse" : "row"};
        gap: 48px;
    }


    & .navigation-list{
        width: 100%;
        @media screen and (min-width: 768px){
            width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 40px;
            flex-direction: ${p => p.$hebrew ? "row-reverse" : "row"};
        }

        @media screen and (min-width: 1280px){
            gap: 24px;
            width: fit-content;
            justify-content: ${p => p.$hebrew ? "flex-start" : "flex-end"};
            font-weight: 400;
            font-size: 24px;
            ${p => (p.$hebrew ? "margin-right: auto;" : "margin-left: auto;")};
        }

        & .navigation-item{
            width: 100%;
            text-align: center;
            transition: color ${p => p.theme.transition.main_transition};
            position: relative;


            @media screen and (min-width: 768px){
                width: auto;
            }

            
            &:hover{
                color: ${(p) => p.theme.color.hover_color};
            }

            
            &:after{
                position: absolute;
                left: 0;
                content: '';
                width: 100%;
                height: 2px;
                bottom: -2px;
                background-color: ${p => p.theme.color.hover_color};
                transform-origin: ${p => p.$hebrew ? "left" : "right"};
                transform: scaleX(0);
                transition: transform ${p => p.theme.transition.main_transition}; 
            }

            &:focus::after,
            &:hover::after {
                transform-origin: ${p => p.$hebrew ? "right" : "left"};
                transform: scaleX(1);
            }

            & .nav-link{
                cursor: pointer;
            }
        }
    }

    .adress{
        @media screen and (max-width: 767px){
            display: none;
        }
        width: 100%;
        font-style: normal;

        @media screen and (min-width: 1280px){
            width: fit-content;
        }

        .adress-list{
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: ${p => p.$hebrew ? "row-reverse" : "row"};

            
            @media screen and (min-width: 1280px){
                justify-content: flex-end;
                gap: 32px;
            }
        }

        .adress-item{

            @media screen and (max-with: 1279px){
                width: 45%;   
            }
        }

        .tel-link{
            display: block;
            width: 100%;
            text-align: center;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            border-radius: 20px;
            padding: 5px 10px;
            outline: 1px solid ${(p) => p.theme.color.text_color1};
            outline-offset: -1px;
            color: ${(p) => p.theme.color.body_bg_color};
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: ${p => p.$hebrew ? 'row-reverse' : 'row'};
            gap: 8px;
            transition: color ${p => p.theme.transition.main_transition},
                    outline ${p => p.theme.transition.main_transition};

            & .phone-icon{
                width: 12px;
                height: 12px;
                fill: ${(p) => p.theme.color.body_bg_color};
                rotate: 25deg;
                transition: fill ${p => p.theme.transition.main_transition};
            }

            @media screen and (min-width: 1280px){
                padding: 10px 15px;
                line-height: 24px;
                font-size: 20px;
                border-radius: 30px;
                width: fit-content;


                & .phone-icon{
                    width: 16px;
                    height: 16px;
                }
            }

            &:hover{
                color: ${(p) => p.theme.color.hover_color};
                outline: 1px solid ${(p) => p.theme.color.hover_color};
                
                .phone-icon{
                    fill: ${(p) => p.theme.color.hover_color};
                }
            }
        }
    }

`