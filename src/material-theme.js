import {
  createMuiTheme,
} from '@material-ui/core/styles';

import theme from './theme';

export default createMuiTheme({
  palette: {
    primary: {
      main: theme.colour.primary,
    },
    secondary: {
      main: theme.colour.secondary,
    },
  },
});