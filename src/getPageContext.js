import { SheetsRegistry } from 'react-jss';
import {
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';

import theme from './theme';

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.colour.primary,
    },
    secondary: {
      main: theme.colour.secondary,
    },
  },
});

function createPageContext() {
  return {
    theme: materialTheme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  if (!process.browser) {
    return createPageContext();
  }

  /* eslint-disable no-underscore-dangle */

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;

  /* eslint-enable no-underscore-dangle */
}
