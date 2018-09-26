import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Helmet from 'react-helmet';

import withRoot from '../withRoot';

import DrawerMenu from './drawer-menu';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.units(2)};
  padding-bottom: 0;

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
    const { children } = this.props;
    const { menuOpen } = this.state;

    return (
      <Container>
        <Helmet title="Friends of Chitambo">
          <html lang="en" />
        </Helmet>
        <Button variant="fab" onClick={() => this.setMenuState(true)}>
          <MenuIcon />
        </Button>
        <DrawerMenu
          open={menuOpen}
          onClose={() => this.setMenuState(false)}
          onOpen={() => this.setMenuState(true)}
        />
        {children}
      </Container>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRoot(Layout);
