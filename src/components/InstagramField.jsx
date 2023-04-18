import { Box, CardMedia, Typography } from '@mui/material';
import instagramIcon from '../assets/Icon awesome-instagram.png';
import {
  containerStyle,
  iconBackgroundStyle,
  iconStyle,
  textStyle,
} from '../style/components/InstagramFieldStyle';

const InstagramField = () => (
  <Box sx={containerStyle}>
    <Typography sx={textStyle}>FOLLOW US ON INSTAGRAM</Typography>
    <Box sx={iconBackgroundStyle}>
      <CardMedia
        image={instagramIcon}
        alt="InstagramIcon"
        component="img"
        sx={iconStyle}
      />
    </Box>
  </Box>
);

export default InstagramField;
