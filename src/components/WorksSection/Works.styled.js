import styled from "styled-components";


export const WorksStyled = styled.div`
    position: relative;
    padding-bottom: 120px;
    transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});


    .work-title-cont{
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 15px;
       margin-bottom: 90px;
       
       & .work-section-title{
           color: ${p => p.theme.color.text_color2};
           font-weight: 500;
           font-size: 48px;
           white-space: nowrap;
           flex-shrink: 0;
           transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
        }

        & .span-before{
            position: relative;
            width: 100%;

            @media screen and (min-width: 1280px){
                max-width: 462px;
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
    }

    .work-list{
        color: ${p => p.theme.color.text_color1};
        width: 100%;
        transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});


        @media screen and (min-width: 768px){
            flex-direction: ${p => p.$hebrew ? "row-reverse" : "row"};
        }

        & li{
            margin-bottom: 24px;

            @media screen and (min-width: 768px){
                margin-bottom: 0;
            }
        }

        & li:last-child{
            margin-bottom: 0;
        }

        @media screen and (min-width: 768px){
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;
            flex-wrap: wrap;
        }

        @media screen and (min-width: 1440px){
            justify-content: space-evenly;
            
        }


        & .work-item{
            background-color: ${p => p.theme.color.text_color2};
            border-radius: 15px;
            padding: 32px;
            max-width: 491px;
            margin-left: auto;
            margin-right: auto;
            min-height: 216px;

            @media screen and (min-width: 768px){
                margin-left: 0;
                margin-right: 0;
                width: 48%;
            }

            @media screen and (min-width: 1440px){
                max-width: none;
                width: 40%;
            } 
            
            
            & .item-title-cont{
                display: flex;
                gap: 14px;
                align-items: flex-end;
                margin-bottom: 35px;
                flex-direction: ${p => p.$hebrew ? "row-reverse" : "row"};

                & span{
                    font-weight: 500;
                    font-size: 48px;
                    line-height: 37px;
                }

                & h3{
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 20px;

                    @media screen and (min-width: 1440px){
                        font-size: 24px;
                    } 
                }
            }


            & .work-item-text{
                font-weight: 400;
                font-size: 16px;
                text-align: ${p => p.$hebrew ? "right" : "left"};
                direction: ${p => (p.$hebrew ? "rtl" : "ltr")};
                unicode-bidi: ${p => (p.$hebrew ? "bidi-override" : "normal")};

                @media screen and (min-width: 1440px){
                    font-size: 20px;
                } 
            }
        }

        & .hidden{
            @media screen and (max-width: 767px){
                display: none;
            }

            visibility: hidden;
            opacity: 0;
        }
    }




    & .work-back-cont{
        @media screen and (max-width: 767px){
            display: none;
        }

        position: absolute;
        height: auto;
        z-index: -1;
        left: -3%;
        bottom: -19%;

        @media screen and (min-width: 1440px){
            width: 45%;
            max-width: 940px;
        }


        & .services-svg-background-four-img{
            width: 100%;
            height: auto;   
        }

    }
`