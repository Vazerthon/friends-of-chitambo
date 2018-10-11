import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';
import Logo from './logo';

import RenderPage from './render-page';

function HomePage({ title }) {
  return (
    <Layout title={title}>
      <Logo text="below" size="large" />

      <RenderPage page="home" />
    </Layout>
  );
}

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomePage;
