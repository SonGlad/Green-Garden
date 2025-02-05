import styled from "styled-components"


export const FooterStyled = styled.footer`
    background-color: ${(props) => props.theme.color.header_bg_color};
    padding: 64px 20px 24px 20px;
    position: relative;
    transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});

    @media screen and (min-width: 768px){
        padding: 64px 64px 24px 64px;
        position: static;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    @media screen and (min-width: 1280px){
        padding: 64px 137px 24px 137px;
    }


    .footer-content-cont{

        @media screen and (min-width: 768px){
            width: 100%;
        }
        
        & .footer-content-block{
            border-bottom: 1px solid ${p => p.theme.color.text_color1};
            padding-bottom: 45px;
            margin-bottom: 25px;

            @media screen and (min-width: 768px){
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 30px;
            }

            
            @media screen and (min-width: 1280px){
                gap: 35px;
            }

            & .hours-cont{
                font-weight: 500;
                font-size: 20px;
                color: ${p => p.theme.color.text_color1};
                margin-bottom: 50px;
                line-height: 28px;
                transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
                text-align: ${p => p.$hebrew ? "right" : "left"};
                direction: ${p => (p.$hebrew ? "rtl" : "ltr")};
                unicode-bidi: ${p => (p.$hebrew ? "bidi-override" : "normal")};

                @media screen and (min-width: 768px){
                    font-size: 24px; 
                    margin-bottom: 0;
                }
            }



            & .footer-adress{


                & .footer-adress-list{

                    & li:first-child{
                        transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
                    }

                    & li:last-child{
                        margin-top: 18px;
                        transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});

                        @media screen and (min-width: 768px){
                            margin-top: 14px;
                        }
                    }


                    & .footer-adress-item{
                        width: fit-content;
                        font-style: normal;
                        
                        & .footer-tel-link{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 8px;
                            font-weight: 500;
                            font-size: 20px;
                            flex-direction: ${p => p.$hebrew ? "row-reverse" : "row"};

                            @media screen and (min-width: 768px){
                                font-size: 24px;
                            }


                            & .footer-phone-icon{
                                width: 16px;
                                height: 16px;
                                fill: ${(p) => p.theme.color.body_bg_color};
                                rotate: 25deg;
                            }
                        }

                        &:hover{
                            color: ${(p) => p.theme.color.hover_color};
                            
                            & .footer-phone-icon{
                                fill: ${(p) => p.theme.color.hover_color};
                            }
                        }
                    }

                }

            }
        }


        & .rights-block{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
            flex-direction: ${p => p.$hebrew ? "row-reverse" : "row"};

            @media screen and (min-width: 768px){
                font-size: 20px;
                justify-content: flex-start;
            }
        }
    }



    .footer-logo-cont{
        position: absolute;
        top: 55%;
        right: 10%;
        width: 80px;
        height: auto;
        transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});

        @media screen and (min-width: 768px){
            position: static;
            min-width: 125px;
        }

        @media screen and (min-width: 768px){
            position: static;
            min-width: 190px;
        }


        & .footer-logo{
            width: 100%;
            height: auto;
        }
    }
`