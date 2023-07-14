import { IRowContentProps } from "./types";
import { JSX } from "react/jsx-runtime";
import { ContentWrapper, ImageWrapper, PageColumn } from "./styles";
import ZOBox from "../../molecules/ZOBox/ZOBox";


const RowContent = ({ content, imageSrc, height, width, children }: IRowContentProps): JSX.Element => {
    return (
        <PageColumn style={{height: height, width: width}}>
            <ContentWrapper>
                <ZOBox
                    height={'100%'}
                    width={'100%'}
                    content={content}
                />
            </ContentWrapper>
            <ImageWrapper>
                <img
                    style={{ 
                        height: '80%', 
                        borderRadius: '20px',
                        boxShadow: '-10px 10px 10px rgba(15,34,45,10)' }}
                    src={imageSrc} 
                    loading="lazy" 
                    alt="logo"
                />
            </ImageWrapper>
        </PageColumn>
    );
}
export default RowContent