import styled from 'styled-components';

export const PageColumn = styled.div`
  //width: 100%;
  padding: 10px;
  //height: 100vh;
  //border: blue solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    display: flex;
    height: 90%;
    overflow: clip;
  }
`;

export const ContentWrapper = styled.div`
    position: absolute;
    //border: red solid 1px;
    display: flex;
    justify-content: left;
    align-content: center;
    height: 60%;
    width: 80%;
    //margin-left: 20px;
    left: 20px;
    z-index: 5;
    @media (max-width: 1023px) {
        width: 60%;
        display: flex;
        overflow: clip;
      }
`;

export const WelcomeContentWrapper = styled.div`
  //border: blue solid 1px;
  display: grid;
  justify-items: center;
  align-content: center;
  align-items: center;
  height: 100%;
  width: 75%;
  float: left;
  @media (max-width: 1325px) {
    max-width: 50%;
    overflow: clip;
  }
`;

export const ImageWrapper = styled.div`
    position: absolute;
    right: 20px;
    z-index: 10;
    border-radius: 20px;
    height: 90%;
    width: auto;
    margin-right: 20px;
    //padding: 5%;
`;