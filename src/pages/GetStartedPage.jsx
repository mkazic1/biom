import { Typography, Box, Button } from '@mui/material';
import backgroundImg from '../assets/Kitchen_3.jpg';
import {
  backgroundStyle,
  containerStyle,
  contentStyle,
  textAndButtonStyle,
  titleStyle,
} from '../style/pages/GetStartedPageStyle';

const GetStartedPage = () => (
  <Box sx={containerStyle}>
    <Box style={{ ...backgroundStyle, backgroundImage: `url(${backgroundImg})` }}>
      <Box sx={contentStyle}>
        <Box sx={titleStyle}>
          <Typography component="h2" variant="h2">So fresh.</Typography>
          <Typography component="h2" variant="h2">So green.</Typography>
        </Box>
        <Box sx={textAndButtonStyle}>
          <Typography variant="h6">
            We believe that a more eco-friendly everyday makes a happier you and me.
            We’re on a mission to put sustainability in reach with better-for-the-planet wipes that are easy, effective,
            and plastic-free.
          </Typography>
          <Button variant="outlined" sx={{ marginTop: '24px' }}>GET STARTED</Button>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default GetStartedPage;
