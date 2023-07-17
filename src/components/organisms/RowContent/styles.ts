import styled from 'styled-components';

export const PageColumn = styled.div`
  // border: blue solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    display: flex;
    height: 90%;
  }
`;

export const ContentWrapper = styled.div`
    position: relative;
    //border: red solid 1px;
    display: flex;
    justify-content: left;
    align-content: center;
    left: 100px;
    z-index: 5;
    @media (max-width: 1023px) {
        width: 60%;
        display: flex;
      }
`;

export const ImageWrapper = styled.div`
    position: relative;
    right: 100px;
    z-index: 10;
    border-radius: 20px;
    width: auto;
    margin-right: 20px;
`;