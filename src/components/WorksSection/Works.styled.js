import styled from "styled-components";


export const WorksStyled = styled.div`
    position: relative;
    transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});


    .work-list{
        color: ${p => p.theme.color.text_color2};
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

        & li:nth-last-child(2){
            @media screen and (max-width: 767px){
                display: none;
            }

            visibility: hidden;
            opacity: 0;
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
            background: rgba(255, 255, 255, 0.8);;
            backdrop-filter: blur(4px);
            border-radius: 15px;
            padding: 32px;
            max-width: 491px;
            margin-left: auto;
            margin-right: auto;
            min-height: 216px;
            box-shadow: 4px 14px 14px 0 rgba(0, 0, 0, 0.09), 
                            1px 3px 8px 0 rgba(0, 0, 0, 0.1), 
                            8px 31px 19px 0 rgba(0, 0, 0, 0.05), 
                            15px 56px 23px 0 rgba(0, 0, 0, 0.01), 
                            23px 87px 25px 0 rgba(0, 0, 0, 0);

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

        /* & .hidden{
            @media screen and (max-width: 767px){
                display: none;
            }

            visibility: hidden;
            opacity: 0;
        } */
    }


`