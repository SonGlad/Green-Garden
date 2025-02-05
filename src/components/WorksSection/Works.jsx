import { WorksStyled } from "./Works.styled";
import SVGBackgroundImage4 from '../../images/images/svg-back4.png';
import { useTranslation } from 'react-i18next';



export const Works = ({hebrew}) => {
    const { t } = useTranslation();



    return(
        <WorksStyled $hebrew={hebrew}>
            <div className="work-title-cont">
                <span className='span-before'></span>
                <h2 className="work-section-title">{t('work.title')}</h2>
                <span className="span-after"></span>
            </div>
            <ul className="work-list">
                <li className="work-item">
                    <div className="item-title-cont">
                        <span className="item-num">01</span>
                        <h3 className="item-title">{t('work.subTitleOne')}</h3>
                    </div>
                    <p className="work-item-text">{t('work.textOne')}</p>
                </li>
                <li className="work-item">
                    <div className="item-title-cont">
                        <span className="item-num">02</span>
                        <h3 className="item-title">{t('work.subTitleTwo')}</h3>
                    </div>
                    <p className="work-item-text">{t('work.textTwo')}</p>
                </li>
                <li className="work-item">
                    <div className="item-title-cont">
                        <span className="item-num">03</span>
                        <h3 className="item-title">{t('work.subTitleThree')}</h3>
                    </div>
                    <p className="work-item-text">{t('work.textThree')}</p>
                </li>
                <li className="work-item">
                    <div className="item-title-cont">
                        <span className="item-num">04</span>
                        <h3 className="item-title">{t('work.subTitleFour')}</h3>
                    </div>
                    <p className="work-item-text">{t('work.textFour')}</p>
                </li>
                <li className="work-item hidden">
                    <div className="item-title-cont">
                        <span className="item-num">05</span>
                        <h3 className="item-title">{t('work.subTitleFive')}</h3>
                    </div>
                    <p className="work-item-text">{t('work.textFive')}</p>
                </li>
                <li className="work-item">
                    <div className="item-title-cont">
                        <span className="item-num">05</span>
                        <h3 className="item-title">{t('work.subTitleFive')}</h3>
                    </div>
                    <p className="work-item-text">{t('work.textFive')}</p>
                </li>
            </ul>
            <div className="work-back-cont">
                <img className="services-svg-background-four-img" src={SVGBackgroundImage4} alt='background_image' width={744}></img>
            </div>
        </WorksStyled>
    );
};