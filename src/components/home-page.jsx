import React from 'react';

import Layout from './layout';
import RenderPage from './render-page';

function HomePage() {
  return (
    <Layout>
      <RenderPage page="home" />
    </Layout>
  );
}

export default HomePage;
