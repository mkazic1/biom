import Providers from './providers';
import NavigationBar from './components/NavigationBar';
import GetStartedPage from './pages/GetStartedPage';
import MeetBiomPage from './pages/MeetBiomPage';
import Footer from './components/Footer';
import theme from './style/theme';
import OceanPage from './pages/OceanPage';

const App = () => (
  <Providers theme={theme}>
    <NavigationBar />
    <GetStartedPage />
    <MeetBiomPage />
    <OceanPage />
    <Footer />
  </Providers>
);

export default App;
