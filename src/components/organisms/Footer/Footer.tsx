import { 
    FooterContainer, 
    FooterRow, 
    FooterWrapper } from "./styles";
import { IFooterProps } from "./types";

const Footer = ({ children }: IFooterProps): JSX.Element => {
    return (
        <FooterWrapper className='main-footer'>
            <FooterContainer className='container'>
                <FooterRow className='row'>

                </FooterRow>
            </FooterContainer>
        </FooterWrapper>
    )
}
export default Footer;