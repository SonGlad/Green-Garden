import styled from "styled-components";


export const StyledAnimation = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: transparent;
    top: 0;
    left: 0;
    z-index: -1;
    animation: rise 3s linear;

    @keyframes rise {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`