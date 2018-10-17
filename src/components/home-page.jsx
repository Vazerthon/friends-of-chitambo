import React from 'react';

import Layout from './layout';
import Logo from './logo';

import RenderPage from './render-page';

function HomePage() {
  return (
    <Layout>
      <Logo text="below" size="large" />

      <RenderPage page="home" />
    </Layout>
  );
}

export default HomePage;
