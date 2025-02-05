import styled from "styled-components";



export const ServicesStyled = styled.div`
    padding-top: 60px; 
    padding-bottom: 154px;
    transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});


    @media screen and (min-width: 768px){
        padding-top: 90px;
    }

    @media screen and (min-width: 1280px){
        padding-top: 120px;
    }


    .services-title-cont{
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 15px;

        & .service-section-title{
            color: ${p => p.theme.color.text_color2};
            font-weight: 500;
            font-size: 48px;
            transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
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
                z-index: 1;
            }
        }

        & .span-after{
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
    }

    .services-svg-background{
        color: ${p => p.theme.color.text_color2};
        position: relative;

        & .services-svg-background-one{
            @media screen and (max-width: 767px){
                display: none;
            }

            margin-top: 12px;
            height: auto;
            position: absolute;
            z-index: -1;
            right: -4.5%;
            width: 63.5%;


            & .services-svg-background-one-img{
                width: 100%;
                height: auto;   
            }

        }

        & .services-svg-background-two{
            @media screen and (max-width: 767px){
                display: none;
            }

            height: auto;
            position: absolute;
            z-index: -1;
            left: -4%;
            bottom: -11%;
            width: 34%;


            & .services-svg-background-two-img{
                width: 100%;
                height: auto;
            }

        }
    }


    .services-list{
        padding-top: 90px;
        position: relative;
        
        
        @media screen and (min-width: 768px){
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            row-gap: 100px;
            column-gap: 60px;
        }
        
        @media screen and (min-width: 1280px){
            justify-content: flex-start;
            margin-left: calc(155 / 1280 * 100vw);
            row-gap: 149px;
            column-gap: 230px;
        }

        & li{
            margin-top: 150px;

            @media screen and (min-width: 768px){
                margin-top: 0;
            }
        }

        & li:nth-child(1){
            margin-top: 0;
        }


        & li:nth-child(2n + 1) {

            @media screen and (min-width: 1280px){
                margin-top: 0;
            }
        }

        & li:nth-child(2n) {


            @media screen and (min-width: 1280px){
                margin-top: 60px;
            }
        }


        & .services-items{
            position: relative;
            transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});

            @media screen and (min-width: 768px){
            }

            & .service-main-cont{
                position: relative;
                border-radius: 25px;
                overflow: hidden;
                box-shadow: 4px 14px 14px 0 rgba(0, 0, 0, 0.09), 
                            1px 3px 8px 0 rgba(0, 0, 0, 0.1), 
                            8px 31px 19px 0 rgba(0, 0, 0, 0.05), 
                            15px 56px 23px 0 rgba(0, 0, 0, 0.01), 
                            23px 87px 25px 0 rgba(0, 0, 0, 0);
                            
                & .service-image{
                    width: 100%;
                    height: auto;
                    
                    @media screen and (min-width: 768px){
                        width: calc(325 / 768 * 100vw);
                    }
                    
                    @media screen and (min-width: 1280px){
                        width: calc(388 / 1280 * 100vw);
                    }
                }

                & .margin-services-item{
                    margin-top: 50px;
                }

                & .svg-image{
                    position: absolute;
                    top: 12px;
                    ${p => (p.$hebrew ? "left: 12px;" : "right: 12px;")};
                    padding: 10px;
                    border-radius: 50%;
                    background-color: ${p => p.theme.color.text_color2};
                    width: 40px;
                    height: 40px;
                    overflow: hidden;

                    @media screen and (min-width: 1280px){
                        width: 60px;
                        height: 60px;
                    }

                    & .service-svg{
                        width: 20px;
                        height: 20px;
                        fill: ${p => p.theme.color.hover_color};

                        @media screen and (min-width: 1280px){
                            width: 40px;
                            height: 40px;
                        }
                    }
                }
            }


            & .service-description-cont{
                position: absolute;
                left: 50%;
                width: 75%;
                height: 136px;
                padding: 0 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(20, 37, 21, 0.8);
                backdrop-filter: blur(4px);
                border-radius: 15px;
                transform: translate(-50%, -70%);
                
                
                @media screen and (min-width: 768px){
                    width: 70%
                }
                
                @media screen and (min-width: 1280px){
                    ${p => (p.$hebrew ? "right: auto;" : "left: auto;")};
                    width: 74.25%;
                    transform: translate(${p => (p.$hebrew ? "0%, -70%" : "-35%, -70%")});
                }
                
                & .descr-text{
                    direction: ${p => (p.$hebrew ? "rtl" : "ltr")};
                    unicode-bidi: ${p => (p.$hebrew ? "bidi-override" : "normal")};
                    text-align: center;
                    color: ${p => p.theme.color.text_color1};
                    font-weight: 400;
                    font-size: 20px;
                }
            }

        }
    }

    

`