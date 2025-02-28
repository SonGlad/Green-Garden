import { WorksStyled } from "./Works.styled";
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import React from "react";
import useWindowSize from "../../custom-hooks/hooks";



export const Works = React.memo(({hebrew}) => {
    const { t } = useTranslation();
    const { renderMob } = useWindowSize();
     

    const [refItem1, refItem1InView1] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });
    const [refItem2, refItem1InView2] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });
    const [refItem3, refItem1InView3] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });
    const [refItem4, refItem1InView4] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });
    const [refItem5, refItem1InView5] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });

   
    return(
        <WorksStyled $hebrew={hebrew}>
            <ul className="work-list">
                <li className={`work-item ${refItem1InView1? "active" : ""}`} ref={refItem1}>
                    <div className="item-title-cont">
                        <span className="item-num">01</span>
                        <h3 className="item-title">{t('work.subTitleOne')}</h3>
                    </div>
                    <p className="work-item-text">{t('work.textOne')}</p>
                </li>
                <li className={`work-item ${refItem1InView2? "active" : ""}`} ref={refItem2}>
                    <div className="item-title-cont">
                        <span className="item-num">02</span>
                        <h3 className="item-title">{t('work.subTitleTwo')}</h3>
                    </div>
                    <p className="work-item-text">{t('work.textTwo')}</p>
                </li>
                <li className={`work-item ${refItem1InView3? "active" : ""}`} ref={refItem3}>
                    <div className="item-title-cont">
                        <span className="item-num">03</span>
                        <h3 className="item-title">{t('work.subTitleThree')}</h3>
                    </div>
                    <p className="work-item-text">{t('work.textThree')}</p>
                </li>
                <li className={`work-item ${refItem1InView4? "active" : ""}`} ref={refItem4}>
                    <div className="item-title-cont">
                        <span className="item-num">04</span>
                        <h3 className="item-title">{t('work.subTitleFour')}</h3>
                    </div>
                    <p className="work-item-text">{t('work.textFour')}</p>
                </li>
                {!renderMob && (
                    <li className="work-item">
                        <div className="item-title-cont">
                            <span className="item-num">05</span>
                            <h3 className="item-title">{t('work.subTitleFive')}</h3>
                        </div>
                        <p className="work-item-text">{t('work.textFive')}</p>
                    </li>
                )}
                <li className={`work-item ${refItem1InView5? "active" : ""}`} ref={refItem5}>
                    <div className="item-title-cont">
                        <span className="item-num">05</span>
                        <h3 className="item-title">{t('work.subTitleFive')}</h3>
                    </div>
                    <p className="work-item-text">{t('work.textFive')}</p>
                </li>
            </ul>
        </WorksStyled>
    );
});