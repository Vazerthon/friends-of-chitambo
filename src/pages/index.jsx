import React from 'react';

import Layout from '../components/layout';
import Logo from '../components/logo';
import Carousel from '../components/carousel';

const images = [
  { id: 'a', src: 'http://placekitten.com/400/200', alt: 'Kitten One' },
  { id: 'b', src: 'http://placekitten.com/400/400', alt: 'Kitten Two' },
  { id: 'c', src: 'http://placekitten.com/800/400', alt: 'Kitten Three' },
  { id: 'd', src: 'http://placekitten.com/800/300', alt: 'Kitten Four' },
];

function IndexPage() {
  return (
    <Layout title="Home">
      <Logo text="below" size="large" />

      <Carousel images={images} />
    </Layout>
  );
}

export default IndexPage;
