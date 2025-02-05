import { ContactLinkStyled } from "./ContactLink.styled";
import { useTranslation } from 'react-i18next';



export const ContactLink = ({footer, hebrew}) => {
    const { t } = useTranslation();


    const phoneNumber = `${t('header.contactUsNumber')}`;
    const message = encodeURIComponent(t('header.contactUsTextMessage'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;


    return(
        <ContactLinkStyled $footer={footer} $hebrew={hebrew}>
            <a  className="contact-menu-link" 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <span>{t('header.contactUsText')}</span>  
            </a>
        </ContactLinkStyled>
    );
};