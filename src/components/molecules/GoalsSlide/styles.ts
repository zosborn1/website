import { Box, Button } from '@mui/material';
import styled from 'styled-components';

export const GoalBox = styled(Box)`
    border: 2px solid rgba(15,34,45,255);
    background: rgba(15,34,45,255);
    border-radius: 30px;
    width: 100%;
    height: 33%;
    display: flex;
    justify-content: center;
    align-content: start;
    align-items: center;
    flex-direction: column;
`;

export const Spacer = styled.div`
    display: flex;
    justify-content: center;
    align-content: start;
    align-items: center;
    width: 100%;
    height: 35%;
`;

export const ModalButton = styled(Button)`
    background: 'rgb(255, 152, 100)';
    border: '1px solid rgb(78,47,48,255)';
    borderRadius: '15px';
    fontWeight: '700';
`;

