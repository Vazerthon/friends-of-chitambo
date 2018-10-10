import React from 'react';
import PropTypes from 'prop-types';

import PageContent from '../queries/page-content';

import Layout from './layout';
import Logo from './logo';
import Carousel from './carousel';
import List from './list';
import Text from './text';

function HomePage({ title, carouselImages }) {
  return (
    <Layout title={title}>
      <Logo text="below" size="large" />

      <Text
        heading="Vision"
        content="A healthy Chitambo District"
      />

      <Text
        heading="Mission"
        content="To advance health in the Chitambo District through specific community driven projects"
      />

      <List items={[
        'Improve Emergency Care, to contribute to decreasing mortality and morbidity due to common medical emergencies at district and ultimately national level',
        'Provide nurse scholarships for financially disadvantaged poor students',
        'Maintain ‘Centenary’ ambulance.',
        'Improve under-5s nutrition']}
      />

      <Carousel images={carouselImages} />

      <PageContent page="home" renderChildren={console.log} />
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
