import Providers from './providers';
import NavigationBar from './components/NavigationBar';
import GetStartedPage from './pages/GetStartedPage';
import MeetBiomPage from './pages/MeetBiomPage';
import theme from './style/theme';

const App = () => (
  <Providers theme={theme}>
    <NavigationBar />
    <GetStartedPage />
    <MeetBiomPage />
  </Providers>
);

export default App;
