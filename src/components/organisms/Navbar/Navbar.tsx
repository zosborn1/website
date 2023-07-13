import React, { useState } from 'react';
import { JSX } from "react/jsx-runtime";
import { INavBarProps } from "./types";
import { 
  ZONoneMobileContent,
  ZOLink,
  ZOToolbar,
  ZOHomeButton,
  ZOLogo
} from "./styles";
import logo from '../../../assets/navLogo.jpg';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ children }: INavBarProps): JSX.Element => {

  const menuSelections = [
    {title: 'About', url: '/about'},
    {title: 'Presentation', url: '/presentation'},
    {title: 'Contact', url: '/contact'}
  ]

  return (
    <ZOToolbar
      variant="dense"
      sx={{ justifyContent: 'center', overflowX: 'auto', gap: 20, alignContent: 'center' }}
    >
      <ZOHomeButton>
        <Link
          to='/'
          >
            <HomeIcon fontSize='large' style={{fill: 'rgba(235,231,217,255)'}}/>
          </Link>
      </ZOHomeButton>
      <ZOLogo>
        <img 
            style={{height: 80}} 
            src={logo} 
            loading="lazy" 
            alt="logo"
        />
      </ZOLogo>
      <ZONoneMobileContent >
        {menuSelections.map((section) => (
          <ZOLink
            color="inherit"
            key={section.title}
            to={section.url}
          >
            {section.title}
          </ZOLink>
        ))}
      </ZONoneMobileContent>
    </ZOToolbar>
  )
}
export default Navbar;