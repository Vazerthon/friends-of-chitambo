/* eslint-env browser */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import DrawerMenu from './components/drawer-menu';

import materialTheme from './material-theme';
import theme from './theme';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };
  }

  setMenuState(open) {
    this.setState({ menuOpen: open });
  }

  render() {
    const { children } = this.props;
    const { menuOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={materialTheme}>
          <CssBaseline />
          <Helmet title="Friends of Chitambo">
            <html lang="en" />
            <meta name="description" content="Friends of Chitambo - Registered Scottish Charity (SCO44337)" />
          </Helmet>
          <Button
            variant="flat"
            onClick={() => this.setMenuState(true)}
            aria-label="Main menu"
          >
            <MenuIcon />
          </Button>
          <DrawerMenu
            open={menuOpen}
            onClose={() => this.setMenuState(false)}
            onOpen={() => this.setMenuState(true)}
          />
          {children}
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
