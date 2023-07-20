import { SlideColumn, SlideRow, SubHeader, SubInfo } from "../../../styles/global-styles";
import { ILessonsSlideProps } from "./types"

const LessonsSlide = ({ children }: ILessonsSlideProps): JSX.Element => {

    return (
        <>
            <SlideColumn style={{width: '100%', height: '100%'}}>
                <SubHeader>
                    Lessons Learned
                </SubHeader>
                <SlideColumn style={{height: 'auto', width: '100%', alignItems: 'start'}}>
                    <SubHeader style={{fontSize: '20px'}}>
                        Lessons from team
                    </SubHeader>
                    <SubInfo>
                        - Develop code for the future/current Business needs
                    </SubInfo>
                    <SubInfo>
                        - Learn the Business side
                    </SubInfo>
                </SlideColumn>
                <SlideColumn style={{height: 'auto', width: '100%', alignItems: 'start'}}>
                    <SubHeader style={{fontSize: '20px'}}>
                        Lessons from Scrum Masters
                    </SubHeader>
                    <SubInfo>
                        - Create a space where people feel ok to make mistakes
                    </SubInfo>
                    <SubInfo>
                        - Manage the scrum process and block outside distractions
                    </SubInfo>
                    <SubInfo>
                        - Network and shadow
                    </SubInfo>
                </SlideColumn>
            </SlideColumn>
        </>
    )
}
export default LessonsSlide;