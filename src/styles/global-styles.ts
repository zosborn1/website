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
    height: calc(100vh - 80px);
    width: 100vw;
    padding: 16px 0 0 0;
    overflow-y: scroll;
    overflow-x: hidden;
    animation: ${onLoad} 0.55s ease-out;
    @media (max-width: 1440px) {
        padding: 16px 16px 0 16px;
    }
    @media (max-width: 1024px) {
        padding: 16px 8px 0 8px;
    }
    //border: red solid 1px;
`;

export const SCContentDivision = styled.div`
    padding: 16px 16px 16px 16px;
    background-color: transparent;
`;
export const SCContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    margin: 0 0 200px 0;
    @media (max-width: 1024px) {
        margin-left: 0;
    }
`;