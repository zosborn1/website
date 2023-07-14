import { JSX } from "react/jsx-runtime";
import { PageColorWrapper } from "../../../styles/global-styles";
import { IAboutProps } from "./types";
import { Typography } from "@mui/material";
import { 
    AboutPageWrapper, 
    AboutContentWrapper, 
    AboutImageWrapper, 
    ContentContainer,
    ContentColumn,
    SubHeader,
    SubInfo
} from "./styles";
import ZOBox from "../../molecules/ZOBox/ZOBox";

import travel from '../../../assets/travel.jpeg';
import maisie from '../../../assets/maisie.jpeg';
import skydiving from '../../../assets/skydiving.jpg';
import uwMadison from '../../../assets/uwMadison.png';

const About = ({ children }: IAboutProps): JSX.Element => {

    const AboutContent = [
        <ContentContainer>
            <ContentColumn>
                <SubHeader>
                    Collage Info
                </SubHeader>
                <SubInfo>
                    - Senior at UW-Madison
                </SubInfo>
                <SubInfo>
                    - BS in Computer Science
                </SubInfo>
                <SubInfo>
                    - Graduate May, 2024
                </SubInfo>
            </ContentColumn>
            <ContentColumn>
                <SubHeader>
                    Fun Facts
                </SubHeader>
                <SubInfo>
                    - Love to travel with wife, been to 15 countries
                </SubInfo>
                <SubInfo>
                    - Have a diabetic cat named Maisie
                </SubInfo>
                <SubInfo>
                    - Have been skydiving for 6 years and am close to 500 jumps
                </SubInfo>
            </ContentColumn>
        </ContentContainer>
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
                        height='auto'
                        width='70%'
                        content={AboutContent}
                    />

                </AboutContentWrapper>
            </AboutPageWrapper>
        </PageColorWrapper>
    );
}
export default About