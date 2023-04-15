import Providers from './providers';
import NavigationBar from './components/NavigationBar';
import theme from './style/theme';

const App = () => (
  <Providers theme={theme}>
    <NavigationBar />
  </Providers>
);

export default App;
