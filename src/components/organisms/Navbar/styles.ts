import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ZOToolbar = styled(Toolbar)`
    background-color: rgba(15,34,45,255);
    justifyContent: center;
    borderBottom: 1;
    borderColor: divider;
    position: fixed;
    top: 0;
    left: 0;
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
    @media (max-width: 922px) {
        display: none;
      }
`;

export const ZOcontent = styled.div`
    // padding: 0px 16px 0px 16px;
    // background-color: transparent;
    //border: red solid 1px;
`;