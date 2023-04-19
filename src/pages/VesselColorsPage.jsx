import { Box, Typography } from '@mui/material';
import ChooseVesselField from '../components/ChooseVesselField';
import { containerStyle, headingStyle } from '../style/pages/VesselColorsPageStyle';
import VesselHorizontalGallery from '../components/VesselHorizontalGallery';

const VesselColorsPage = () => (
  <Box sx={containerStyle}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h3" sx={headingStyle}>
        Ready to start wiping out waste?
      </Typography>
      <ChooseVesselField />
    </Box>
    <VesselHorizontalGallery />
  </Box>
);

export default VesselColorsPage;
