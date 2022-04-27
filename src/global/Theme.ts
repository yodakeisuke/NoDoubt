import { createTheme } from '@mui/material/styles';
import ColorCode from 'global/types/ColorCode';

const lighttheme = createTheme({
  palette: {
    background: {
      default: ColorCode.OFF_WHITE,
      paper: ColorCode.PURE_WHITE,
    },
    primary: {
      main: ColorCode.RED,
      contrastText: ColorCode.PURE_WHITE,
    },
    secondary: {
      main: ColorCode.GREEN,
      contrastText: ColorCode.OFF_WHITE,
    },
    info: {
      main: ColorCode.DEEP_DARK_BLUE,
      contrastText: ColorCode.DEEP_DARK_BLUE,
    },
    text: {
      primary: ColorCode.DEEP_DARK_BLUE,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default lighttheme;
