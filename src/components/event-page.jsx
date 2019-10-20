import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Panel from './panel';
import Layout from './layout';
import TitleWithDate from './title-with-date';
import Markdown from './markdown';
import Gallery from './gallery';
import CoverImage from './cover-image';

import Events from '../queries/events';

const dataToImage = type => image => ({ id: image.id, alt: image.title, [type]: image[type] });
const fixedToImage = dataToImage('fixed');
const fluidToImage = dataToImage('fluid');
const ImageGallery = ({ images }) => (
  images.length > 0 && <Gallery images={images.map(fixedToImage)} />
);

function EventPage({ pageContext: { eventId } }) {
  return (
    <Layout title="Events">
      <Panel>
        <Events
          eventId={eventId}
          renderChildren={data => (
            <Fragment>
              <Helmet title={`${data.title} | events`}>
                <meta name="description" content={data.description} />
              </Helmet>
              <TitleWithDate title={data.title} date={data.date} />
              { data.coverImage && <CoverImage image={fluidToImage(data.coverImage)} />}
              <Markdown source={data.body.body} />
              { data.gallery && <ImageGallery images={data.gallery} />}
            </Fragment>
          )}
        />
      </Panel>
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
