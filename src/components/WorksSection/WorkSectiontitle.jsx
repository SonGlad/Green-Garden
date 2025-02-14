import { WorkSectionTitleStyled } from "./WorkSectiontitle.styled";
import { useTranslation } from 'react-i18next';



export const WorkSectionTitle = ({hebrew}) => {
    const { t } = useTranslation();


    return(
        <WorkSectionTitleStyled $hebrew={hebrew}>
            <span className='span-before'></span>
            <h2 className="work-section-title">{t('work.title')}</h2>
            <span className="span-after"></span>
        </WorkSectionTitleStyled>
    )
};