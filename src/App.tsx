import { PageWrapper } from './styles/global-styles';
import { JSX } from 'react/jsx-runtime';
import RouterHash from './routes/RouterHash';

function App(): JSX.Element {
  return (
    <PageWrapper>
      <RouterHash/>
    </PageWrapper>
  );
}

export default App;
