import {
  Typography,
  Box,
  Button,
  CardMedia,
} from '@mui/material';
import bioIcon from '../assets/biodegradable icon.png';
import plantIcon from '../assets/plant based icon.png';
import plasticIcon from '../assets/plastic free icon.png';
import girlPic from '../assets/AdobeStock_377418446_Preview.jpg';
import {
  containerStyle,
  contentStyle,
  iconStyle,
  iconsTextBoxStyle,
  titleStyle,
} from '../style/pages/BiomWipesPageStyle';

const BiomWipesPage = () => (
  <Box sx={containerStyle}>
    <CardMedia
      image={girlPic}
      alt="girlPic"
      component="img"
      sx={{
        width: '496px',
        height: '622px',
      }}
    />
    <Box sx={contentStyle}>
      <Box sx={titleStyle}>
        <Typography variant="body2" sx={{ letterSpacing: '2.1px', color: 'text.primary' }}>BIOM WIPES</Typography>
        <Typography component="h4" variant="h4" sx={{ marginTop: '10px', color: 'text.third' }}>
          Better for you, and the planet.
        </Typography>
        <Typography variant="h6" sx={{ marginTop: '12px', color: 'text.primary' }}>
          The experience of clean should feel amazing.
          In a time when we’re constantly sanitizing, it can be damaging to our hands and skins.
          We decided to load our wipes with Aloe to take care of you, while you take care of your home.
        </Typography>
      </Box>
      <Box sx={{ marginLeft: '76px', marginTop: '40px' }}>
        <Box sx={iconsTextBoxStyle}>
          <CardMedia
            image={bioIcon}
            alt="bioIcon"
            component="img"
            sx={iconStyle}
          />
          <Typography variant="h6" sx={{ marginLeft: '22px' }}>100% biodegradable</Typography>
        </Box>
        <Box sx={{ ...iconsTextBoxStyle, marginTop: '35px' }}>
          <CardMedia
            image={plasticIcon}
            alt="plasticIcon"
            component="img"
            sx={iconStyle}
          />
          <Typography variant="h6" sx={{ marginLeft: '22px' }}>Plastic-free</Typography>
        </Box>
        <Box sx={{ ...iconsTextBoxStyle, marginTop: '35px' }}>
          <CardMedia
            image={plantIcon}
            alt="plantIcon"
            component="img"
            sx={iconStyle}
          />
          <Typography variant="h6" sx={{ marginLeft: '23px' }}>100% plant-based</Typography>
        </Box>
        <Button variant="contained" sx={{ marginTop: '90px' }}>SUBSCRIBE NOW</Button>
      </Box>
    </Box>
  </Box>
);

export default BiomWipesPage;
