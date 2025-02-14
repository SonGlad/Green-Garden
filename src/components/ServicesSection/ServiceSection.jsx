import { StyledServiceSection } from "./ServiceSection.styled";
import Image1 from "../../images/images/picture1.webp";
import Image2 from "../../images/images/picture2.webp";
import Image3 from "../../images/images/picture3.webp";
import Image4 from "../../images/images/picture4.webp";
import Image5 from "../../images/images/picture5.webp";
import Image6 from "../../images/images/picture6.webp";
import {ReactComponent as PictureOneSVG} from "../../images/svg/picture1_svg.svg";
import {ReactComponent as PictureTwoSVG} from "../../images/svg/picture2_svg.svg";
import {ReactComponent as PictureThreeSVG} from "../../images/svg/picture3_svg.svg";
import {ReactComponent as PictureFourSVG} from "../../images/svg/picture4_svg.svg";
import {ReactComponent as PictureFiveSVG} from "../../images/svg/picture5_svg.svg";
import {ReactComponent as PictureSixSVG} from "../../images/svg/picture6_svg.svg";
import {ReactComponent as ArrowSVG} from "../../images/svg/arrowDown.svg";
import { useTranslation } from 'react-i18next';
import { useState, useMemo, useEffect, useCallback, useRef} from "react";
import { SwiperDiv } from "./Swiper";



export const ServiceSection = ({hebrew}) => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [backgroundData, setBackgroundData] = useState(null);
    const [isActive, setActive] = useState(false);
    const [animation, setAnimation] = useState(true);
    const [fixedBackgroundData, setFixedbackgroundData] = 
    useState({
        title: t('services.subTitleSix'),
        description: t('services.descriptionSix'),
        image: Image6,
        svg: PictureSixSVG,
    });
    const swiperRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [render, setRender] = useState(false);
    
    const delayValue = 4000;
    const speedValue = 1500;

      
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    },[]);

    useEffect(() => {
        if (windowWidth < 1280) {
            setRender(true)
        } else {
            setRender(false);
        }
    },[windowWidth])
    
    


    const data = useMemo(() => [
        {
            title: t('services.subTitleOne'),
            description: t('services.descriptionOne'),
            image: Image1,
            svg: PictureOneSVG,
        },
        {
            title: t('services.subTitleTwo'),
            description: t('services.descriptionTwo'),
            image: Image2,
            svg: PictureTwoSVG,
        },
        {
            title: t('services.subTitleThree'),
            description: t('services.descriptionThree'),
            image: Image3,
            svg: PictureThreeSVG,
        },
        {
            title: t('services.subTitleFour'),
            description: t('services.descriptionFour'),
            image: Image4,
            svg: PictureFourSVG,
        },
        {
            title: t('services.subTitleFive'),
            description: t('services.descriptionFive'),
            image:Image5,
            svg: PictureFiveSVG,
        },
        {
            title: t('services.subTitleSix'),
            description: t('services.descriptionSix'),
            image: Image6,
            svg: PictureSixSVG,
        },
    ], [t]);


    const toggleActiveStyle = useCallback(() => {
        return isActive ? 'background-active-active' : '';
    }, [isActive]);


 
    useEffect(() => {
        if(activeIndex === 0){
            setPrevIndex(data.length - 1)
        } else {
            setPrevIndex(activeIndex - 1)
        }
    }, [activeIndex, data.length]);


    useEffect(() => {
        if (prevIndex !== null) {
            setBackgroundData(data[prevIndex]);
            setActive(true);
            setTimeout(() => {
                setFixedbackgroundData(data[prevIndex]);
                setAnimation(true);
            }, speedValue);
        }
    }, [prevIndex, data]);


    useEffect(() => {
        if(prevIndex => !prevIndex){
            toggleActiveStyle();
        }
    },[toggleActiveStyle]);


    useEffect(() => {
        if (isActive) {
            setTimeout(() => {
                setActive(false);
            }, speedValue);
            setTimeout(() => {
                setAnimation(false);
            }, 1200)
        }
    },[isActive]);


    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current.swiper.slideNext();
    };


    return(
        <StyledServiceSection $hebrew={hebrew} style={{ "--speedvalue": `${speedValue}ms`}}>
            {render && 
                <div className="service-tex-cont mobile">
                    <span className={animation ? "span" : ""}></span>
                    <h3 className={animation ? "title" : ""}>{fixedBackgroundData.title}</h3>
                    <p className={animation ? "text" : ""}>{fixedBackgroundData.description}</p> 
                </div>
            }
            <div className={`background-active-animated ${toggleActiveStyle()}`} style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundData?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="background-active-fixed" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fixedBackgroundData?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="service-tex-cont">
                    <span className={animation ? "span" : ""}></span>
                    <h3 className={animation ? "title" : ""}>{fixedBackgroundData.title}</h3>
                    <p className={animation ? "text" : ""}>{fixedBackgroundData.description}</p> 
                </div>
            </div>
            <SwiperDiv 
                data={data}
                setActiveIndex={setActiveIndex}
                prevIndex={prevIndex}
                hebrew={hebrew}
                delayValue={delayValue}
                swiperRef={swiperRef}
            />
            <div className="progress-bar">
                <div className="button-block">
                    <button className="my-prev-button" onClick={handlePrev}>
                        <ArrowSVG className="next arrow-prev" width={20} height={20}/>
                    </button>
                    <button className="my-next-button" onClick={handleNext}>
                        <ArrowSVG className="next arrow-next" width={20} height={20}/>
                    </button>
                </div>
                <div className="progress-bar-cont">
                    <span className="progress"
                        style={{ '--progress-width': `${(activeIndex + 1) / data.length * 100}%` }}
                    ></span>
                    <span className="progress-number">{activeIndex + 1}</span>
                </div>
            </div>
        </StyledServiceSection>
    )
};