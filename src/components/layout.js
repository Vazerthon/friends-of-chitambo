import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import withRoot from '../withRoot';
import Header from './header';

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

const Layout = ({ children, classes }) => (
  <Fragment>
    <Helmet title="Friends of Chitambo">
      <html lang="en" />
    </Helmet>
    <Header siteTitle="Friends of Chitambo" />
    <div className={classes.root}>{children}</div>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Layout));
