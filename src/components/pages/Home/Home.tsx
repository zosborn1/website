import { JSX } from "react/jsx-runtime";
import { IHomeProps } from "./types";
import { PageColorWrapper } from "../../../styles/global-styles";
import ZOBox from "../../organisms/ZOBox/ZOBox";
import { Break, ContentCenter, ImageWrapper, PageColumn, PageRow } from "./styles";
import photo from '../../../assets/photo.jpg';
import { Typography } from "@mui/material";

const Home = ({ children }: IHomeProps): JSX.Element => {

    const WelcomeContent = [
        <>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Welcome
            </Typography>
            <br />
            <Typography variant="h4" align="center" color="rgba(235,231,217,255)" paragraph>
                Please click the tabs above:
            </Typography>
            <Typography variant="h6" align="left" color="rgba(235,231,217,255)" paragraph>
                - About - to learn more about me
            </Typography>
            <Typography variant="h6" align="left" color="rgba(235,231,217,255)" paragraph>
                - Presentation - to learn about my current internship at Trustage
            </Typography>
        </>
    ]
    return (
        <PageColorWrapper>
            <PageRow>
                <PageColumn>
                    <ContentCenter>
                        <ZOBox
                            height={'auto'}
                            width={'auto'}
                            content={WelcomeContent}
                        >
                        </ZOBox>
                    </ContentCenter>
                </PageColumn>
                <PageColumn>
                    <ImageWrapper>
                        <img
                            style={{ 
                                height: '90%', 
                                borderRadius: '20px',
                                boxShadow: '-10px 10px 10px rgba(15,34,45,10)' }}
                            src={photo} 
                            loading="lazy" 
                            alt="logo"
                        />
                    </ImageWrapper>
                </PageColumn>
            </PageRow>
        </PageColorWrapper>
    );
}
export default Home