import { PageWrapper } from './styles/global-styles';
import { JSX } from 'react/jsx-runtime';
import RouterHash from './routes/RouterHash';
import Navbar from './components/organisms/Navbar/Navbar';

function App(): JSX.Element {
  return (
    <PageWrapper>
      <Navbar/>
      <RouterHash/>
    </PageWrapper>
  );
}

export default App;
