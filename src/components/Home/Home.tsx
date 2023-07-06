import { JSX } from "react/jsx-runtime";
import Navbar from "../Navbar/Navbar"
import { IHomeProps } from "./types";

const Home = ({ children }: IHomeProps): JSX.Element => {

    return (
        <Navbar/>
    );
}
export default Home