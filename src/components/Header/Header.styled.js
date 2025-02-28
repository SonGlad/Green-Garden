import styled from "styled-components";


export const HeaderStyled = styled.header`
    position: fixed;
    z-index: 100;
    width: 100%;
    transition: all ${(p) => p.theme.transition.main_transition};
    background-color: ${p => p.$isScrolled ? "#142515ba" : "#142515"};
    backdrop-filter: ${p => p.$isScrolled ? "blur(10px)" : "blur(0px)"};


    .header-container{
        padding: 16px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: ${p =>p.$hebrew ? "row-reverse" : "row"};
    }

    .header-logo{
        width: 60px;
        cursor: pointer;

        @media screen and (min-width: 1280px){
            width: 80px;
        }
    }

    .desctop-menu{
        @media screen and (max-width: 767px){
            display: none;
        }
        ${p => (p.$hebrew ? "margin-right: auto;" : "margin-left: auto;")};

        @media screen and (min-width: 1280px){
            ${p => (p.$hebrew ? "margin-left: 32px;" : "margin-right: 32px;")};
            width: 100%;
        }
    }


    .lang-cont{
        margin-left: ${p => p.$hebrew ? "2.5rem" : "auto"};
        margin-right: ${p => p.$hebrew ? "auto" : "2.5rem"};
        position: relative;

        @media screen and (min-width: 768px){
            margin-right: ${p => p.$hebrew ? "auto" : "0"};
            margin-left: ${p => p.$hebrew ? "0" : "auto"};
        }

        & .lang-text{
            font-size: 14px;
            
            @media screen and (min-width: 1280px){
                font-size: 20px;
            }
        }

        & .lang-button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            padding: 5px;
            border-radius: 15px;
            background-color: transparent;
            font-size: 20px;
            border: 1px solid ${(p) => p.theme.color.text_color1};
            color: ${(p) => p.theme.color.text_color1};
            transition: background-color ${(p) => p.theme.transition.main_transition},
                        border ${(p) => p.theme.transition.main_transition};
            flex-direction: ${p =>p.$hebrew ? "row-reverse" : "row"};

            &:hover{
                color: ${(props) => props.theme.color.hover_color};
                border: 1px solid ${(p) => p.theme.color.hover_color};
            }


            & .arrow-svg{
                fill: ${(p) => p.theme.color.text_color1};
                rotate: 0deg;
                transition: rotate ${(p) => p.theme.transition.main_transition};
                width: 16px;
                height: 16px;

                @media screen and (min-width: 1280px){
                    width: 22px;
                    height: 22px;
                }
            }

            @media screen and (min-width: 1280px){
                padding: 10px 8px;
                line-height: 22px;
            }
        }

        & .lang-drop-list{
            position: absolute;
            top: 100%;
            width: 100%;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            overflow: hidden;
            transform: scale(0);
            transform-origin: left top;
            transition: transform ${p => p.theme.transition.main_transition};
            font-size: 14px;

            
            & .lang-drop-item{
                padding: 6.5px 5px;
                width: 100%;
                background-color: ${(props) => props.theme.color.header_bg_color};
                color: ${(p) => p.theme.color.text_color1};
                transition: background-color ${(p) => p.theme.transition.main_transition};
                cursor: pointer;
                text-align: ${p => p.$hebrew ? "right" : "left"};
                
                &:hover{
                    color: ${(props) => props.theme.color.hover_color};
                    background-color: ${(props) => props.theme.color.hover_color2};
                }
    
                &:last-child{
                    border-top: 1px solid ${(p) => p.theme.color.text_color1};
                }

                @media screen and (min-width: 1280px){
                    padding: 10px 8px;
                }
            }

            @media screen and (min-width: 1280px){
                font-size: 20px;
                line-height: 22px
            }
        }

        & .visible{
            transform: scale(1);
        }

        & .active{
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            background-color: ${(props) => props.theme.color.active_color};
            

            & .arrow-svg{
                rotate: 180deg;
            }
        }
    }

    .mobile-nav-cont{

    }

    .burger-button{
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .burger-svg{
        width: 2.25rem;
        height: 2.25rem;
        fill: ${(props) => props.theme.color.text_color1};
    }


    .mob-menu{
        top: 0;
        left: 0;
        position: absolute;
        height: auto;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        padding: 20px;
        background-color: ${(props) => props.theme.color.header_bg_color};
        transform: translateX(-100%);
        transition: transform ${p => p.theme.transition.main_transition};
        text-align: center;
        
        @media screen and (min-width: 768px){
            display: none;
        }

        & .close-btn{
            position: absolute;
            top: 20px;
            ${p => (p.$hebrew ? "left: 20px; right: auto;" : "right: 20px; left: auto;")};
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
    
            & .close-svg{
                fill: ${(props) => props.theme.color.text_color1};
                width: 24px;
                height: 24px;
            }
        }
    }

    .is-mob-menu-active{
        transform: translateX(0);
    }

    .mobile-logo-cont {
        position: relative;
        width: 100%;
        padding-bottom: 20px;
        border-bottom: 1px solid ${(p) => p.theme.color.text_color1};
        
        & .mobile-header-logo{
            width: 80px;
            height: auto;
            margin-left: ${p => p.$hebrew ? "auto" : "0"};
            margin-right: ${p => p.$hebrew ? "0" : "auto"};
        }
    }

    .menu-description{
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 16px;
        max-width: 210px;
        line-height: 24px;
        color: ${(p) => p.theme.color.text_color1};
        direction: ${p => (p.$hebrew ? "rtl" : "ltr")};
        unicode-bidi: ${p => (p.$hebrew ? "bidi-override" : "normal")};
    }

`