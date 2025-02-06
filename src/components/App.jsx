import { Header } from "./Header/Header";
import { 
  SectionHero, 
  // SectionAbout, 
  // SectionContact, 
  // SectionWorks, 
  // SectionServices 
} from "./Section/Section";
// import { StyledApp } from "./App.styled";
import { Container } from "./Container/Container";
import { HeroSection } from "./HeroSection/Hero";
// import { Services } from "./ServicesSection/Services";
// import { About } from "./AboutSection/About";
// import { Works } from "./WorksSection/Works";
// import { Contact } from "./ContactSection/Contac";
// import { Footer } from "./Footer/Footer";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
// import { Animation } from "./Animation/Animation";



export const App = () => {
  const heroSectionRef = useRef(null);
  const serviceskSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const workSectionRef = useRef(null);
  const footerRef = useRef(null);

  const [langMenu, setLangMenu] = useState(false);
  const { i18n } = useTranslation();
  const savedLang = localStorage.getItem('language');
  const initialLang = savedLang || i18n.language.split('-')[0].toUpperCase();
  const [langValue, setLangValue] = useState(initialLang);
  const [langToShow, setLangToShow] = useState(initialLang);
  const [hebrew, setHebrew] = useState(false);
  console.log(hebrew);
  
  const langArray = [
    {'lang': 'EN'},
    {'lang': 'RU'},
    {'lang': 'HE'},
  ];

  useEffect(() => {
    localStorage.setItem('language', langValue);
    i18n.changeLanguage(langValue.toLowerCase());
  },[i18n, langValue]);


  useEffect(() => {
    const languageCode = langValue.split('-')[0];
    setLangToShow(languageCode);
    setHebrew(languageCode === 'HE');
  },[langValue]);


  const choseLang = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setLangValue(lang);
    setLangMenu(false);
  };
 


  return (
    <>
    {/* <Animation/> */}
      <Header
        heroSectionRef={heroSectionRef}
        aboutSectionRef={aboutSectionRef}
        serviceskSectionRef={serviceskSectionRef}
        footerRef={footerRef}
        workSectionRef ={workSectionRef}
        langMenu={langMenu}
        langArray={langArray}
        langToShow={langToShow}
        setLangMenu={setLangMenu}
        choseLang={choseLang}
        hebrew={hebrew}
      />
      <SectionHero 
        propsId={'HeroSection'}
        heroSectionRef={heroSectionRef}
      >
        <Container>
          <HeroSection
            hebrew={hebrew}
          />
        </Container>
      </SectionHero>
      {/* <StyledApp>
        <span className="left-skew"></span>
        <span className="right-skew"></span>
        <span className="service-logo"></span>
        <SectionServices
          propsId={'ServiceSection'}
          serviceskSectionRef={serviceskSectionRef}
        >
          <Container>
            <Services
              hebrew={hebrew}
            />
          </Container>
        </SectionServices>
        <SectionAbout
          propsId={'AboutSection'}
          aboutSectionRef={aboutSectionRef}
        >
          <Container>
            <About
              hebrew={hebrew}
            />
          </Container>
        </SectionAbout>
        <SectionWorks
          propsId={'WorksSection'}
          workSectionRef={workSectionRef}
        >
          <Container>
            <Works
              hebrew={hebrew}
            />
          </Container>
        </SectionWorks>
        <SectionContact
          propsId={'ContactSection'}
          contactSectionRef ={contactSectionRef }
        >
          <Container>
            <Contact/>
          </Container>
        </SectionContact>
        <Footer
          propsId={'Footer'}
          footerRef={footerRef}
          hebrew={hebrew}
        />
      </StyledApp> */}
    </>
  );
}

