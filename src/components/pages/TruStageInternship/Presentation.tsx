import { JSX } from "react/jsx-runtime";
import { IPresentationProps } from "./types";
import { 
} from "../../../styles/global-styles";
import { Typography } from "@mui/material";
import ZOBox from "../../molecules/ZOBox/ZOBox";
import { PresentationPageWrapper } from "./styles";

const Presentation = ({ children }: IPresentationProps): JSX.Element => {
    const Main = [
        <>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Currently still being worked on
            </Typography>
        </>
    ]
    return (
        <PresentationPageWrapper>
        </PresentationPageWrapper>
    );
}
export default Presentation