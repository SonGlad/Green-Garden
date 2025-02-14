import { WorksStyled } from "./Works.styled";
import { useTranslation } from 'react-i18next';
import { useMemo } from "react";


export const Works = ({hebrew}) => {
    const { t } = useTranslation();


    const data = useMemo(() => [
        {
            itemNum: '01',
            title: t('work.subTitleOne'),
            description: t('work.textOne'),
        },
        {
            itemNum: '02',
            title: t('work.subTitleTwo'),
            description: t('work.textTwo'),
        },
        {
            itemNum: '03',
            title: t('work.subTitleThree'),
            description: t('work.textThree'),
        },
        {
            itemNum: '04',
            title: t('work.subTitleFour'),
            description: t('work.textFour'),
        },
        {
            itemNum: '05',
            title: t('work.subTitleFive'),
            description: t('work.textFive'),
        },
        {
            itemNum: '05',
            title: t('work.subTitleFive'),
            description: t('work.textFive'),
        },
    ], [t]);


    return(
        <WorksStyled $hebrew={hebrew}>
            <ul className="work-list">
                {data && data.map(({itemNum, title, description}, index) => (
                    <li key={index} className="work-item">
                        <div className="item-title-cont">
                            <span className="item-num">{itemNum}</span>
                            <h3 className="item-title">{title}</h3>
                        </div>
                        <p className="work-item-text">{description}</p>
                    </li>
                ))}
            </ul>
        </WorksStyled>
    );
};