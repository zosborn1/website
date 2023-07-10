import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { IFooterProps } from "./types";

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const defaultTheme = createTheme();

const Footer = ({ children }: IFooterProps): JSX.Element => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                component="footer"
                sx={{
                justifyContent: 'center',
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                <Typography variant="body1" color='blue'>
                    zosborn@wisc.edu | {'   '}  
                    <Link color="inherit" href="https://www.linkedin.com/in/zachosborn/">
                      LinkedIn
                    </Link>{' '}
                </Typography>

                <Copyright />
                </Container>
            </Box>
        </ThemeProvider>
        );
}
export default Footer;