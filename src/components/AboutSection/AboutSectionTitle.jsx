import { AboutSectionTitleStyled } from "./AboutSectionTitle.styled";
import { useTranslation } from 'react-i18next';



export const AboutSectionTitle = ({hebrew}) => {
    const { t } = useTranslation();



    return(
        <AboutSectionTitleStyled $hebrew={hebrew}>
            <span className='span-before'></span>
            <h2 className="about-section-title">{t('about.title')}</h2>
            <span className="span-after"></span>
        </AboutSectionTitleStyled>
    )
};