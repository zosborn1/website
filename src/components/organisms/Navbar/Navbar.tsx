import React, { useState } from 'react';
import { JSX } from "react/jsx-runtime";
import { INavBarProps } from "./types";
import { 
  ZONoneMobileContent,
  ZOLink,
  ZOToolbar
} from "./styles";
import logo from '../../../assets/navLogo.jpg';

const Navbar = ({ children }: INavBarProps): JSX.Element => {

  const menuSelections = [
    {title: 'Home', url: '/'},
    {title: 'About', url: '/about'},
    {title: 'Presentation', url: '/presentation'}
  ]

  return (
    <ZOToolbar
      variant="dense"
      sx={{ justifyContent: 'center', overflowX: 'auto', gap: 20 }}
    >
      <ZONoneMobileContent>
        <img 
            style={{height: 80}} 
            src={logo} 
            loading="lazy" 
            alt="logo"
        />
      </ZONoneMobileContent>
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