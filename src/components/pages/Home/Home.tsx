import { JSX } from "react/jsx-runtime";
import { IHomeProps } from "./types";
import { PageColorWrapper } from "../../../styles/global-styles";
import { WelcomeContentWrapper } from "./styles";
import photo from '../../../assets/photo.jpg';
import { Typography } from "@mui/material";
import RowContent from "../../organisms/RowContent/RowContent";

const Home = ({ children }: IHomeProps): JSX.Element => {

    const WelcomeContent = [
        <WelcomeContentWrapper>
            <Typography
                component="h1"
                variant="h2"
                align='center'
                color="text.primary"
                gutterBottom
            >
                Welcome
            </Typography>
            <br/>
            <Typography variant="h4" align="left" color="rgba(235,231,217,255)" paragraph>
                Please click the tabs above:
            </Typography>
            <Typography variant="h6" align="left" color="rgba(235,231,217,255)" paragraph>
                - About - to learn more about myself
            </Typography>
            <Typography variant="h6" align="left" color="rgba(235,231,217,255)" paragraph>
                - Presentation - to learn about my current internship at Trustage
            </Typography>
        </WelcomeContentWrapper>
    ]
    
    return (
        <PageColorWrapper>
            <RowContent
                content={WelcomeContent}
                rowHeight='100%'
                rowWidth='100%'
                contentHeight="60%"
                contentWidth="80%"
                imageHeight="80%"
                imageSrc={photo}
            />
        </PageColorWrapper>
    );
}
export default Home