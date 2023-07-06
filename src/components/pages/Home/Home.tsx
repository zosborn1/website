import { JSX } from "react/jsx-runtime";
import Navbar from "../../organisms/Navbar/Navbar"
import { IHomeProps } from "./types";
import { HomePageWrapper } from "./styles";

const Home = ({ children }: IHomeProps): JSX.Element => {
    return (
        <HomePageWrapper>
            <Navbar/>
        </HomePageWrapper>
    );
}
export default Home