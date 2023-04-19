import {
  Typography,
  Box,
  Button,
  CardMedia,
} from '@mui/material';
import backgroundImg from '../assets/Mask_Group_12.jpg';
import designIcon from '../assets/beautiful_design_icon.png';
import durableIcon from '../assets/durable_stainless_icon.png';
import nonToxicIcon from '../assets/non_toxic_icon.png';
import {
  backgroundStyle,
  containerStyle,
  contentStyle,
  iconStyle,
  iconsTextBoxStyle,
  titleStyle,
} from '../style/pages/MeetBiomPageStyle';

const MeetBiomPage = () => (
  <Box sx={containerStyle}>
    <Box style={{ ...backgroundStyle, backgroundImage: `url(${backgroundImg})` }}>
      <Box sx={contentStyle}>
        <Box sx={titleStyle}>
          <Typography variant="body2" sx={{ letterSpacing: '2.1px' }}>THE BIOM DISPENSER</Typography>
          <Typography component="h4" variant="h4" sx={{ marginTop: '8px' }}>Redefine your experience of clean.</Typography>
          <Typography variant="h6" sx={{ marginTop: '12px' }}>
            A quality engineered wipes dispenser that looks beautiful in your home,
            making better habits for your home and planet always within reach.
          </Typography>
        </Box>
        <Box sx={{ marginTop: '42px' }}>
          <Box sx={iconsTextBoxStyle}>
            <CardMedia
              image={designIcon}
              alt="DesignImage"
              component="img"
              sx={iconStyle}
            />
            <Typography variant="h6" sx={{ marginLeft: '23px' }}>Beautiful design, fit for your home</Typography>
          </Box>
          <Box sx={{ ...iconsTextBoxStyle, marginTop: '35px' }}>
            <CardMedia
              image={durableIcon}
              alt="DurableImage"
              component="img"
              sx={iconStyle}
            />
            <Typography variant="h6" sx={{ marginLeft: '23px' }}>Durable stainless steel exterior</Typography>
          </Box>
          <Box sx={{ ...iconsTextBoxStyle, marginTop: '35px' }}>
            <CardMedia
              image={nonToxicIcon}
              alt="NonToxicImage"
              component="img"
              sx={iconStyle}
            />
            <Typography variant="h6" sx={{ marginLeft: '23px' }}>Non-toxic, BPA free</Typography>
          </Box>
          <Button variant="contained" sx={{ marginTop: '45px' }}>SHOP NOW</Button>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default MeetBiomPage;
