import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';
import Logo from './logo';
import Carousel from './carousel';

function HomePage({ title, carouselImages }) {
  return (
    <Layout title={title}>
      <Logo text="below" size="large" />

      <Carousel images={carouselImages} />
    </Layout>
  );
}

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
  carouselImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default HomePage;
