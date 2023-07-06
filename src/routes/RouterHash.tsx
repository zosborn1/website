import { JSX } from "react/jsx-runtime";
import { SCRoutesWrapper } from "./styles";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import Presentation from "../components/pages/TruStageInternship/Presentation";

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