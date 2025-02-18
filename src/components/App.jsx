import { Header } from "./Header/Header";
import { 
  SectionHero, 
  SectionServices,
  SectionAbout, 
  SectionWorks, 
  // SectionContact, 
  Section,
  PreFooterSection ,
} from "./Section/Section";
import { Container } from "./Container/Container";
import { Backdrop } from "./Backdrop/Backdrop";
import { StyledApp } from "./App.styled";
import { HeroSection } from "./HeroSection/Hero";
import { ServiceSectionTitle } from "./ServicesSection/ServiceSectionTitle";
import { ServiceSection } from "./ServicesSection/ServiceSection";
import { AboutSectionTitle } from "./AboutSection/AboutSectionTitle";
import { About } from "./AboutSection/About";
import { WorkSectionTitle } from "./WorksSection/WorkSectiontitle";
import { Works } from "./WorksSection/Works";
import { ContactButton } from "./ContactButton/ContactButton";
// import { Contact } from "./ContactSection/Contac";
import { Footer } from "./Footer/Footer";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';



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
  const [navigateToIndex, setNavigateToIndex] = useState(null);
  const [isNavigationIndex, setNavigationIndex]= useState(false);

 
  
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
      <Backdrop hebrew={hebrew}/>
      <Header
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
        setNavigateToIndex={setNavigateToIndex}
        setNavigationIndex={setNavigationIndex}
      />
      <StyledApp>
        <SectionHero 
          propsId={'HeroSection'}
          heroSectionRef={heroSectionRef}
        >
          <Container>
            <HeroSection hebrew={hebrew}/>
          </Container>
        </SectionHero>
        <Section>
          <ServiceSectionTitle hebrew={hebrew}/>
        </Section>
        <SectionServices
          propsId={'ServiceSection'}
          serviceskSectionRef={serviceskSectionRef}
        >
          <ServiceSection 
            hebrew={hebrew}
            navigateToIndex={navigateToIndex}
            isNavigationIndex={isNavigationIndex}
            setNavigationIndex={setNavigationIndex}
          />
        </SectionServices>
        <Section>
          <AboutSectionTitle hebrew={hebrew}/>
        </Section>
        <SectionAbout
          propsId={'AboutSection'}
          aboutSectionRef={aboutSectionRef}
        >
          <Container>
            <About hebrew={hebrew}/>
          </Container>
        </SectionAbout>
        <Section>
          <WorkSectionTitle hebrew={hebrew}/>
        </Section>
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
        {/* <SectionContact
          propsId={'ContactSection'}
          contactSectionRef ={contactSectionRef }
        >
          <Container>
            <Contact/>
          </Container>
        </SectionContact> */}
        <PreFooterSection />
        <Footer
          propsId={'Footer'}
          footerRef={footerRef}
          hebrew={hebrew}
        />
      </StyledApp>
      <ContactButton hebrew={hebrew}/>
    </>
  );
}

