import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Layout from './layout';
import Markdown from './markdown';
import Gallery from './gallery';
import CoverImage from './cover-image';

import Pages from '../queries/pages';

const dataToImage = type => image => ({ id: image.id, alt: image.title, data: image[type] });
const fixedToImage = dataToImage('fixed');
const fluidToImage = dataToImage('fluid');
const ImageGallery = ({ images }) => (
  images.length > 0 && <Gallery images={images.map(fixedToImage)} />
);

function BlogPost({ pageContext: { pageId } }) {
  return (
    <Pages
      pageId={pageId}
      renderChildren={data => (
        <Layout>
          <Helmet title={`${data.title}`}>
            <meta name="description" content={data.description} />
          </Helmet>
          { data.coverImage && <CoverImage image={fluidToImage(data.coverImage)} />}
          <Markdown source={data.body.body} />
          { data.gallery && <ImageGallery images={data.gallery} />}
        </Layout>
      )}
    />
  );
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
    pageId: PropTypes.string,
  }).isRequired,
};

export default BlogPost;
