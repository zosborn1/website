import { Box, Button, Modal, Typography } from "@mui/material";
import { SlideColumn, SlideRow, SubHeader, SubInfo, ZOLink } from "../../../styles/global-styles";
import { IGoalsSlideProps } from "./types"
import { GoalBox, Spacer } from "./styles";
import reactLogo from '../../../assets/logo192.png';
import psmLogo from '../../../assets/psm1.png';
import trustage from '../../../assets/trustage.png';
import React from "react";

const buttonStyle = {
    height: 'auto',
    width: 'auto',
    fontSize: '10px',
    background: 'rgb(255, 152, 100)',
    border: '1px solid rgb(78,47,48,255)',
    borderRadius: '15px',
    fontWeight: '700',
    boxShadow: '5px 5px 5px black'
};
const ModalStyle = {
    width: 'auto',
    height: 'auto',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'rgba(235,231,217,255)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const GoalsSlide = ({ children }: IGoalsSlideProps): JSX.Element => {

    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const ReactGoal = [
        <>
            <SubHeader>
                Learn React
            </SubHeader>
            <SubInfo>
                - Develop Components for DLI 
            </SubInfo>
            <SubInfo>
                - Develop Page for DLI 
            </SubInfo>
            <SubInfo>
                - Develop this site for presentation
            </SubInfo>
            <ZOLink
                to="https://paymentguard.trustagedemo.com/?did"  target="_blank"
                style={{background: '#FAE07E', color: '#193062', fontWeight: '600'}}
            >
                Click for Demo of Payment Guard
            </ZOLink>
        </>
    ]

    const ScrumMaster = [
        <>
            <SubHeader>
                Talk to / Shadow Scrum Masters
            </SubHeader>
            <SlideRow>
                <SlideColumn style={{width: '50%'}}>
                    <SubInfo>
                        - Amanda Palovcsik
                    </SubInfo>
                    <SubInfo>
                        - Audra Tormala
                    </SubInfo>
                    <SubInfo>
                        - Brian Bellin
                    </SubInfo>
                    <SubInfo>
                        - Ashlyn Bagge
                    </SubInfo>
                    <SubInfo>
                        - Cacie Robichaux
                    </SubInfo>
                    <SubInfo>
                        - Colton Goza
                    </SubInfo>
                </SlideColumn>
                <SlideColumn style={{width: '50%'}}>
                    <SubInfo style={{textDecoration: 'underline'}}>
                        Discussed
                    </SubInfo>
                    <SubInfo>
                        - Keys to being a good Scrum master
                    </SubInfo>
                    <SubInfo>
                        - Viewed how teams do retro/planning
                    </SubInfo>
                    <SubInfo>
                        - Advice for me in my future
                    </SubInfo>
                </SlideColumn>
            </SlideRow>
        </>
    ]

    const PSM = [
        <>
            <SubHeader>
                Professional Scrum Master 1
            </SubHeader>
            <SubInfo>
                - Scrum.org
            </SubInfo>
            <SubInfo>
                - 80 questions over 60 min
            </SubInfo>
            <SubInfo>
                - Passed with a 92%
            </SubInfo>
        </>
    ]

    return (
        <>
            <SubHeader>
                2nd Intern Summer goals
            </SubHeader>
            <SlideRow style={{height: '90%'}}>
                <SlideColumn style={{height: '100%', width: '33%'}}>
                    <Spacer>
                        <img                     
                            style={{ 
                            position: 'relative',
                            height: '100%'}}
                            src={reactLogo} 
                            loading="lazy" 
                            alt="logo"
                        />
                    </Spacer>
                    <br/>
                    <GoalBox>
                        <SubHeader style={{color: 'rgba(235,231,217,255)'}}>
                            Learn React
                        </SubHeader>
                        <Button 
                            sx={buttonStyle}
                            color='inherit'
                            size="large"
                            variant="contained"
                        onClick={handleOpen1}>Click to Open Goal</Button>
                        <Modal
                        open={open1}
                        onClose={handleClose1}
                        >
                            <Box sx={ModalStyle}>
                                {ReactGoal}
                            </Box>
                        </Modal>
                    </GoalBox>
                </SlideColumn>
                <SlideColumn style={{height: '100%', width: '33%'}}>
                    <GoalBox>
                        <SubHeader style={{color: 'rgba(235,231,217,255)'}}>
                            Scrum Master
                        </SubHeader>
                        <Button 
                            sx={buttonStyle}
                            color='inherit'
                            size="large"
                            variant="contained"
                        onClick={handleOpen2}>Click to Open Goal</Button>
                        <Modal
                        open={open2}
                        onClose={handleClose2}
                        >
                            <Box sx={ModalStyle}>
                                {ScrumMaster}
                            </Box>
                        </Modal>
                    </GoalBox>
                    <br/>
                    <Spacer>
                        <img                     
                            style={{ 
                            position: 'relative',
                            width: '90%'}}
                            src={trustage} 
                            loading="lazy" 
                            alt="logo"
                        />
                    </Spacer>
                </SlideColumn>
                <SlideColumn style={{height: '100%', width: '33%'}}>
                    <Spacer>
                        <img                     
                            style={{ 
                            position: 'relative',
                            height: '100%'}}
                            src={psmLogo} 
                            loading="lazy" 
                            alt="logo"
                        />
                    </Spacer>
                    <br/>
                    <GoalBox>
                        <SubHeader style={{color: 'rgba(235,231,217,255)'}}>
                            Pass PSM 1
                        </SubHeader>
                        <Button 
                            sx={buttonStyle}
                            color='inherit'
                            size="large"
                            variant="contained"
                        onClick={handleOpen3}>Click to Open Goal</Button>
                        <Modal
                        open={open3}
                        onClose={handleClose3}
                        >
                            <Box sx={ModalStyle}>
                                {PSM}
                            </Box>
                        </Modal>
                    </GoalBox>
                </SlideColumn>
            </SlideRow>
        </>
    )
}
export default GoalsSlide;