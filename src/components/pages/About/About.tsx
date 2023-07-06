import { JSX } from "react/jsx-runtime";
import { PageColorWrapper } from "../../../styles/global-styles";
import { IAboutProps } from "./types";
import Navbar from "../../organisms/Navbar/Navbar";

const Home = ({ children }: IAboutProps): JSX.Element => {
    return (
        <PageColorWrapper>
            <Navbar/>
        </PageColorWrapper>
    );
}
export default Home