import {
  createMuiTheme,
} from '@material-ui/core/styles';

import theme from './theme';

export default createMuiTheme({
  typography: {
    fontFamily: [
      'Barlow Semi Condensed',
      'sans-serif',
    ],
  },
  palette: {
    primary: {
      main: theme.colour.primary,
    },
    secondary: {
      main: theme.colour.secondary,
    },
  },
});
