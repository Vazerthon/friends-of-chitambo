import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import withRoot from '../withRoot';

import DrawerMenu from './drawer-menu';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    },
  },
});

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
    const { classes, children } = this.props;
    const { menuOpen } = this.state;

    return (
      <Fragment>
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
        <div className={classes.root}>{children}</div>
      </Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withRoot(withStyles(styles)(Layout));
