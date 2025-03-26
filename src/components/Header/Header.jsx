import { HeaderStyled } from "./Header.styled";
import { Container } from "../Container/Container";
import Logo from "../../images/images/Logo2.webp";
import { NavLink } from "react-router-dom";
import { ReactComponent as MobileBurger} from "../../images/svg/burger.svg";
import { ReactComponent as ArrowDown } from "../../images/svg/arrowDown.svg";
import { ReactComponent as CloseIcon} from "../../images/svg/close.svg";
import { useState, useRef, useCallback, useEffect, forwardRef } from "react";
import { NavLinks } from "./NavLinks/NavLink";
import { ContactLink } from "./ContactLink/ContactLink";
import ScrollIntoView from 'react-scroll-into-view';
import { useTranslation } from 'react-i18next';
import useWindowSize from "../../custom-hooks/hooks";



export const Header = forwardRef(({
    serviceskSectionRef, 
    aboutSectionRef, 
    workSectionRef,
    footerRef,
    langArray,
    langToShow,
    langMenu,
    setLangMenu,
    choseLang,
    hebrew,
    setNavigationIndex,
    setNavigateToIndex,
    }, ref) => {
    const [isMobMenuActive, setMobMenuActive] = useState(false);
    const langCont = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useTranslation();
    const { renderMob } = useWindowSize();
      

    
    const toggleLangMenuOpen = () => {
        setLangMenu(prevState => !prevState);
    };


    const setMobileMenuActive = (event) => {
        setMobMenuActive(prevState => !prevState);
        if (!isMobMenuActive) {
            event.stopPropagation();
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const toggleLangMenu = () => {
        return langMenu ? 'visible' : '';
    };

    const toggleLangButtonStyled = () => {
        return langMenu ? 'active' : '';
    };

    const toggleMobileStyled = () => {
        return isMobMenuActive ? 'is-mob-menu-active' : '';
    };



    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            if(langMenu){
                setLangMenu(false);
            }
        }
    },[langMenu, setLangMenu]);


    const onBackdropClick = useCallback(event => {
        if(langCont.current && !langCont.current.contains(event.target)){                        
            setLangMenu(false);
        }
    },[setLangMenu]);


    const handleScroll = useCallback(() => {
        if (window.scrollY > 60) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    },[]);


    useEffect(() => {
        document.addEventListener('click', onBackdropClick);
        document.addEventListener('keydown', handleKeyPress);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener('click', onBackdropClick);
            document.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener("scroll", handleScroll);
        }
    },[handleKeyPress, onBackdropClick, handleScroll]);



    return (
        <HeaderStyled $isScrolled={isScrolled} $hebrew={hebrew}>
            <Container>
                <div className="header-container">
                    <ScrollIntoView selector="#HeroSection">
                        <img className="header-logo" src={Logo} alt="logo" width={60} height={55}/> 
                    </ScrollIntoView>
                    <div className="desctop-menu">
                        <NavLinks
                            serviceskSectionRef={serviceskSectionRef}
                            aboutSectionRef={aboutSectionRef}
                            workSectionRef={workSectionRef}
                            footerRef={footerRef}
                            hebrew={hebrew}
                            setNavigateToIndex={setNavigateToIndex}
                            setNavigationIndex={setNavigationIndex}
                        />
                    </div>
                    <div className="lang-cont" ref={langCont}>
                        <button type='button' 
                            className={`lang-button ${toggleLangButtonStyled()}`} 
                            aria-label="Language Button" 
                            onClick={toggleLangMenuOpen}
                            aria-expanded="false"
                            aria-controls="language-button"
                        >
                            <p className="lang-text">{langToShow}</p>
                            <ArrowDown className="arrow-svg" width={16} height={16}/>
                        </button>
                        <ul className={`lang-drop-list ${toggleLangMenu()}`}>
                            {langArray.filter(({ lang }) => lang !== langToShow).map(({lang}, index) => (
                                <li key={index} className="lang-drop-item" onClick={() => choseLang(lang)}>
                                    <p>{lang}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {renderMob && (
                        <div className="mobile-nav-cont">
                            <button type="button" 
                                className="burger-button" 
                                aria-label="Mobile Menu Button"
                                onClick={setMobileMenuActive}
                                aria-expanded="false"
                                aria-controls="mobile-nav-button"
                            >
                                <MobileBurger className="burger-svg" width={36} height={36}/>
                            </button>
                            <div className={`mob-menu ${toggleMobileStyled()}`}>
                                <div className="mobile-logo-cont">
                                    <NavLink to={"/"} onClick={setMobileMenuActive}>
                                        <img className="mobile-header-logo" src={Logo} alt="logo" width={80} height={74}/> 
                                    </NavLink>
                                </div>
                                <button type="button" 
                                    className="close-btn" 
                                    aria-label="Close Mobile Menu Button"
                                    onClick={setMobileMenuActive}
                                    aria-expanded="false"
                                    aria-controls="burger-menu-close-button"
                                >
                                    <CloseIcon className="close-svg" width={24} height={24}/>
                                </button>
                                <NavLinks
                                    setMobileMenuActive={setMobileMenuActive}
                                    hebrew={hebrew}
                                />
                                <p className="menu-description">{t('header.description')}</p>
                                <ContactLink
                                    hebrew={hebrew}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </HeaderStyled>
    )
});