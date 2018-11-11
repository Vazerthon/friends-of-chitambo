import React from 'react';

import Layout from './layout';

import RenderPage from './render-page';

function AboutPage() {
  return (
    <Layout>
      <RenderPage page="about" />
    </Layout>
  );
}

export default AboutPage;
