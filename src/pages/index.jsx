import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout>
      <Helmet title="Home" />
    </Layout>
  );
}

export default IndexPage;
