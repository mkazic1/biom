import { createTheme, responsiveFontSizes } from '@mui/material';

const PRIMARY = {
  lighter: '#DAE5E5',
  light: '#004A4C',
  main: '#002D33',
};

const SECONDARY = {
  light: '#FFFFFF',
  main: '#FFFAFA',
  dark: '#F2F2F2',
};

const THIRD = {
  info: '#DDA74A',
  main: '#000000',
};

const mainFont = "'Lato', sans-serif";
const headingFont = "'Playfair Display', sans-serif";

const theme = createTheme({
  palette: {
    primary: PRIMARY,
    secondary: SECONDARY,
    third: THIRD,
    text: {
      primary: PRIMARY.main,
      secondary: SECONDARY.main,
      third: THIRD.main,
    },
  },

  typography: {
    fontFamily: mainFont,
    h1: {
      fontFamily: headingFont,
    },
    h2: {
      fontFamily: headingFont,
    },
    h3: {
      fontFamily: headingFont,
    },
    h4: {
      fontFamily: headingFont,
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '1.95px',
            color: PRIMARY.light,
            backgroundColor: SECONDARY.light,
            border: '0px',
            borderRadius: '6px',
            boxShadow: 'none',
            opacity: 1,
            paddingLeft: '40px',
            paddingRight: '40px',
            paddingTop: '15px',
            paddingBottom: '15px',
            '&:hover': {
              backgroundColor: SECONDARY.main,
              border: '0px',
              boxShadow: 'none',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '1.95px',
            color: SECONDARY.main,
            backgroundColor: PRIMARY.light,
            border: '0px',
            borderRadius: '6px',
            boxShadow: 'none',
            opacity: 1,
            paddingLeft: '40px',
            paddingRight: '40px',
            paddingTop: '15px',
            paddingBottom: '15px',
            '&:hover': {
              backgroundColor: PRIMARY.main,
              border: '0px',
              boxShadow: 'none',
            },
          },
        },
      ],
    },
  },
});

const responsiveFontTheme = responsiveFontSizes(theme);
export default responsiveFontTheme;
