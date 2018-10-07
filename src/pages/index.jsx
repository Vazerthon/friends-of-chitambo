import React from 'react';

import HomePage from '../components/home-page';
import Images from '../queries/images';

function IndexPage() {
  return (
    <Images
      renderChildren={images => (
        <HomePage
          title="Home"
          carouselImages={images.general}
        />
      )}
    />
  );
}

export default IndexPage;
