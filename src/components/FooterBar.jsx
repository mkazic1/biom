import {
  Toolbar,
  Typography,
  CardMedia,
  Box,
} from '@mui/material';
import logoImage from '../assets/logo.png';
import instagramLogo from '../assets/Icon ionic-logo-instagram.png';
import facebookLogo from '../assets/Icon awesome-facebook-f.png';
import {
  containersStyle,
  navigationTitleStyle,
  logoStyle,
  bottomContainerStyle,
  instagramIcon,
  facebookIcon,
  iconBackgroundStyle,
} from '../style/components/FooterBarStyle';

const FooterBar = () => (
  <Box sx={{ marginTop: '50px' }}>
    <Box sx={containersStyle}>
      <Box>
        <Toolbar variant="dense" style={{ paddingLeft: '0px' }}>
          <Typography
            sx={navigationTitleStyle}
          >
            SHOP
          </Typography>
          <Typography
            sx={navigationTitleStyle}
          >
            WHY BIOM
          </Typography>
          <Typography
            sx={{ ...navigationTitleStyle, paddingRight: '79px' }}
          >
            SCENTS
          </Typography>
        </Toolbar>
      </Box>
      <CardMedia
        image={logoImage}
        alt="LogoImage"
        component="img"
        sx={logoStyle}
      />
      <Box>
        <Toolbar variant="dense" style={{ paddingRight: '0px' }}>
          <Typography
            sx={{ ...navigationTitleStyle, paddingLeft: '75px' }}
          >
            FAQS
          </Typography>
          <Typography
            sx={navigationTitleStyle}
          >
            ACCOUNT
          </Typography>
          <Typography
            sx={navigationTitleStyle}
          >
            HELP
          </Typography>
        </Toolbar>
      </Box>
    </Box>
    <Box sx={bottomContainerStyle}>
      <Box>
        <Toolbar variant="dense" style={{ paddingLeft: '0px' }}>
          <Typography sx={{ color: 'secondary.main', letterSpacing: '0.40px' }}>
            © 2021 biom. All rights reserved • Privacy Policy • Terms of Service
          </Typography>
        </Toolbar>
      </Box>
      <Box sx={{ display: 'flex', justifyConten: 'space-between' }}>
        <Box sx={{ ...iconBackgroundStyle, marginRight: '15px' }}>
          <CardMedia
            image={instagramLogo}
            alt="InstagramLogo"
            component="img"
            sx={instagramIcon}
          />
        </Box>
        <Box sx={iconBackgroundStyle}>
          <CardMedia
            image={facebookLogo}
            alt="FacebookLogo"
            component="img"
            sx={facebookIcon}
          />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default FooterBar;
