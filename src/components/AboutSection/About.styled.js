import styled from "styled-components";


export const AboutStyled = styled.div`
    position: relative;
    padding-bottom: calc(460px - (100vw - 460px));
    transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});


    @media screen and (min-width: 768px){
        padding-bottom: calc(380px - ((100vw - 768px) * 0.3));
    }

    
    @media screen and (min-width: 1280px){
        padding-bottom: calc(335px - ((100vw - 1280px) * 0.1));
    }


    .about-main-cont{
        position: relative;
        margin-top: 74px;
        width: fit-content;

        @media screen and (min-width: 768px){
            margin-left: calc(60 / 768 * 100vw);
        }

        @media screen and (min-width: 1280px){
            margin-left: calc(105 / 1280 * 100vw);
        }

        


        & .about-image-cont{
            width: 100%;
            height: auto;
            border-radius: 50%;
            overflow: hidden;
            aspect-ratio: 1 / 1;
            opacity: 0;
            transform: translateX(-100%);
            transition: transform 1s ease,
                        opacity 1s ease;
            box-shadow: 4px 14px 14px 0 rgba(0, 0, 0, 0.09), 
                            1px 3px 8px 0 rgba(0, 0, 0, 0.1), 
                            8px 31px 19px 0 rgba(0, 0, 0, 0.05), 
                            15px 56px 23px 0 rgba(0, 0, 0, 0.01), 
                            23px 87px 25px 0 rgba(0, 0, 0, 0);

            @media screen and (min-width: 768px){
                width: calc(325 / 768 * 100vw);
            }

            @media screen and (min-width: 1280px){
                width: calc(490 / 1280 * 100vw);
            }
            
            & .about-img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }

        & .active-image-cont{
            opacity: 1;
            transform: translateX(0);
        }

     
        & .about-text-list{
            width: 100%;
            position: absolute;
            top: 67%;
            left: 0;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(4px);
            border-radius: 10px;
            padding: 30px 10px;
            font-weight: 400;
            font-size: 20px;
            color: ${p => p.theme.color.text_color2};
            opacity: 0;
            transform: translateX(100%);
            transition: transform 1s ease,
                        opacity 1s ease;
            box-shadow: 4px 14px 14px 0 rgba(0, 0, 0, 0.09), 
                            1px 3px 8px 0 rgba(0, 0, 0, 0.1), 
                            8px 31px 19px 0 rgba(0, 0, 0, 0.05), 
                            15px 56px 23px 0 rgba(0, 0, 0, 0.01), 
                            23px 87px 25px 0 rgba(0, 0, 0, 0);


            @media screen and (min-width: 768px){
                padding: 30px; 
                left: 22%;
                top: 66%;
                width: 170%;
                max-width: 903px;
            }
            
            
            @media screen and (min-width: 1280px){
                border-radius: 30px;
                padding: 50px 75px;
                left: 21%;
                top: 66%;
                width: 190%;
                max-width: 903px;
            }

            & li{
                margin-bottom: 15px;
                transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
                text-align: ${p => p.$hebrew ? "right" : "left"};
                direction: ${p => (p.$hebrew ? "rtl" : "ltr")};
                unicode-bidi: ${p => (p.$hebrew ? "bidi-override" : "normal")};
            }

            & li:first-child{
                position: relative;

                & .about-descr-svg{
                    position: absolute;
                    width: 80px;
                    top: 0;
                    ${p => (p.$hebrew ? "left: 0;" : "right: 0;")};
                    transform: translate(${p => (p.$hebrew ? "-25%, -67%" : "25%, -67%")}) scaleX(${p => (p.$hebrew ? "-1" : "1")});


                    @media screen and (min-width: 768px){
                        transform: translate(${p => (p.$hebrew ? "-41%, -67%" : "41%, -67%")}) scaleX(${p => (p.$hebrew ? "-1" : "1")});
                        width: 105px;
                    }

                    @media screen and (min-width: 1280px){
                        width: 185px;
                        transform: translate(${p => (p.$hebrew ? "-52%, -78%" : "52%, -78%")}) scaleX(${p => (p.$hebrew ? "-1" : "1")});
                    }
                }
            }

            & li:last-child{
                margin-bottom: 0;
            }
        }


        & .active-text-list{
            opacity: 1;
            transform: translateX(0);
        }
    }
`