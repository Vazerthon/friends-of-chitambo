import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import Layout from '../components/layout';

const styles = theme => ({
  section: {
    marginTop: theme.spacing.unit * 3,
  },
  toolbar: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    marginRight: theme.spacing.unit,
  },
});

const IndexPage = ({ classes }) => (
  <Layout>
    <Typography variant="display2" gutterBottom>
      Welcome
    </Typography>

    <Button
      variant="fab"
      color="secondary"
      aria-label="Star"
      className={classes.button}
    >
      <Icon>star</Icon>
    </Button>
  </Layout>
);

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(IndexPage);
