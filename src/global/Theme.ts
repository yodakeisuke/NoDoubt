import { createTheme } from '@mui/material/styles';
import ColorCode from 'global/types/ColorCode';

const lighttheme = createTheme({

  palette: {
    background: {
      default: ColorCode.OFF_WHITE,
      paper: ColorCode.OFF_WHITE
    },
    primary: {
      main: ColorCode.OFF_WHITE,
      contrastText:ColorCode.RED,
    },
    secondary: {
      main: ColorCode.RED,
      contrastText: ColorCode.OFF_WHITE,
    },
    info: {
      main: ColorCode.OFF_WHITE,
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
