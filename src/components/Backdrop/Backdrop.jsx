import { StyledBackdrop } from "./Backdrop.styled";
import { LeafCanvas } from "../Animation/LeafCanvas";
import useWindowSize from "../../custom-hooks/hooks";


export const Backdrop = ({hebrew}) => {
    const { renderTab } = useWindowSize();


    return(
        <StyledBackdrop $hebrew={hebrew}>
            {!renderTab && (
                <div className="canvas-cont">
                    <LeafCanvas/>
                </div>
            )}
            <div className="gradient-cont"></div>
        </StyledBackdrop>
    )
};