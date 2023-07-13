import { Image, ViewColumn } from '@mui/icons-material';
import { Box } from '@mui/material';
import styled from 'styled-components';

export const Break = styled.div`
    padding: 10px;
    background: transparent;
`;

export const PageColumn = styled.div`
  float: left;
  width: 50%;
  padding: 10px;
  height: 100vh;
  //border: blue solid 1px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    display: flex;
    height: 90%;
    overflow: clip;
  }
`;

export const PageRow = styled.div`
    //border: red solid 1px;
    height: 100%;
    after: {
        content: "";
        display: table;
        clear: both;
    }
    
`;

export const ContentCenter = styled.div`
    //border: red solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1023px) {
        display: flex;
        height: 90%;
        overflow: clip;
      }
`;

export const ImageWrapper = styled.div`
    border-radius: 20px;
    height: 90%;
    width: auto;
    //padding: 5%;
`;