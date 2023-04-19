import Providers from './providers';
import NavigationBar from './components/NavigationBar';
import GetStartedPage from './pages/GetStartedPage';
import MeetBiomPage from './pages/MeetBiomPage';
import SpacesHorizontalGallery from './components/SpacesHorizontalGallery';
import OceanPage from './pages/OceanPage';
import InstagramSection from './pages/InstagramSection';
import Footer from './components/Footer';
import theme from './style/theme';

const App = () => (
  <Providers theme={theme}>
    <NavigationBar />
    <GetStartedPage />
    <MeetBiomPage />
    <SpacesHorizontalGallery />
    <OceanPage />
    <InstagramSection />
    <Footer />
  </Providers>
);

export default App;
