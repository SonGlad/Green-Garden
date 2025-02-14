import { AboutStyled } from "./About.styled";
import CardImageSeven from "../../images/images/picture7.webp";
import {ReactComponent as AboutDescrSVG} from "../../images/svg/about-decr-svg.svg";
import { useTranslation } from 'react-i18next';



export const About = ({hebrew}) => {
    const { t } = useTranslation();



    return (
        <AboutStyled $hebrew={hebrew}>
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
        </AboutStyled>
    )
};