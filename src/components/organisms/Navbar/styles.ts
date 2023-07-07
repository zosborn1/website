import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarWrapper = styled.header`
    height: auto;
    width: 100%;
    display: block;
    padding: 0.5rem 0rem;
    background-color: rgba(15,34,45,255);
    box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
`;

export const NavBarHeaderContentWrapper = styled(Toolbar)`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border: #f5a002 solid 1px;
`;
export const HeaderImageWrapper = styled(Typography)`
    display: inline-block;
    margin-right: 5%;
    //border: #f5a002 solid 1px;
`;

export const LinkWrapper = styled.div`
    display: flex;
    padding-left: 0;
    flex-direction: row;
    margin-right: auto;
    //border: #f5a002 solid 1px;
    @media (max-width: 768px) {
      display: none;
    }
`;

export const MenuWrapper = styled.div`
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
`;

export const ZOLink = styled(NavLink )`
    font-size: 25px;
    font-weight: 200;
    flex-wrap: wrap;
    padding: 5px;
    margin: 5px;
    color: rgba(235,231,217,255);
    border: 1px solid rgb(78,47,48,255);
    border-radius: 10px;
    background: rgba(245,81,57,255);
    text-decoration:none;
    @media (max-width: 768px) {
        display: none;
      }
`;