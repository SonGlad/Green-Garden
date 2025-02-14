import { StyledServiceSectionTitle } from "./ServiceSectionTitle.styled";
import { useTranslation } from 'react-i18next';


export const ServiceSectionTitle = ({hebrew}) => {
    const { t } = useTranslation();


    return(
        <StyledServiceSectionTitle $hebrew={hebrew}>
            <span className='span-before'></span>
            <h2 className="service-section-title">{t('services.sectionTitle')}</h2>
            <span className="span-after"></span>
            <span className="left-skew"></span>
            <span className="right-skew"></span>
            <span className="service-logo"></span>
        </StyledServiceSectionTitle>
    )
}