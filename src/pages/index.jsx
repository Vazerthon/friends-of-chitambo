import React from 'react';
import Button from '@material-ui/core/Button';
import { Star } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <Typography variant="display2" gutterBottom>
      Welcome
    </Typography>

    <Button
      variant="fab"
      color="secondary"
      aria-label="Star"
    >
      <Star />
    </Button>
  </Layout>
);

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default IndexPage;
