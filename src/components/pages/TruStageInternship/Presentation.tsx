import { JSX } from "react/jsx-runtime";
import Navbar from "../../organisms/Navbar/Navbar"
import { IPresentationProps } from "./types";
import { PageColorWrapper } from "../../../styles/global-styles";
import { Typography } from "@mui/material";
import ZOBox from "../../organisms/ZOBox/ZOBox";

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
        <PageColorWrapper>
            <ZOBox content={Main}>
                
            </ZOBox>
        </PageColorWrapper>
    );
}
export default Presentation