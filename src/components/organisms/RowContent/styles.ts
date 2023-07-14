import styled from 'styled-components';

export const PageColumn = styled.div`
  // border: blue solid 1px;
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
    left: 20px;
    z-index: 5;
    @media (max-width: 1023px) {
        width: 60%;
        display: flex;
        overflow: clip;
      }
`;

export const ImageWrapper = styled.div`
    position: absolute;
    right: 30px;
    z-index: 10;
    border-radius: 20px;
    width: auto;
    margin-right: 20px;
`;