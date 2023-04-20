import { Box, Typography } from '@mui/material';
import backgroundImg from '../assets/Biom_wipe_2.png';
import EmailField from './EmailField';
import FooterBar from './FooterBar';
import {
  backgroundStyle,
  containerStyle,
  contentStyle,
  descriptionStyle,
  imageBoxStyle,
  titleStyle,
} from '../style/components/FooterStyle';

const Footer = () => (
  <Box sx={containerStyle}>
    <Box sx={imageBoxStyle}>
      <Box style={{ ...backgroundStyle, backgroundImage: `url(${backgroundImg})` }}>
        <Box sx={contentStyle}>
          <Typography component="h4" variant="h4" sx={titleStyle}>Get the latest news delivered to your inbox.</Typography>
          <Typography variant="body1" sx={descriptionStyle}>
            Get access to the exciting stuff — exclusive new deals, product launches and more.
            Plus, get a 10% discount on your next order.
          </Typography>
          <EmailField />
        </Box>
      </Box>
    </Box>
    <FooterBar />
  </Box>
);

export default Footer;
