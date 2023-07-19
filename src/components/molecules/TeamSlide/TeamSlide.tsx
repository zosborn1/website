import { SubHeader, SubInfo, ZOLink } from "../../../styles/global-styles";
import { SlideColumn, SlideRow } from "./styles";
import { ITeamSlideProps } from "./types"
import cyberShark from '../../../assets/cyberShark.png';

const TeamSlide = ({ children }: ITeamSlideProps): JSX.Element => {

    return (
        <>
            <SubHeader>
                Team Information
            </SubHeader>
            <SlideRow style={{height: '35%'}}>
                <SlideColumn>
                    <SubInfo>
                        IT Talent Manager: Eric Russell
                    </SubInfo>
                    <SubInfo>
                        IT Mentor: Chamath Guneratne
                    </SubInfo>
                    <SubInfo>
                        Team Buddy: Ryan Fries
                    </SubInfo>
                    <SubInfo>
                        Plus many others...
                    </SubInfo>
                </SlideColumn>
                <img
                    style={{ 
                        position: 'relative',
                        height: '100%'}}
                    src={cyberShark} 
                    loading="lazy" 
                    alt="logo"
                />
            </SlideRow>
            <SubHeader>
                Team Responsibilities
            </SubHeader>
            <SlideRow>
                <SlideColumn>
                    <SubInfo>
                        PAX - Protection Advisor Expert
                    </SubInfo>
                    <SubInfo>
                        DLI - Digital Lending Insurance
                    </SubInfo>
                    <ZOLink
                        to="https://paymentguard.trustagedemo.com/?did"  target="_blank"
                        style={{background: '#FAE07E', color: '#193062', fontWeight: '600'}}
                    >
                        Demo of Payment Guard
                    </ZOLink>
                </SlideColumn>
            </SlideRow>
        </>
    )
}
export default TeamSlide;