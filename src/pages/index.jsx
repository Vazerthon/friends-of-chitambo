import React from 'react';

import Layout from '../components/layout';
import Logo from '../components/logo';
import Carousel from '../components/carousel';

const images = [
  { src: 'http://placekitten.com/200/100', alt: 'Kitten One' },
  { src: 'http://placekitten.com/200/300', alt: 'Kitten Two' },
  { src: 'http://placekitten.com/1000/500', alt: 'Kitten Three' },
  { src: 'http://placekitten.com/800/100', alt: 'Kitten Four' }]

function IndexPage() {
  return (
    <Layout title="Home">
      <Logo text="below" size="large" />

      <Carousel images={images} />
    </Layout>
  );
}

export default IndexPage;
