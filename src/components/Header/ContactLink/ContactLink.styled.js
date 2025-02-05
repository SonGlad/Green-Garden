import styled from "styled-components";


export const ContactLinkStyled = styled.div`
    width: ${props => props.$footer ? "100%" : "90%"};
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px){
        width: 100%;
    }
    
    .contact-menu-link{
        width: 100%;
        display: block;
        font-weight: ${p => p.$footer ? '400': "500"};
        padding: ${props => props.$footer ? "10px 30px" : "15px"};
        border-radius: 10px;
        border: 1px solid ${(p) => p.theme.color.logo_green_color};
        color: ${(p) => p.theme.color.text_color2};
        background-color: ${(p) => p.theme.color.body_bg_color};
        font-size: 14px;
        line-height: 14px;
        transition: color ${p => p.theme.transition.main_transition},
                    background-color ${p => p.theme.transition.main_transition},
                    outline ${p => p.theme.transition.main_transition};

        @media screen and (min-width: 768px){
            padding: ${props => props.$footer ? "10px 30px" : "5px 10px"};
            font-size: ${p => p.$footer ? "20px" : "14px"};
            border-radius: ${p => p.$footer ? "30px" : "10px"};
            text-align: center;
            text-decoration: none;
            width: 168px;
        }

        @media screen and (min-width: 1280px){
            padding: ${props => props.$footer ? "10px 40px" : "10px 15px"};
            line-height: 22px;
            font-size: 20px;
            border-radius: 30px;
            width: fit-content;
        }  

        &:hover{
            background-color: ${(props) => props.theme.color.hover_color};
            border: 1px solid ${(p) => p.theme.color.hover_color};  
        }
    }
`