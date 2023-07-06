import { JSX } from "react/jsx-runtime";
import { SCRoutesWrapper } from "./styles";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About";
import Presentation from "../components/Presentation";

const RouterHash = (): JSX.Element | null => {
    return (
        <SCRoutesWrapper>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/presentation" element={<Presentation/>} />
            </Routes>
        </SCRoutesWrapper>
    );
}
export default RouterHash;