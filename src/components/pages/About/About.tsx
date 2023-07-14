import { JSX } from "react/jsx-runtime";
import { PageColorWrapper } from "../../../styles/global-styles";
import { IAboutProps } from "./types";
import { Typography } from "@mui/material";
import { AboutPageWrapper, AboutContentWrapper, AboutImageWrapper } from "./styles";
import ZOBox from "../../molecules/ZOBox/ZOBox";

import travel from '../../../assets/travel.jpeg';
import maisie from '../../../assets/maisie.jpeg';
import skydiving from '../../../assets/skydiving.jpg';

const About = ({ children }: IAboutProps): JSX.Element => {

    const Main = [
        <>
            <Typography
                variant="h4"
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
            <AboutPageWrapper>
                <AboutImageWrapper>
                    <img
                        style={{ 
                            position: 'relative',
                            height: '100%', 
                            borderRadius: '20px',
                            boxShadow: '-10px 10px 10px rgba(15,34,45,10)' }}
                        src={travel} 
                        loading="lazy" 
                        alt="logo"
                    />
                    <img
                        style={{ 
                            position: 'relative',
                            height: '100%', 
                            borderRadius: '20px',
                            boxShadow: '-10px 10px 10px rgba(15,34,45,10)' }}
                        src={maisie} 
                        loading="lazy" 
                        alt="logo"
                    />
                    <img
                        style={{ 
                            position: 'relative',
                            height: '100%', 
                            borderRadius: '20px',
                            boxShadow: '-10px 10px 10px rgba(15,34,45,10)' }}
                        src={skydiving} 
                        loading="lazy" 
                        alt="logo"
                    />
                </AboutImageWrapper>
                <AboutContentWrapper>
                    <ZOBox
                        height='90%'
                        width='70%'
                    />

                </AboutContentWrapper>
            </AboutPageWrapper>
        </PageColorWrapper>
    );
}
export default About