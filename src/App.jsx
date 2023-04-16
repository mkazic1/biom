import Providers from './providers';
import NavigationBar from './components/NavigationBar';
import GetStartedPage from './pages/GetStartedPage';
import theme from './style/theme';

const App = () => (
  <Providers theme={theme}>
    <NavigationBar />
    <GetStartedPage />
  </Providers>
);

export default App;
