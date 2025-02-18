import { HeroStyled } from "./Hero.styled";
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';


export const HeroSection = ({hebrew}) => {
    const { t } = useTranslation();
    const [refItem, refItem1InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });
    
    

    const phoneNumber = `${t('header.contactUsNumber')}`;
    const message = encodeURIComponent(t('header.contactUsTextMessage'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;


    return(
        <HeroStyled $hebrew={hebrew} ref={refItem} >
            <div className="content-cont">
                <h1 className={`title ${refItem1InView? "activ-title" : ""}`}>{t('hero.name')}</h1>
                <h2 className={`sub-title ${refItem1InView? "active-sub-title" : ""}`}>{t('hero.slogan')}</h2>
            </div>
            <div className="contact-link-cont">
                <a  className={`hero-contact-link ${refItem1InView? "active-hero-link" : ""}`} 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <span>{t('header.contactUsText')}</span>  
                </a>
            </div>
        </HeroStyled>
    )
};