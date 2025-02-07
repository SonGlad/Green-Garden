import { StyledBackdrop } from "./Backdrop.styled";
import { LeafCanvas } from "../Animation/LeafCanvas";


export const Backdrop = ({hebrew}) => {



    return(
        <StyledBackdrop $hebrew={hebrew}>
            <div className="canvas-cont">
                <LeafCanvas/>
            </div>
            <div className="gradient-cont"></div>
        </StyledBackdrop>
    )
};