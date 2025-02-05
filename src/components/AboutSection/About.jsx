import { AboutStyled } from "./About.styled";
import CardImageSeven from "../../images/images/picture7.jpg";
import {ReactComponent as AboutPictureSVG} from "../../images/svg/picture1_svg.svg";
import {ReactComponent as AboutDescrSVG} from "../../images/svg/about-decr-svg.svg";
import {ReactComponent as AboutSVGBack} from "../../images/svg/svg-back3.svg";
import { useTranslation } from 'react-i18next';



export const About = ({hebrew}) => {
    const { t } = useTranslation();



    return (
        <AboutStyled $hebrew={hebrew}>
            <div className="about-title-cont">
                <span className='span-before'></span>
                <h2 className="about-section-title">{t('about.title')}</h2>
                <span className="span-after"></span>
            </div>
            <div  className="about-back-cont">
                <AboutPictureSVG className="about-back-svg"/>
            </div>
            <div className="about-main-cont">
                <div className="about-image-cont">
                    <img className="about-img" src={CardImageSeven} alt="about-img"/>
                </div>
                <ul className="about-text-list">
                    <li className="about-text-item">
                        <p className="about-text">{t('about.textOne')}</p>
                        <AboutDescrSVG className="about-descr-svg"/>
                    </li>
                    <li className="about-text-item">
                        <p className="about-text">{t('about.textTwo')}</p>
                    </li>
                    <li className="about-text-item">
                        <p className="about-text">{t('about.textThree')}</p>
                    </li>
                </ul>
            </div>
            <div className="svg-back-cont">
                <AboutSVGBack className="about-cont-back-svg"/>
            </div>
        </AboutStyled>
    )
};