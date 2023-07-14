import styled from 'styled-components';

export const AboutPageWrapper = styled.div`
    //border: blue solid 1px;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const AboutContentWrapper = styled.div`
    height: 45%;
    width: 90%;
    margin: 50px 20px 50px 20px;
    //border: red solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const AboutImageWrapper = styled.div`
    height: 25%;
    width: 90%;
    margin: 50px 20px 50px 20px;
    //border: red solid 1px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ContentContainer = styled.div`
    height: 100%;
    width: 100%;
    //border: red solid 1px;
    display: flex;
    flex-direction: row;
`;

export const ContentColumn = styled.div`
    width: 50%;
    height: 100%;
    //border: blue solid 1px;
    display: flex;
    justify-content: center;
    //align-items: center;
    flex-direction: column;
    overflow: auto;
    padding: 5px;
`;

export const SubHeader = styled.h1`
    font-size: 35px;
    color: rgba(235,231,217,255);
    align: center;
`;

export const SubInfo = styled.h2`
    font-size: 20px;
    color: rgba(235,231,217,255);
    line-height: 22px;
    align: left;
`;