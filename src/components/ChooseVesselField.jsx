import { Box, CardMedia, Typography } from '@mui/material';
import instagramIcon from '../assets/Icon ionic-ios-arrow-round-forward.png';
import {
  containerStyle,
  iconBackgroundStyle,
  iconStyle,
  textStyle,
} from '../style/components/ChooseVesselFieldStyle';

const ChooseVesselField = () => (
  <Box sx={containerStyle}>
    <Typography sx={textStyle}>CHOOSE YOUR VESSEL COLOR</Typography>
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

export default ChooseVesselField;
