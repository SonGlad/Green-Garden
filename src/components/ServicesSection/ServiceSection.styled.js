import styled from "styled-components";



export const StyledServiceSection = styled.div`
    min-height: 80dvh;
    width: 100%;
    position: relative;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%);
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%);
    padding-bottom: 40px;
    transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});


    @media screen and (min-width: 1280px){
        min-height: 80dvh;
        padding-bottom: 75px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
    }


    .progress-bar{
        width: 100%;
        height: auto;
        gap: 15px;
        position: relative;
        z-index: 20;
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        justify-content: center;


        @media screen and (min-width: 1280px){
            width: 50%;
            flex-direction: row;
            justify-content: flex-start;
        }


        & .button-block{
            display: flex;
            align-items: center;
            justify-content: center;            


            & .my-prev-button,
            & .my-next-button{
                border-radius: 50%;
                width: 50px;
                height: 50px;
                margin: 0 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                outline: none;
                cursor: pointer;
                border: 1px solid ${p => p.theme.color.text_color1};
                background-color: ${p => p.theme.color.text_color2};
                transition: border ${p => p.theme.transition.main_transition},
                            background-color ${p => p.theme.transition.main_transition};

                @media screen and (min-width: 1280px){
                    margin: 0 10px;
                }

                            
                & .next{
                    width: 20px;
                    height: 20px;
                    fill: ${p => p.theme.color.text_color1};
                    transition: fill ${p => p.theme.transition.main_transition};
                }

                &:hover{
                    border: 1px solid ${p => p.theme.color.hover_color};
                    background-color: ${p => p.theme.color.hover_color2};

                    .next{
                        fill: ${p => p.theme.color.hover_color};
                    }
                }

                & .arrow-prev{
                    transform: rotate(90deg);
                }

                & .arrow-next{
                    transform: rotate(-90deg);
                }
            }
        }

        & .progress-bar-cont{
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;

            @media screen and (min-width: 768px){
                width: 50%;
            }

            @media screen and (min-width: 1280px){
                justify-content: flex-start;
                width: 100%;
            }

            & .progress{
                display: block;
                width: 80%;
                height: 5px;
                background-color: grey;
                position: relative;

                @media screen and (min-width: 1280px){
                    width: 60%; 
                }
    
                &::before{
                    position: absolute;
                    content: '';
                    width: var(--progress-width, 0%);
                    background-color: ${p => p.theme.color.text_color1};;
                    height: 5px;
                    top: 0;
                    left: 0;
                    transition: width 1.5s ease-in-out;
                }
            }
    
            & .progress-number{
                font-weight: 500;
                font-size: 36px;
                transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
            }
        }
    }


    .background-active-animated{
        position: absolute;
        z-index: 10;
        opacity: 0;
        border-radius: 1rem;
        left: 0;
        bottom: 175px;
        width: 100%;
        height: 288px;

        @media screen and (min-width: 768px){
            left: 53px;
            bottom: 175px;
            width: 291px;
            height: 288px;
            transform: translateX(0);
        }

        @media screen and (min-width: 1280px){
            left: auto;
            right: 50%;
            bottom: 155px;
            width: 195px;
            height: 288px;
            transform: translateX(100%);
        }
    }

    
    .background-active-active{
        opacity: 1;
        animation: rise-mobile var(--speedvalue) ease forwards;  

        @media screen and (min-width: 768px){
            animation: rise-laptop var(--speedvalue) ease forwards;  
        }

        @media screen and (min-width: 1280px){
            animation: rise-pc var(--speedvalue) ease forwards;
        }
    }

    @keyframes rise-mobile {
        0%{
            z-index: 10;
            right: 50%;
            bottom: 175px;
            width: 100%;
            height: 288px;
            border-radius: 1rem;
        }
        100%{
            width: 100%;
            height: 100%;
            bottom: 0;
            right: 0;
            border-radius: 0;
        }
    }

    @keyframes rise-laptop {
        0%{
            z-index: 10;
            border-radius: 1rem;
            left: 53px;
            bottom: 175px;
            width: 291px;
            height: 288px;
        }
        100%{
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            border-radius: 0;
        }
    }

    @keyframes rise-pc {
        0%{
            z-index: 10;
            border-radius: 1rem;
            right: 50%;
            bottom: 155px;
            width: 195px;
            height: 288px;
            transform: translateX(100%);
        }
        100%{
            width: 100%;
            height: 100%;
            bottom: 0;
            right: 0;
            transform: translateX(0);
            border-radius: 0;
        }
    }

    .background-active-fixed{
        position: absolute;
        z-index: 9;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 10px;
    
        @media screen and (min-width: 768px) {
            padding: 0 27px;
        }

        @media screen and (min-width: 1280px) {
            padding: 0 34px;
        }
    }


    .mobile{
        opacity: 0;
        visibility: hidden;
        padding: 0 10px;
    }

    & .service-tex-cont{
        width: 100%;
        margin-top: 40px;
        margin-bottom: 30px;
        direction: ${p => (p.$hebrew ? "rtl" : "ltr")};
        unicode-bidi: ${p => (p.$hebrew ? "bidi-override" : "normal")};
        transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});

        @media screen and (min-width: 1280px){
            margin-top: 150px;
            margin-left: 70px;
            margin-right: none;
            margin-bottom: 0;
        }

        & span {
            margin-left: auto;
            margin-right: auto;
            display: block;
            width: 50%;
            height: 5px;
            border-radius: 99px;
            background-color: ${p => p.theme.color.text_color1};
            opacity: 0;
            visibility: hidden;
            transform: translateY(200%);

            @media screen and (min-width: 768px){
                width: 25%; 
            }

            @media screen and (min-width: 1280px){
                width: 5%;
                ${p => (p.$hebrew ? "margin-right: 0;" : "margin-left: 0;")};
            }
        }
    
        .span{
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            transition: opacity 0.5s ease-in-out,
                        visibility 0.5s ease-in-out,
                        transform 0.5s ease-in-out;
        }


        & h3{
            margin-top: 20px;
            font-weight: 500;
            font-size: 36px;
            text-align: center;
            opacity: 0;
            visibility: hidden;
            transform: translateY(100%);

            @media screen and (min-width: 1280px){
                font-weight: 500;
                font-size: 48px;
                max-width: 45%;
                text-align: ${p => (p.$hebrew ? "right" : "left")};
            }
        }

        .title{
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            transition: opacity 0.5s ease-in-out,
                        visibility 0.5s ease-in-out,
                        transform 0.5s ease-in-out;
        }
            
            
        & p{
            margin-top: 20px;
            text-align: center;
            font-size: 20px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(50%);

            @media screen and (min-width: 1280px){
                font-size: 20px;
                max-width: 40%;
                text-align: ${p => (p.$hebrew ? "right" : "left")};
            }
        }

        .text{
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            transition: opacity 0.5s ease-in-out,
                        visibility 0.5s ease-in-out,
                        transform 0.5s ease-in-out;
        }
    }
`