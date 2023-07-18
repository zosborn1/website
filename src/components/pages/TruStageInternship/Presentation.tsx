import { JSX } from "react/jsx-runtime";
import { IPresentationProps } from "./types";
import { SubInfo, ZOLink } from "../../../styles/global-styles";
import { Button, Typography } from "@mui/material";
import ZOBox from "../../molecules/ZOBox/ZOBox";
import { 
    PresentationContentWrapper,
    PresentationNavWrapper, 
    PresentationPageWrapper 
} from "./styles";
import React, { useState } from "react";
import ZOButton from "../../molecules/ZOButton/ZOButton";


interface IContent {
    label: string;
    content: JSX.Element;
}
interface ISlides {
    IContent: [];
}


const Presentation = ({ children }: IPresentationProps): JSX.Element => {
    const [currentSlide, setCurrentSlide] = React.useState<ISlides>();

    const Team = [
        <>
        </>
    ]
    const Goals = [
        <>
        </>
    ]
    const Lessons = [
        <>
        </>
    ]
    const Final = [
        <>
        </>
    ]

    const slides = [
        {label: 'General Info', content: Team},
        {label: 'Goals/Accomplishments', content: Goals},
        {label: 'Lessons Learned', content: Lessons},
        {label: 'Final Comments', content: Final}
    ]

    return (
        <PresentationPageWrapper>
            <PresentationNavWrapper>
                {slides.map((section) => (
                    <ZOButton
                        fontSize="40px"
                        label={section.label}
                        onClick={() => {
                            setCurrentSlide(section.content);
                        }}
                    />
                ))}
            </PresentationNavWrapper>
            <PresentationContentWrapper>
                <ZOBox
                    height="80%"
                    width="90%"

                />
            </PresentationContentWrapper>
        </PresentationPageWrapper>
    );
}
export default Presentation