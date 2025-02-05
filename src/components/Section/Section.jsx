import { 
    HeroSectionStyled, 
    ServicesSectionStyled, 
    AboutSectionStyled, 
    WorksSectionStyled,
    ContactSectionStyled, 
    SectionStyled, 
} from './Section.styled';
import { forwardRef } from 'react';




export const SectionHero = forwardRef(({children, propsId, heroSectionRef},reff) => {
    return (
        <HeroSectionStyled id={propsId} ref={heroSectionRef}>
            {children}
        </HeroSectionStyled>
    );
});


export const SectionServices = forwardRef(({children, propsId, serviceskSectionRef},reff) => {
    return (
        <ServicesSectionStyled id={propsId} ref={serviceskSectionRef}>
            {children}
        </ServicesSectionStyled>
    );
});

export const SectionAbout = forwardRef(({children, propsId, aboutSectionRef},reff) => {
    return (
        <AboutSectionStyled id={propsId} ref={aboutSectionRef}>
            {children}
        </AboutSectionStyled>
    );
});

export const SectionWorks = forwardRef(({children, propsId, workSectionRef},reff) => {
    return (
        <WorksSectionStyled id={propsId} ref={workSectionRef }>
            {children}
        </WorksSectionStyled>
    );
});

export const SectionContact = forwardRef(({children, propsId, contactSectionRef},reff) => {
    return (
        <ContactSectionStyled id={propsId} ref={contactSectionRef}>
            {children}
        </ContactSectionStyled>
    );
});

export const Section = ({children}) => {
    return (
        <SectionStyled >
            {children}
        </SectionStyled>
    );
};


