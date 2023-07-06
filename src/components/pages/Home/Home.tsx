import { JSX } from "react/jsx-runtime";
import Navbar from "../../organisms/Navbar/Navbar"
import { IHomeProps } from "./types";
import { PageColorWrapper } from "../../../styles/global-styles";

const Home = ({ children }: IHomeProps): JSX.Element => {
    return (
        <PageColorWrapper>
            <Navbar/>
        </PageColorWrapper>
    );
}
export default Home