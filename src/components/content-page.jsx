import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Layout from './layout';
import Markdown from './markdown';
import Carousel from './carousel';

import Pages from '../queries/pages'

const dataToImage = image => ({ id: image.id, fluid: image.fluid, alt: image.title });
const ImageCarousel = ({ images }) => images.length > 0 && <Carousel images={images.map(dataToImage)} />;

function BlogPost({ pageContext: { pageId } }) {
  return (
    <Pages
      pageId={pageId}
      renderChildren={data => (
        <Layout>
            <Helmet title={`${data.title}`}>
                <meta name="description" content={data.description} />
            </Helmet>
            { data.carousel && <ImageCarousel images={data.carousel} />}
            <Markdown source={data.body.body} />
        </Layout>
      )}
      />
  )
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
    pageId: PropTypes.string,
  })
};

export default BlogPost;
