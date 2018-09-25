import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <Typography variant="display2" gutterBottom>
      Welcome
    </Typography>
  </Layout>
);

export default withStyles({})(IndexPage);
