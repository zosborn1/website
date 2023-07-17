import styled from 'styled-components';

export const AboutPageWrapper = styled.div`
    //border: blue solid 1px;
    height: 100vh;
    width: 100%;
    display: flex;
    margin-top: 50px;
    //margin-bottom: 200px;
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
    height: 40%;
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
`;


