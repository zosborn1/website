import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarWrapper = styled.header`
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.5rem 0rem;
    background-color: rgba(15,34,45,255);
    color: black;
    box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
`;

export const NavBarHeaderContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10% 0px 10%;
    gap: 20px;
    align-content: flex-end;
    width: 100vw;
    height: 120px;
    max-width: 100%;
    @media (max-width: 768px) {
        height: 60px;
        gap: 29px;
        flex-wrap: wrap;
        align-content: space-around;
        padding: 0;
    }

`;

export const LinkWrapper = styled.h1`
    
`;

export const ZOLink = styled(Link)`
    font-size: 30px;
    font-weight: 200;
    color: rgba(235,231,217,255);
    padding: 5px;
    border: 1px solid rgb(78,47,48,255);
    border-radius: 10px;
    background: rgba(245,81,57,255);
`;