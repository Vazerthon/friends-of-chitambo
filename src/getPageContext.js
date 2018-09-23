import { SheetsRegistry } from 'react-jss';
import {
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f68712',
    },
    secondary: {
      main: '#2f933c',
    },
  },
});

function createPageContext() {
  return {
    theme,
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
