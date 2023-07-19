import { JSX } from "react/jsx-runtime";
import { IPresentationProps } from "./types";
import { SubInfo } from "../../../styles/global-styles";
import ZOBox from "../../molecules/ZOBox/ZOBox";
import { 
    ButtonWrapper,
    PresentationContentWrapper,
    PresentationNavWrapper, 
    PresentationPageWrapper, 
    SlideWrapper
} from "./styles";
import React from "react";
import { Button } from "@mui/material";
import TeamSlide from "../../molecules/TeamSlide/TeamSlide";
import GoalsSlide from "../../molecules/GoalsSlide/GoalsSlide";
import LessonsSlide from "../../molecules/LessonsSlide/LessonsSlide";
import FinalSlide from "../../molecules/FinalSlide/FinalSlide";

const Presentation = ({ children }: IPresentationProps): JSX.Element => {

    const Team = [
        <SlideWrapper>
            <TeamSlide/>
        </SlideWrapper>
    ]
    const Goals = [
        <SlideWrapper>
            <GoalsSlide/>
        </SlideWrapper>
    ]
    const Lessons = [
        <SlideWrapper>
            <LessonsSlide/>
        </SlideWrapper>
    ]
    const Final = [
        <SlideWrapper>
            <FinalSlide/>
        </SlideWrapper>
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
                                background: 'rgb(255, 152, 100)',
                                border: '1px solid rgb(78,47,48,255)',
                                borderRadius: '15px',
                                fontWeight: '700'
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