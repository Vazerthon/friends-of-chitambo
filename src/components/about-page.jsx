import React from 'react';

import Layout from './layout';
import Logo from './logo';

import RenderPage from './render-page';

function AboutPage() {
  return (
    <Layout>
      <Logo text="below" size="large" />

      <RenderPage page="about" />
    </Layout>
  );
}

export default AboutPage;
