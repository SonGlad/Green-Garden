import { ContactStyledButton } from "./ContactButton.styled";
import { useTranslation } from 'react-i18next';
import {ReactComponent as WhatsAppIcon} from "../../images/svg/whatsApp.svg";
import { useState, useCallback, useEffect } from "react";



export const ContactButton = ({hebrew}) => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAnimation, setAnimation] = useState(false);


    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (scrollTop > 400 && fullHeight - (scrollTop + windowHeight) > 250) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    },[]);



    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[handleScroll]);



    useEffect(() => {
        if (isScrolled) {
            setAnimation(true);
    
            const interval = setInterval(() => {
                setAnimation(false);
    
                setTimeout(() => {
                    setAnimation(true);
                }, 100);
            }, 6500);
    
            return () => clearInterval(interval);
        } else {
            setAnimation(false);
        }
    }, [isScrolled]);
    



    const phoneNumber = `${t('header.contactUsNumber')}`;
    const message = encodeURIComponent(t('header.contactUsTextMessage'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;



    return(
        <>
            {isScrolled && (
                <ContactStyledButton $hebrew={hebrew} href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <WhatsAppIcon className={`whatsapp-icon ${isAnimation ? "icon-animation" : ""}`} width={20} height={20}/>
                </ContactStyledButton>      
            )}
        </>
    )
};