import { ServicesStyled } from "./Services.styled";
import SVGBackgroundImage1 from '../../images/images/svg-back1.png';
import SVGBackgroundImage2 from '../../images/images/svg-back2.png';
import CardImageOne from "../../images/images/picture1.jpg";
import CardImageTwo from "../../images/images/picture2.jpg";
import CardImageThree from "../../images/images/picture3.jpg";
import CardImageFour from "../../images/images/picture4.jpg";
import CardImageFive from "../../images/images/picture5.jpg";
import CardImageSix from "../../images/images/picture6.jpg";
import {ReactComponent as PictureOneSVG} from "../../images/svg/picture1_svg.svg";
import {ReactComponent as PictureTwoSVG} from "../../images/svg/picture2_svg.svg";
import {ReactComponent as PictureThreeSVG} from "../../images/svg/picture3_svg.svg";
import {ReactComponent as PictureFourSVG} from "../../images/svg/picture4_svg.svg";
import {ReactComponent as PictureFiveSVG} from "../../images/svg/picture5_svg.svg";
import {ReactComponent as PictureSixSVG} from "../../images/svg/picture6_svg.svg";
import { useTranslation } from 'react-i18next';



export const Services = ({hebrew}) => {
    const { t } = useTranslation();



    return(
        <ServicesStyled $hebrew={hebrew}>
            <div className="services-title-cont">
                <span className='span-before'></span>
                <h2 className="service-section-title">{t('services.title')}</h2>
                <span className="span-after"></span>
            </div>
            <div className="services-svg-background">
                <span className="services-svg-background-one">
                    <img className="services-svg-background-one-img" src={SVGBackgroundImage1} alt='background_image' width={744}></img>
                </span>
                <span className="services-svg-background-two">
                    <img className="services-svg-background-two-img" src={SVGBackgroundImage2} alt='background_image' width={316}></img>
                </span>
                <ul className="services-list">
                    <li className="services-items">
                        <div className="service-main-cont">
                            <img className="service-image" src={CardImageOne} alt="Description_Image" width={388} height={268}/>
                            <span className="svg-image">
                                <PictureOneSVG className="service-svg" width={40} height={40}/>
                            </span>
                        </div>
                        <div className="service-description-cont">
                            <p className="descr-text">{t('services.descriptionOne')}</p>
                        </div>
                    </li>
                    <li className="services-items">
                        <div className="service-main-cont">
                            <img className="service-image" src={CardImageTwo} alt="Description_Image" width={388} height={268}/>
                            <span className="svg-image">
                                <PictureTwoSVG className="service-svg" width={40} height={40}/>
                            </span>
                        </div>
                        <div className="service-description-cont">
                            <p className="descr-text">{t('services.descriptionTwo')}</p>
                        </div>
                    </li>
                    <li className="services-items">
                        <div className="service-main-cont">
                            <img className="service-image" src={CardImageThree} alt="Description_Image" width={388} height={268}/>
                            <span className="svg-image">
                                <PictureThreeSVG className="service-svg" width={40} height={40}/>
                            </span>
                        </div>
                        <div className="service-description-cont">
                            <p className="descr-text">{t('services.descriptionThree')}</p>
                        </div>
                    </li>
                    <li className="services-items">
                        <div className="service-main-cont">
                            <img className="service-image" src={CardImageFour} alt="Description_Image" width={388} height={268}/>
                            <span className="svg-image">
                                <PictureFourSVG className="service-svg" width={40} height={40}/>
                            </span>
                        </div>
                        <div className="service-description-cont">
                            <p className="descr-text">{t('services.descriptionFour')}</p>
                        </div>
                    </li>
                    <li className="services-items">
                        <div className="service-main-cont">
                            <img className="service-image" src={CardImageFive} alt="Description_Image" width={388} height={268}/>
                            <span className="svg-image">
                                <PictureFiveSVG className="service-svg" width={40} height={40}/>
                            </span>
                        </div>
                        <div className="service-description-cont">
                            <p className="descr-text">{t('services.descriptionFive')}</p>
                        </div>
                    </li>
                    <li className="services-items">
                        <div className="service-main-cont">
                            <img className="service-image" src={CardImageSix} alt="Description_Image" width={388} height={268}/>
                            <span className="svg-image">
                                <PictureSixSVG className="service-svg" width={40} height={40}/>
                            </span>
                        </div>
                        <div className="service-description-cont">
                            <p className="descr-text">{t('services.descriptionSix')}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </ServicesStyled>
    );
};