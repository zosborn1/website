import { JSX } from "react/jsx-runtime";
import { IPresentationProps } from "./types";
import { SubInfo } from "../../../styles/global-styles";
import ZOBox from "../../molecules/ZOBox/ZOBox";
import { 
    ButtonWrapper,
    PresentationContentWrapper,
    PresentationNavWrapper, 
    PresentationPageWrapper 
} from "./styles";
import React from "react";
import { Button } from "@mui/material";
import { inherits } from "util";


const Presentation = ({ children }: IPresentationProps): JSX.Element => {

    const Team = [
        <>
            <SubInfo>
                team
            </SubInfo>
        </>
    ]
    const Goals = [
        <>
            <SubInfo>
                Goals
            </SubInfo>
        </>
    ]
    const Lessons = [
        <>
            <SubInfo>
                Lessons
            </SubInfo>
        </>
    ]
    const Final = [
        <>
            <SubInfo>
                Final
            </SubInfo>
        </>
    ]

    const [currentSlide, setCurrentSlide] = React.useState(Team);

    const slides = [
        {id: 1, label: 'General Info', content: Team},
        {id: 2, label: 'Goals/Accomplishments', content: Goals},
        {id: 3, label: 'Lessons Learned', content: Lessons},
        {id: 4, label: 'Final Comments', content: Final}
    ]

    return (
        <PresentationPageWrapper>
            <PresentationNavWrapper>
                {slides.map((section) => (
                    <ButtonWrapper>
                        <Button
                            style={{
                                height: 'inherit',
                                width: 'inherit',
                                fontSize: '25px',
                                background: 'rgb(245,95,57,255)',
                                border: '1px solid rgb(78,47,48,255)',
                                borderRadius: '15px'
                            }}
                            color='inherit'
                            size="large"
                            variant="contained"
                            onClick={() => {
                                setCurrentSlide(section.content);
                            }}
                        >
                            {section.label}
                        </Button>
                    </ButtonWrapper>
                ))}
            </PresentationNavWrapper>
            <PresentationContentWrapper>
                <ZOBox
                    height="80%"
                    width="90%"
                    content={currentSlide}
                />
            </PresentationContentWrapper>
        </PresentationPageWrapper>
    );
}
export default Presentation