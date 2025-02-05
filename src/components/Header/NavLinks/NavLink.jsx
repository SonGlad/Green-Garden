import { NavLinksStyled } from "./NavLink.styled";
import { forwardRef } from "react";
import { ContactLink } from "../ContactLink/ContactLink";
import { ReactComponent as PhoneIcon} from "../../../images/svg/phone.svg";
import ScrollIntoView from 'react-scroll-into-view';
import { useTranslation } from 'react-i18next';


export const NavLinks = forwardRef(({
    setMobileMenuActive, 
    aboutSectionRef, 
    serviceskSectionRef, 
    contactSectionRef, 
    workSectionRef,
    hebrew
    }, ref) => {
    const { t } = useTranslation();


    return (
        <NavLinksStyled $hebrew={hebrew}>
            <ul className="navigation-list">
                <li className="navigation-item">
                    <ScrollIntoView selector='#ServiceSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>{t('header.services')}</span>
                    </ScrollIntoView>
                </li>
                <li className="navigation-item">
                    <ScrollIntoView selector='#AboutSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>{t('header.about')}</span>
                    </ScrollIntoView>
                </li>
                <li className="navigation-item">
                    <ScrollIntoView selector='#WorksSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>{t('header.works')}</span>
                    </ScrollIntoView>
                </li>
                <li className="navigation-item">
                    <ScrollIntoView selector='#Footer' className="nav-link" onClick={setMobileMenuActive}>
                        <span>{t('header.contacts')}</span>
                    </ScrollIntoView>
                </li>
            </ul>
            <address className="adress">
                <ul className="adress-list">
                    <li className="adress-item">
                        <ContactLink/>
                    </li>
                    <li className="adress-item">
                        <a className="tel-link" href={`tel:${t('header.contactUsNumber')}`}>
                            <PhoneIcon className="phone-icon" width={12}/>
                            <span>{t('header.contactNumberText')}</span>
                        </a>
                    </li>
                </ul>
            </address>
        </NavLinksStyled>
    );
});