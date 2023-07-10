import React, { useState } from 'react';
import { JSX } from "react/jsx-runtime";
import { INavBarProps } from "./types";
import { 
  ZOcontent,
  ZOLink,
  ZOToolbar
} from "./styles";
import logo from '../../../assets/navLogo.jpg';

const Navbar = ({ children }: INavBarProps): JSX.Element => {

  const menuSelections = [
    {title: 'Home', url: '/'},
    {title: 'Presentation', url: '/presentation'},
    {title: 'About', url: '/about'}
  ]


  return (
    <React.Fragment>
      <ZOToolbar
        variant="dense"
        sx={{ justifyContent: 'center', overflowX: 'auto', gap: 20 }}
      >
        <ZOcontent>
          <img 
              style={{height: 70}} 
              src={logo} 
              loading="lazy" 
              alt="logo"
          />
        </ZOcontent>
        <ZOcontent >
          {menuSelections.map((section) => (
            <ZOLink
              color="inherit"
              key={section.title}
              to={section.url}
            >
              {section.title}
            </ZOLink>
          ))}
        </ZOcontent>
      </ZOToolbar>
      
    </React.Fragment>
  )
}
export default Navbar;