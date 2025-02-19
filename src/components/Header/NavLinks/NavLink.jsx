import { NavLinksStyled } from "./NavLink.styled";
import { useMemo } from "react";
import { ContactLink } from "../ContactLink/ContactLink";
import { ReactComponent as PhoneIcon} from "../../../images/svg/phone.svg";
import ScrollIntoView from 'react-scroll-into-view';
import { useTranslation } from 'react-i18next';


export const NavLinks = ({
    setMobileMenuActive,
    hebrew,
    setNavigateToIndex,
    setNavigationIndex
    }, ref) => {
    const { t } = useTranslation();

    const servicesData = useMemo(() => [
        {
            serviceTitle: t('services.subTitleOne'),
        },
        {
            serviceTitle: t('services.subTitleTwo'),
        },
        {
            serviceTitle: t('services.subTitleThree'),
        },
        {
            serviceTitle: t('services.subTitleFour'),
        },
        {
            serviceTitle: t('services.subTitleFive'),
        },
        {
            serviceTitle: t('services.subTitleSix'),
        },
    ], [t]);


    const applynavigationIndex = ((index) => {
        setNavigateToIndex(index);
        setNavigationIndex(true);
    });


    return (
        <NavLinksStyled $hebrew={hebrew}>
            <ul className="navigation-list">
                <li className="navigation-item">
                    <ScrollIntoView selector='#ServiceSection' className="nav-link" onClick={setMobileMenuActive}>
                        <span>{t('header.services')}</span>
                    </ScrollIntoView>
                    <ul className="services-list">
                        {servicesData && servicesData.map(({serviceTitle}, index) => (
                            <li key={index} onClick={() => applynavigationIndex(index)}>
                                <ScrollIntoView selector='#ServiceSection' alignToTop={true}>
                                    <p>{serviceTitle}</p>
                                </ScrollIntoView>
                            </li>
                        ))}
                    </ul>
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
                        <a className="tel-link" 
                            href={`tel:${t('header.contactUsNumber')}`}
                            aria-label="Telephone link"    
                        >
                            <PhoneIcon className="phone-icon" width={12}/>
                            <span>{t('header.contactNumberText')}</span>
                        </a>
                    </li>
                </ul>
            </address>
        </NavLinksStyled>
    );
};