import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ZOToolbar = styled(Toolbar)`
    background-color: rgba(15,34,45,255);
    justifyContent: center;
    borderBottom: 1;
    borderColor: divider;
    position: fixed;
    //width: 100vw;
    box-shadow: 0 4px 2px 2px rgba(9, 9, 9, 0.23);
`;

export const ZOLink = styled(NavLink )`
    font-size: 25px;
    font-weight: 200;
    flex-wrap: wrap;
    padding: 5px;
    margin: 10px;
    color: rgba(235,231,217,255);
    border: 1px solid rgb(78,47,48,255);
    border-radius: 10px;
    background: rgba(245,81,57,255);
    text-decoration:none;
`;

export const ZONoneMobileContent = styled.div`
    //border: red solid 1px;
    width: 33%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 1176px) {
        display: none;
      }
`;

export const ZOHomeButton = styled.div`
    //border: red solid 1px;
    width: 33%;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-content: space-evenly;
    @media (max-width: 1176px) {
        
    }
`;

export const ZOLogo = styled.div`
    //border: red solid 1px;
    width: 33%;
    display: flex;
    justify-content: center;
    @media (max-width: 1176px) {
        width: 100%;
    }
    @media (max-width: 460px) {
        display: none;
    }
`;

export const ZOLinkedInButton = styled.div`
    //border: red solid 1px;
    width: 15%;
    @media (max-width: 1176px) {
        
    }
`;