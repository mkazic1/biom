import Providers from './providers';
import NavigationBar from './components/NavigationBar';
import GetStartedPage from './pages/GetStartedPage';
import MeetBiomPage from './pages/MeetBiomPage';
import SpacesHorizontalGallery from './components/SpacesHorizontalGallery';
import VesselColorsPage from './pages/VesselColorsPage';
import FeedbackPage from './pages/FeedbackPage';
import OceanPage from './pages/OceanPage';
import InstagramSection from './pages/InstagramSection';
import Footer from './components/Footer';
import BiomWipesPage from './pages/BiomWipesPage';

const App = () => (
  <Providers>
    <NavigationBar />
    <GetStartedPage />
    <MeetBiomPage />
    <SpacesHorizontalGallery />
    <VesselColorsPage />
    <FeedbackPage />
    <BiomWipesPage />
    <OceanPage />
    <InstagramSection />
    <Footer />
  </Providers>
);

export default App;
