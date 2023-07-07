import React, { useState } from 'react';
import { JSX } from "react/jsx-runtime";
import { INavBarProps } from "./types";
import { 
    LinkWrapper,
    NavBarHeaderContentWrapper, 
    NavbarWrapper, 
    ZOLink,
    HeaderImageWrapper,
    MenuWrapper
} from "./styles";
import logo from '../../../assets/navLogo.jpg';
import Hamburger from 'hamburger-react'
import { inherits } from 'util';
import { AppBar, Button, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }: INavBarProps): JSX.Element => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open)
    }

    const MenuLinks = (
        <>
            <ZOLink 
                to="/" 
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                <Button>
                    Home
                </Button>
            </ZOLink>
            <ZOLink
                to="/presentation"
            >
                <Button>Presentation</Button>
            </ZOLink>
            <ZOLink
                to="/about"
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                <Button>
                    About
                </Button>
            </ZOLink>
        </>
    );

    return (
        <NavbarWrapper>
            <NavBarHeaderContentWrapper >
                <HeaderImageWrapper>
                    <img 
                        style={{height: 50}} 
                        src={logo} 
                        loading="lazy" 
                        alt="logo"
                    />
                </HeaderImageWrapper>
                <LinkWrapper>
                    {MenuLinks}
                </LinkWrapper>
                <MenuWrapper>
                    <IconButton onClick={() => toggleDrawer(true)}>
                        <Hamburger/>
                    </IconButton>
                    <Drawer
                        anchor='top'
                        open={drawerOpen}
                        onClick={() => toggleDrawer(false)}
                    >
                        <List>
                            <ListItem>{MenuLinks}</ListItem>
                        </List>
                    </Drawer>
                </MenuWrapper>
            </NavBarHeaderContentWrapper>
        </NavbarWrapper>
    )
}
export default Navbar;