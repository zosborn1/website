import { JSX } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import Presentation from "../components/pages/TruStageInternship/Presentation";
import { PageColorWrapper } from "../styles/global-styles";

const RouterHash = (): JSX.Element | null => {
    return (
        <>
            <PageColorWrapper>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/presentation" element={<Presentation/>} />
                </Routes>
            </PageColorWrapper>
        </>
    );
}
export default RouterHash;