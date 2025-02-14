import styled from "styled-components";


export const SwiperStyled = styled.div`
    background-color: transparent;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 20;


    @media screen and (min-width: 1280px){
        width: 50%;
    }

    .swiper {
        width: 100%;
        padding-top: 5px;
        padding-bottom: 30px;

        @media screen and (min-width: 768px){
            width: 90%;
        }

        @media screen and (min-width: 1280px){
            width: 100%;
        }
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 10px;
    }

    .swiper-pagination {
        bottom: 0;
    }

    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        opacity: 1;
        background: rgba(255, 255, 255, 0.5);
    }

    .swiper-pagination-bullet-active {
        background: ${p => p.theme.color.text_color1};
    }


    .slider-item{
        width: 100%;
        height: auto;
        transform-style: preserve-3d;
        transform: perspective(100rem);
        cursor: pointer;
    }


    .image-cont{
        --rX: 0;
        --rY: 0;
        --bX: 50%;
        --bY: 80%;

        height: 18rem;
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 10px;
        position: relative;
        transform: rotateX(calc(var(--rX) * 1deg)) rotateY(calc(var(--rY) * 1deg));
        background-position: var(--bX) var(--bY);
        background-size: 40rem auto;
        transition: transform .6s 1s;
        box-shadow: 7px 4px 8px 4px rgba(0, 0, 0, 0.3);;

        

        &::before,
        &::after {
            content: "";
            width: 2rem;
            height: 2rem;
            border: 1px solid #fff;
            position: absolute;
            z-index: 2;
            opacity: .3;
            transition: .3s;
        }

        &::before {
            top: 0.5rem;
            right: 0.5rem;
            border-bottom-width: 0;
            border-left-width: 0;
        }

        &::after {
            bottom: 0.5rem;
            left: 0.5rem;

            border-top-width: 0;
            border-right-width: 0;
        }
    }

    .slider-item:hover .image-cont::before,
    .slider-item:hover .image-cont::after {
        width: calc(100% - 1rem);
        height: calc(100% - 1rem);
    }


    .container--active {
        transition: none;
    }

    .item-title{
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        max-width: 75%;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        color: ${p => p.theme.color.text_color1};
        direction: ${p => (p.$hebrew ? "rtl" : "ltr")};
        unicode-bidi: ${p => (p.$hebrew ? "bidi-override" : "normal")};
        text-align: ${p => (p.$hebrew ? "right" : "left")};
        transform: scaleX(${p => (p.$hebrew ? "-1" : "1")});
    }

    .item-descr{
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        color: ${p => p.theme.color.text_color1};
        direction: ${p => (p.$hebrew ? "rtl" : "ltr")};
        unicode-bidi: ${p => (p.$hebrew ? "bidi-override" : "normal")};
        text-align: ${p => (p.$hebrew ? "right" : "left")};
        transform: scaleX(${p => (p.$hebrew ? "-1" : "1")}); 
    }


    .svg-image{
        position: absolute;
        top: 16px;
        right: 16px;
        padding: 10px;
        border-radius: 50%;
        background-color: ${p => p.theme.color.text_color2};
        width: 40px;
        height: 40px;
        overflow: hidden;

        @media screen and (min-width: 1280px){
            width: 40px;
            height: 40px;
        }

        & .service-svg{
            width: 20px;
            height: 20px;
            fill: ${p => p.theme.color.hover_color};

            @media screen and (min-width: 1280px){
                width: 20px;
                height: 20px;
            }
        }
    }
`