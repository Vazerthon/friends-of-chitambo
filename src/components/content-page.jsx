import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Layout from './layout';
import Markdown from './markdown';
import Gallery from './gallery';
import CoverImage from './cover-image';
import Panel from './panel';

import Pages from '../queries/pages';

const dataToImage = image => ({ id: image.id, alt: image.title, image: image.image });

const ImageGallery = ({ images }) => (
  images.length > 0 && <Gallery images={images.map(dataToImage)} />
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    image: PropTypes.object,
  })).isRequired,
};

function BlogPost({ pageContext: { pageId } }) {
  return (
    <Pages
      pageId={pageId}
      renderChildren={data => (
        <Layout title={data.title}>
          <Panel>
            <Helmet title={`${data.title}`}>
              <meta name="description" content={data.description} />
            </Helmet>
            { data.coverImage && <CoverImage image={dataToImage(data.coverImage)} />}
            <Markdown source={data.body.body} />
            { data.gallery && <ImageGallery images={data.gallery} />}
          </Panel>
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
