import { FooterStyled } from "./Footer.styled";
import { forwardRef, useState, useEffect } from "react";
import { ContactLink } from "../Header/ContactLink/ContactLink";
import { ReactComponent as PhoneIcon} from "../../images/svg/phone.svg";
import Logo from "../../images/images/Logo2.png";
import { useTranslation } from 'react-i18next';



export const Footer = forwardRef(({propsId, footerRef, hebrew}, reff) => {
    const [date, setDate] = useState(null);
    const [footer, setFooter] = useState(false);
    const { t } = useTranslation();

    

    useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        setDate(year);
        setFooter(true);
    },[])
  


    return(
        <FooterStyled id={propsId} ref={footerRef} $hebrew={hebrew}>
            <div className="footer-content-cont">
                <div className="footer-content-block">
                    <div className="hours-cont">
                        <p className="footer-sub-title">{t('footer.workingTitle')}<span>:</span></p>
                        <p className="footer-=time">{t('footer.workingHours')}</p>
                    </div>
                    <address className="footer-adress">
                        <ul className="footer-adress-list">
                            <li className="footer-adress-item">
                                <a className="footer-tel-link" 
                                    href={`tel:${t('header.contactUsNumber')}`} 
                                    aria-label="Telephone link"
                                >
                                    <PhoneIcon className="footer-phone-icon" width={12}/>
                                    <span>{t('header.contactNumberText')}</span>
                                </a>
                            </li>
                            <li className="footer-adress-item">
                                <ContactLink
                                    footer={footer}
                                />
                            </li>
                        </ul>
                    </address>
                </div>
                <div className="rights-block">
                    <span>&#169;</span>
                    <p>{date}</p>
                    <p>{t('footer.rights')}</p>
                    <span>...</span>
                </div>
            </div>
            <div className="footer-logo-cont">
                <img className="footer-logo" src={Logo} alt="logo" width={60}/> 
            </div>
        </FooterStyled>
    );
});