import { JSX } from "react/jsx-runtime";
import { IHomeProps } from "./types";
import { PageColorWrapper } from "../../../styles/global-styles";
import ZOBox from "../../organisms/ZOBox/ZOBox";
import { Break, ContentCenter, ImageWrapper, PageColumn, PageRow } from "./styles";
import photo from '../../../assets/photo.jpg';

const Home = ({ children }: IHomeProps): JSX.Element => {
    return (
        <PageColorWrapper>
            <PageRow>
                <PageColumn>
                    <ContentCenter>
                        <ZOBox

                        >
                        </ZOBox>
                    </ContentCenter>
                </PageColumn>
                <PageColumn>
                    <ImageWrapper>
                        <img
                            style={{ 
                                height: '600px', 
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