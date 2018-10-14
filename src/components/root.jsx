/* eslint-env browser */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import materialTheme from '../material-theme';
import theme from '../theme';

export default function Root({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={materialTheme}>
        <CssBaseline />
        <Helmet titleTemplate="%s | Friends of Chitambo">
          <html lang="en" />
          <meta
            name="description"
            content="Friends of Chitambo - Registered Scottish Charity (SCO44337)"
          />
        </Helmet>
        {children}
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};
