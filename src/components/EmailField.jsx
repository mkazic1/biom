import { Box, CardMedia, Typography } from '@mui/material';
import arrowIcon from '../assets/Icon ionic-ios-arrow-round-forward-1.png';
import {
  containerStyle,
  iconBackgroundStyle,
  iconStyle,
  textStyle,
} from '../style/components/EmailFieldStyle';

const EmailField = () => (
  <Box sx={containerStyle}>
    <Typography sx={textStyle}>Enter your email address</Typography>
    <Box sx={iconBackgroundStyle}>
      <CardMedia
        image={arrowIcon}
        alt="ArrowImage"
        component="img"
        sx={iconStyle}
      />
    </Box>
  </Box>
);

export default EmailField;
