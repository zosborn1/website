import { PageWrapper } from './styles/global-styles';
import { JSX } from 'react/jsx-runtime';
import RouterHash from './routes/RouterHash';
import Navbar from './components/organisms/Navbar/Navbar';
import Footer from './components/organisms/Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar/>
      <RouterHash/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
