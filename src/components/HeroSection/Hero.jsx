import { HeroStyled } from "./Hero.styled";
import { useTranslation } from 'react-i18next';
import { Animation } from "../Animation/Animation";



export const HeroSection = ({hebrew}) => {
    const { t } = useTranslation();


    const phoneNumber = `${t('header.contactUsNumber')}`;
    const message = encodeURIComponent(t('header.contactUsTextMessage'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;


    return(
        <HeroStyled $hebrew={hebrew}>
            <div className="fog-div"></div>
            <div className="content-cont">
                <h1 className="title">{t('hero.name')}</h1>
                <h2 className="sub-title">{t('hero.slogan')}</h2>
            </div>
            <div className="contact-link-cont">
                <a  className="hero-contact-link" 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <span>{t('header.contactUsText')}</span>  
                </a>
            </div>
            <Animation/>
        </HeroStyled>
    )
};