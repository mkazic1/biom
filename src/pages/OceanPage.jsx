import {
  Typography,
  Box,
  Button,
  CardMedia,
} from '@mui/material';
import videoBackground from '../assets/coverr-surfing-through-the-ocean-waves-4214-1080p.mp4';
import {
  backgroundStyle,
  containerStyle,
  contentStyle,
  videoStyle,
} from '../style/pages/OceanPageStyle';

const OceanPage = () => (
  <Box sx={containerStyle}>
    <CardMedia sx={{ position: 'relative', ...backgroundStyle }}>
      <video
        autoPlay
        loop
        muted
        style={videoStyle}
      >
        <source src={videoBackground} type="video/mp4" />
      </video>
      <Box sx={contentStyle}>
        <Typography variant="body2" sx={{ letterSpacing: '2.1px' }}>CLEANING OUR OCEANS WITH EVERY WIPE</Typography>
        <Typography variant="h4" sx={{ marginTop: '6px', marginBottom: '10px' }}>
          Wipes have plastic in them. We don’t.
        </Typography>
        <Typography variant="body1" sx={{ width: '636px', marginBottom: '24px' }}>
          We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the environment,
          and toxic chemicals that don’t belong in our oceans (or in our homes).
        </Typography>
        <Button variant="outlined">LEARN MORE</Button>
      </Box>
    </CardMedia>
  </Box>
);

export default OceanPage;
