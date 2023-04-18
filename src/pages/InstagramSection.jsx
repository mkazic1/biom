import {
  Box, Typography,
} from '@mui/material';
import InstagramField from '../components/InstagramField';
import {
  containerStyle,
  contentStyle,
} from '../style/pages/InstagramSectionStyle';

const InstagramSection = () => (
  <Box sx={containerStyle}>
    <Box sx={contentStyle}>
      <Typography component="h3" variant="h3">#cleanwithbiom</Typography>
      <InstagramField />
    </Box>
  </Box>
);

export default InstagramSection;
