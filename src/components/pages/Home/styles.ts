import styled from 'styled-components';

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