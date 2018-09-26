/* eslint-env browser */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from './getPageContext';

import theme from './theme';

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props);
      this.muiPageContext = props.muiPageContext || getPageContext();
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#server-side-jss');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <MuiThemeProvider
          theme={this.muiPageContext.theme}
          sheetsManager={this.muiPageContext.sheetsManager}
        >
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Component {...this.props} />
          </ThemeProvider>
        </MuiThemeProvider>
      );
    }
  }

  WithRoot.propTypes = {
    muiPageContext: PropTypes.object, // eslint-disable-line
  };

  return WithRoot;
}

export default withRoot;
