import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Layout from './layout';
import BlogHeading from './blog-heading';
import Markdown from './markdown';
import Gallery from './gallery';
import CoverImage from './cover-image';

import Events from '../queries/events';

const dataToImage = type => image => ({ id: image.id, alt: image.title, data: image[type] });
const fixedToImage = dataToImage('fixed');
const fluidToImage = dataToImage('fluid');
const ImageGallery = ({ images }) => (
  images.length > 0 && <Gallery images={images.map(fixedToImage)} />
);

function EventPage({ pageContext: { eventId } }) {
  return (
    <Layout>
      <Events
        eventId={eventId}
        renderChildren={data => (
          <Fragment>
            <Helmet title={`${data.title} | event`}>
              <meta name="description" content={data.description} />
            </Helmet>
            <BlogHeading title={data.title} date={data.date} />
            { data.coverImage && <CoverImage image={fluidToImage(data.coverImage)} />}
            <Markdown source={data.body.body} />
            { data.gallery && <ImageGallery images={data.gallery} />}
          </Fragment>
        )}
      />
    </Layout>
  );
}

EventPage.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
    eventId: PropTypes.string,
  }).isRequired,
};

export default EventPage;
