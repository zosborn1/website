import { SubHeader } from "../../../styles/global-styles";
import { ILessonsSlideProps } from "./types"

const LessonsSlide = ({ children }: ILessonsSlideProps): JSX.Element => {


    return (
        <>
            <SubHeader>
                Lessons learned during this internship
            </SubHeader>
        </>
    )
}
export default LessonsSlide;