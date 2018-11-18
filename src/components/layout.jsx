import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './logo';

import DrawerMenu from './drawer-menu';
import Footer from './footer';

import Pages from '../queries/pages';

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

// TODO: find a way to not maintain this manually
const nonContentManagedPages = [{
  title: 'Blog',
  slug: 'blog',
  menuOrder: 100,
}];

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
        <Pages
          renderChildren={pages => (
            <DrawerMenu
              open={menuOpen}
              onClose={() => this.setMenuState(false)}
              onOpen={() => this.setMenuState(true)}
              items={[...pages, ...nonContentManagedPages].map(p => ({ text: p.title, to: p.slug, weight: p.menuOrder }))}
            />
          )}
        />
        <Container>
          <Logo text="below" size="large" />
          
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
