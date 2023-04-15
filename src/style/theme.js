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
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            textAlign: 'center',
            border: `solid 1px ${PRIMARY.main}`,
            color: PRIMARY.main,
            backgroundColor: SECONDARY.main,
            borderRadius: '4px',
            '&:hover': {
              border: `solid 1px ${PRIMARY.main}`,
              backgroundColor: SECONDARY.main,
              boxShadow: `0px 2px 15px -1px ${PRIMARY.main}`,
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            textAlign: 'center',
            border: `solid 1px ${PRIMARY.main}`,
            color: SECONDARY.main,
            backgroundColor: PRIMARY.main,
            borderRadius: '4px',
            '&:hover': {
              border: `solid 1px ${PRIMARY.main}`,
              backgroundColor: PRIMARY.main,
              boxShadow: `0px 2px 15px -1px ${PRIMARY.main}`,
            },
          },
        },
      ],
    },
  },
});

const responsiveFontTheme = responsiveFontSizes(theme);
export default responsiveFontTheme;
