import { SlideColumn, SubHeader, SubInfo } from "../../../styles/global-styles";
import { IFinalSlideProps } from "./types"

const FinalSlide = ({ children }: IFinalSlideProps): JSX.Element => {

    return (
        <>
            <SlideColumn style={{width: '100%', height: '100%'}}>
                <SubHeader>
                    Final Comments about Internship
                </SubHeader>
                <SlideColumn style={{height: 'auto', width: '100%', alignItems: 'start'}}>
                    <SubHeader style={{fontSize: '20px'}}>
                        Was it what you expected?
                    </SubHeader>
                    <SubInfo>
                        - More then what I expected. 
                    </SubInfo>
                </SlideColumn>
                <SlideColumn style={{height: 'auto', width: '100%', alignItems: 'start'}}>
                    <SubHeader style={{fontSize: '20px'}}>
                        What words of wisom do you have for future interns? 
                    </SubHeader>
                    <SubInfo>
                        - Find a position in IT that fits you and your goals. 
                    </SubInfo>
                </SlideColumn>
                <SlideColumn style={{height: 'auto', width: '100%', alignItems: 'start'}}>
                    <SubHeader style={{fontSize: '20px'}}>
                        Could you see yourself working at TruStage? If yes, what type of Role? 
                    </SubHeader>
                    <SubInfo>
                        - Yes, I see myself as either a scrum master or a front-end developer.  
                    </SubInfo>
                </SlideColumn>
            </SlideColumn>
        </>
    )
}
export default FinalSlide;