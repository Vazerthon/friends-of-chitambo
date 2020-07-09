import { createMuiTheme } from '@material-ui/core/styles';

import theme from './theme';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Barlow Semi Condensed', 'sans-serif'],
    fontSize: 18,
    fontDisplay: 'swap',
  },
  palette: {
    primary: {
      main: theme.colour.primary,
    },
    secondary: {
      main: theme.colour.secondary,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': {
          fontDisplay: 'swap',
        },
      },
    },
  },
});
