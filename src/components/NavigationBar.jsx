import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  CardMedia,
  Box,
} from '@mui/material';
import Logo from '../assets/logo.jpg';
import Cart from '../assets/cart2.png';
import {
  appBarStyle,
  leftContainerStyle,
  rightContainerStyle,
  containersStyle,
  navigationTitleStyle,
  logoStyle,
  cartStyle,
} from '../style/components/NavigationBarStyle';

const NavigationBar = () => (
  <AppBar position="fixed" sx={appBarStyle}>
    <Box sx={containersStyle}>
      <Container maxWidth="false" style={leftContainerStyle}>
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
              sx={navigationTitleStyle}
            >
              SCENTS
            </Typography>
          </Toolbar>
        </Box>
      </Container>
      <CardMedia
        image={Logo}
        alt="LogoImage"
        component="img"
        sx={logoStyle}
      />
      <Container maxWidth="false" style={rightContainerStyle}>
        <Box>
          <Toolbar variant="dense" style={{ paddingRight: '0px' }}>
            <Typography
              sx={navigationTitleStyle}
            >
              SIGN IN
            </Typography>
            <Typography
              sx={{ ...navigationTitleStyle, paddingRight: '12px' }}
            >
              CART
            </Typography>
            <CardMedia
              image={Cart}
              alt="CartImage"
              component="img"
              sx={cartStyle}
            />
          </Toolbar>
        </Box>
      </Container>
    </Box>
  </AppBar>
);

export default NavigationBar;
