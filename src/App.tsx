import { JSX } from 'react/jsx-runtime';
import RouterHash from './routes/RouterHash';
import Navbar from './components/organisms/Navbar/Navbar';
import Footer from './components/organisms/Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { FooterPadding, PageColorWrapper } from './styles/global-styles';

const theme = createTheme({
  typography: {
    fontFamily: "Courier"
  }
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageColorWrapper>
        <Navbar/>
        <RouterHash/>
        <FooterPadding>
          <Footer/>
        </FooterPadding>
      </PageColorWrapper>
    </ThemeProvider>
  );
}

export default App;
