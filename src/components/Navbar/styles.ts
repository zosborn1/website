import styled from 'styled-components';

export const NavbarWrapper = styled.header`
    position: fixed;
    display: flex;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        padding: 8px;
    }
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