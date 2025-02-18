import { AboutStyled } from "./About.styled";
import CardImageSeven from "../../images/images/picture7.webp";
import {ReactComponent as AboutDescrSVG} from "../../images/svg/about-decr-svg.svg";
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';




export const About = ({hebrew}) => {
    const { t } = useTranslation();
    const [refItem, refItem1InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.2,
    });



    return (
        <AboutStyled $hebrew={hebrew} ref={refItem}>
            <div className="about-main-cont">
                <div className={`about-image-cont ${refItem1InView? "active-image-cont" : ""}`}>
                    <img className="about-img" src={CardImageSeven} alt="about-img"/>
                </div>
                <ul className={`about-text-list ${refItem1InView? "active-text-list" : ""}`}>
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
        </AboutStyled>
    )
};