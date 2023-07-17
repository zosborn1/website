import { JSX } from "react/jsx-runtime";
import { IHomeProps } from "./types";
import { PageColorWrapper, SubHeader, SubInfo } from "../../../styles/global-styles";
import { WelcomeContentWrapper } from "./styles";
import photo from '../../../assets/photo.jpg';
import RowContent from "../../organisms/RowContent/RowContent";

const Home = ({ children }: IHomeProps): JSX.Element => {

    const WelcomeContent = [
        <WelcomeContentWrapper>
            <SubHeader style={{fontSize: 60, justifySelf: 'center'}}>
                Welcome
            </SubHeader>
            <br/>
            <SubInfo style={{fontSize: 40}}>
                Please click the tabs above:
            </SubInfo>
            <SubInfo style={{fontSize: 20}}>
                - About - to learn more about myself
            </SubInfo>
            <SubInfo style={{fontSize: 20}}>
                - Presentation - to learn about my current internship at Trustage
            </SubInfo>
        </WelcomeContentWrapper>
    ]
    
    return (
        <RowContent
            content={WelcomeContent}
            rowHeight='100%'
            rowWidth='100%'
            contentHeight="60%"
            contentWidth="80%"
            imageHeight="80%"
            imageSrc={photo}
        />
    );
}
export default Home