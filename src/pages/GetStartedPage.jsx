import {
  Typography, Box, Button,
} from '@mui/material';
import backgroundImg from '../assets/Kitchen_3.jpg';
import { backgroundStyle, contentStyle } from '../style/pages/GetStartedPageStyle';

const GetStartedPage = () => (
  <Box sx={{ paddingTop: '68px', paddingX: '20px', width: '100%' }}>
    <Box style={{ ...backgroundStyle, backgroundImage: `url(${backgroundImg})` }}>
      <Box sx={contentStyle}>
        <Typography component="h2" variant="h2" sx={{ color: 'text.secondary' }}>So fresh.</Typography>
        <Typography component="h2" variant="h2" sx={{ color: 'text.secondary' }}>So green.</Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary', marginTop: '14px', width: '460px', height: '113px',
          }}
        >
          We believe that a more eco-friendly everyday makes a happier you and me.
          We’re on a mission to put sustainability in reach with better-for-the-planet wipes that are easy, effective,
          and plastic-free.
        </Typography>
        <Button variant="outlined" sx={{ marginTop: '38px' }}>GET STARTED</Button>
      </Box>
    </Box>
  </Box>
);

export default GetStartedPage;
