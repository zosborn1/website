import { keyframes, styled } from "styled-components";

export const onLoad = keyframes`
  from {
    opacity: 0;
  }
  to {
    animation-delay: 10.5s;
    opacity: 1;
  }
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
    animation: ${onLoad} 0.55s ease-out;
    //border: red solid 1px;
`;

export const PageColorWrapper = styled.body`
  height: 100vh;
  width: 100vw;
  //background-color: rgba(240,148,129,255);
  background-color: rgba(249,246,240,255);
`;

export const ZOContentDivision = styled.div`
    padding: 16px 16px 16px 16px;
    background-color: transparent;
`;