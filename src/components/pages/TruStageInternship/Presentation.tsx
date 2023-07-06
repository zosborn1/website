import { JSX } from "react/jsx-runtime";
import Navbar from "../../organisms/Navbar/Navbar"
import { IPresentationProps } from "./types";
import { PageColorWrapper } from "../../../styles/global-styles";

const Presentation = ({ children }: IPresentationProps): JSX.Element => {
    return (
        <PageColorWrapper>
            <Navbar/>
        </PageColorWrapper>
    );
}
export default Presentation