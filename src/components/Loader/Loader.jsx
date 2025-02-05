import { LoaderStyled } from "./Loader.styled";
import { ThreeCircles } from 'react-loader-spinner'


export const Loader = () => {


    return(
        <LoaderStyled>
            <ThreeCircles
                visible={true}
                height="150"
                width="150"
                color="#e7ffcb"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </LoaderStyled>

    );
};