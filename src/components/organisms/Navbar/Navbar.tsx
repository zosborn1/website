import React from 'react';
import { JSX } from "react/jsx-runtime";
import { INavBarProps } from "./types";
import { 
    LinkWrapper,
    NavBarHeaderContentWrapper, 
    NavbarWrapper, 
    ZOLink
} from "./styles";
import logo from 'src/assets/fullNameLogo.png';
import { Box } from '@mui/material';

const Navbar = ({ children }: INavBarProps): JSX.Element => {
    return (
        <NavbarWrapper>
            <NavBarHeaderContentWrapper>
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