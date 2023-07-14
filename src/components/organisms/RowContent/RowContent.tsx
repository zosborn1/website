import { IRowContentProps } from "./types";
import { JSX } from "react/jsx-runtime";
import { ContentWrapper, ImageWrapper, PageColumn } from "./styles";
import ZOBox from "../../molecules/ZOBox/ZOBox";


const RowContent = ({ 
    content, 
    imageSrc, 
    rowHeight, 
    rowWidth, 
    contentHeight,
    contentWidth,
    imageHeight,
    children 
}: IRowContentProps): JSX.Element => {
    return (
        <PageColumn style={{height: rowHeight, width: rowWidth }}>
            <ContentWrapper style={{height: contentHeight, width: contentWidth}}>
                <ZOBox
                    height={'100%'}
                    width={'100%'}
                    content={content}
                />
            </ContentWrapper>
            <ImageWrapper style={{height: imageHeight}}>
                <img
                    style={{ 
                        height: 'inherit', 
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