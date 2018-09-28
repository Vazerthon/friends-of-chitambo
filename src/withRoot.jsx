/* eslint-env browser */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import materialTheme from './material-theme';
import theme from './theme';

function withRoot(Component) {
  const root = props => (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={materialTheme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    </ThemeProvider>
  );
  return root;
}

export default withRoot;
