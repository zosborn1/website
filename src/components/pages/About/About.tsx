import { JSX } from "react/jsx-runtime";
import { PageColorWrapper } from "../../../styles/global-styles";
import { IAboutProps } from "./types";
import Navbar from "../../organisms/Navbar/Navbar";
import ZOBox from "../../organisms/ZOBox/ZOBox";
import { Typography } from "@mui/material";

const About = ({ children }: IAboutProps): JSX.Element => {

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
export default About