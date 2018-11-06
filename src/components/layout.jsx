import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import DrawerMenu from './drawer-menu';
import Footer from './footer';

import PageList from '../queries/page-list';

import Root from './root';

const Container = styled.div`
  min-height: 80vh;
  padding: ${({ theme }) => theme.spacing.units(2)};
  padding-bottom: 0;
  padding-top: ${({ theme }) => theme.spacing.units(10)};
  margin: 0 ${({ theme }) => theme.spacing.units(20)};

  ${({ theme }) => theme.media.medium`
    margin: 0 ${theme.spacing.units(10)};
  `} ${({ theme }) => theme.media.small`
    margin: 0;
  `};
`;

class Layout extends Component {
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
    const { children, title } = this.props;
    const { menuOpen } = this.state;

    return (
      <Root>
        <Helmet title={title} />
        <AppBar>
          <Toolbar disableGutters>
            <Button
              variant="text"
              onClick={() => this.setMenuState(true)}
              aria-label="Main menu"
            >
              <MenuIcon />
            </Button>
          </Toolbar>
        </AppBar>
        <PageList
          renderChildren={pages => (
            <DrawerMenu
              open={menuOpen}
              onClose={() => this.setMenuState(false)}
              onOpen={() => this.setMenuState(true)}
              items={pages.map(p => ({ text: p.page, to: p.url, weight: p.weight }))}
            />
          )}
        />
        <Container>
          {children}
        </Container>
        <Footer />
      </Root>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: '',
};

export default Layout;
