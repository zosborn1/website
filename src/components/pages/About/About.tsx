import { JSX } from "react/jsx-runtime";
import { IAboutProps } from "./types";
import { 
    AboutPageWrapper, 
    AboutContentWrapper, 
    AboutImageWrapper,
    ContentContainer,
    ContentColumn,
} from "./styles";
import ZOBox from "../../molecules/ZOBox/ZOBox";

import travel from '../../../assets/travel.jpeg';
import maisie from '../../../assets/maisie.jpeg';
import skydiving from '../../../assets/skydiving.jpg';
import { SubHeader, SubInfo } from "../../../styles/global-styles";

const About = ({ children }: IAboutProps): JSX.Element => {

    const AboutContent = [
        <ContentContainer>
            <ContentColumn>
                <SubHeader>
                    College Info
                </SubHeader>
                <SubInfo>
                    - Senior at UW-Madison
                </SubInfo>
                <SubInfo>
                    - BS in Computer Science
                </SubInfo>
                <SubInfo>
                    - Graduating May 2024
                </SubInfo>
            </ContentColumn>
            <ContentColumn>
                <SubHeader>
                    Fun Facts
                </SubHeader>
                <SubInfo>
                    - I love to travel with my wife, I have been to 15 countries
                </SubInfo>
                <SubInfo>
                    - I have a 9-year old, diabetic cat, named Maisie.
                </SubInfo>
                <SubInfo>
                    - I have been skydiving for 6 years and have completed 470 jumps.
                </SubInfo>
            </ContentColumn>
        </ContentContainer>
    ]

    return (
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
                    height='100%'
                    width='70%'
                    content={AboutContent}
                />

            </AboutContentWrapper>
        </AboutPageWrapper>
    );
}
export default About