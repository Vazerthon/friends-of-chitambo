import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';
import Logo from './logo';

import RenderPage from './render-page';

function AboutPage({ title }) {
  return (
    <Layout title={title}>
      <Logo text="below" size="large" />

      <RenderPage page="about" />
    </Layout>
  );
}

AboutPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AboutPage;
