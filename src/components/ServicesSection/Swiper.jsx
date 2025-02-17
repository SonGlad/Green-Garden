import { SwiperStyled } from "./Swiper.styled";
import { useEffect, useRef, useState, forwardRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export const SwiperDiv = forwardRef(({
    data, 
    setActiveIndex, 
    hebrew, 
    prevIndex, 
    delayValue, 
    swiperRef,
    navigateToIndex, 
    isNavigationIndex, 
    setNavigationIndex,
}, ref) => {
    const elementRefs = useRef([]);
    const [isClickable, setIsClickable] = useState(true);
 
   
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '"></span>';
    //     },
    // };

    
    const parallaxEffect = (element, tiltEffect) => {
        const container = element.querySelector(".image-cont");
               
        const size = [300, 360];
        const [w, h] = size;

        const setProperty = (p, v) => {
            container.style.setProperty(p, v);
        };

        const handleMouseMove = (event) => {
            const { offsetX, offsetY } = event;
            let X, Y;

            if (tiltEffect === "reverse") {
                X = ((offsetX - (w / 2)) / 3) / 3;
                Y = (-(offsetY - (h / 2)) / 3) / 3;
            } else if (tiltEffect === "normal") {
                X = (-(offsetX - (w / 2)) / 3) / 3;
                Y = ((offsetY - (h / 2)) / 3) / 3;
            }

            setProperty('--rY', X.toFixed(2));
            setProperty('--rX', Y.toFixed(2));

            setProperty('--bY', (80 - (X / 4).toFixed(2)) + '%');
            setProperty('--bX', (50 - (Y / 4).toFixed(2)) + '%');
        };

        const handleMouseEnter = () => {
            container.classList.add("container--active");
        };

        const handleMouseLeave = () => {
            container.classList.remove("container--active");
            setProperty('--rY', 0);
            setProperty('--rX', 0);
            setProperty('--bY', '80%');
            setProperty('--bX', '50%');
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    };


    useEffect(() => {
        elementRefs.current.forEach((element, index) => {
            const tiltEffect = index % 2 === 0 ? "reverse" : "normal";
            return parallaxEffect(element, tiltEffect);
        });
    }, []);


    const handleSlideClick = (index) => {
        if (!isClickable || !swiperRef.current) return;
        
        if (swiperRef.current) {

            const swiperInstance = swiperRef.current.swiper;

            if (swiperInstance) {
                setIsClickable(false);
                setTimeout(() => {
                    if(index === data.length - 1){
                        swiperInstance.slideToLoop(0);
                    } else {
                        swiperInstance.slideToLoop(index + 1);
                    }
                }, 50);
                setTimeout(() => {
                    setIsClickable(true);
                }, 1500);
            }
        }
    };


    useEffect(() => {
        if (isNavigationIndex) {
            if (swiperRef.current) {
                const swiperInstance = swiperRef.current.swiper;
    
                if (swiperInstance) {
                    setTimeout(() => {
                        if(navigateToIndex === data.length - 1){
                            swiperInstance.slideToLoop(0);
                        } else {
                            swiperInstance.slideToLoop(navigateToIndex+ 1);
                        }
                    }, 50);
                }
            }
            setNavigationIndex(false);
        }
    }, [data.length, isNavigationIndex, navigateToIndex, setNavigationIndex, swiperRef]);



    return(
        <SwiperStyled $hebrew={hebrew}>
            <Swiper
                ref={swiperRef}
                // navigation={true}
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    },
                    '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    },
                    // '@1.50': {
                    // slidesPerView: 4,
                    // spaceBetween: 50,
                    // },
                }}
                loop={true}
                autoplay={{
                    delay: delayValue,
                    disableOnInteraction: false,
                }}
                // pagination={pagination}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                }}
                speed={1500}
                navigation={{
                    prevEl: '.my-prev-button',
                    nextEl: '.my-next-button'
                }}
            >
                {data.map(({title, description, image, svg: SvgComponent}, index) => (
                    <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
                        <div  className={`slider-item wrap--${index + 1}`}
                            ref={(el) => (elementRefs.current[index] = el)}
                            style={{
                                opacity: prevIndex === index ? 0 : 1,
                                transition: "opacity 0.5s ease-in-out"
                            }}                            
                        >
                            <div className="image-cont"       
                                style={{ 
                                    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    width: "100%"
                                }}
                            >
                                <h3 className="item-title">{title}</h3>
                                <p className="item-descr">{description}</p>
                                <span className="svg-image">
                                    <SvgComponent className="service-svg" width={40} height={40}/>
                                </span>
                            </div>
                        </div>
                    </SwiperSlide> 
                ))}
            </Swiper>
        </SwiperStyled>
    )
});