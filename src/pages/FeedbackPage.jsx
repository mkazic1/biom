import { Box, Typography } from '@mui/material';
import {
  containerStyle,
  descriptionStyle,
  dotsContainerStyle,
  dotsStyle,
} from '../style/pages/FeedbackPageStyle';

const FeedbackPage = () => (
  <Box sx={containerStyle}>
    <Typography variant="body1" sx={{ letterSpacing: '2.1px' }}>WHAT PEOPLE ARE SAYING</Typography>
    <Typography variant="h4" sx={descriptionStyle}>
      “Cleaning and sanitizing are now more important than ever and these wipes make it so easy.
      They’re great because they don’t dry my skin out and
      I love knowing that buying their products are better for the environment.”
    </Typography>
    <Typography variant="body2" sx={{ letterSpacing: '1.3px' }}>- RACHAEL H.</Typography>
    <Box sx={dotsContainerStyle}>
      <Box sx={dotsStyle} />
      <Box sx={{ ...dotsStyle, backgroundColor: 'secondary.dark' }} />
      <Box sx={{ ...dotsStyle, backgroundColor: 'secondary.dark' }} />
      <Box sx={{ ...dotsStyle, backgroundColor: 'secondary.dark' }} />
    </Box>
  </Box>
);

export default FeedbackPage;
