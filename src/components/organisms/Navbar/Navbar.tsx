import React from 'react';
import { JSX } from "react/jsx-runtime";
import { INavBarProps } from "./types";
import { 
    LinkWrapper,
    LogoWrapper,
    NavBarHeaderContentWrapper, 
    NavbarWrapper, 
    ZOLink,
    SCHeaderContent
} from "./styles";
import logo from '../../../assets/logo.png';

const Navbar = ({ children }: INavBarProps): JSX.Element => {
    return (
        <NavbarWrapper>
            <NavBarHeaderContentWrapper >
                <SCHeaderContent>
                    <LogoWrapper>
                        <img style= {{height: undefined, width: undefined}}src={logo} loading="lazy" alt="logo"></img>
                    </LogoWrapper>
                </SCHeaderContent>

                <LinkWrapper>
                    <ZOLink to="/">Home</ZOLink>
                    <ZOLink to="/presentation">Intern Presentation</ZOLink>
                    <ZOLink to="/about">About</ZOLink>
                </LinkWrapper>
            </NavBarHeaderContentWrapper>
        </NavbarWrapper>
    )
}
export default Navbar;