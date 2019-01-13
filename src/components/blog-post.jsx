import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Layout from './layout';
import BlogHeading from './blog-heading';
import Markdown from './markdown';
import CoverImage from './cover-image';

import Blogs from '../queries/blogs'

const dataToImage = type => image => ({ id: image.id, alt: image.title, data: image[type] });
const fixedToImage = dataToImage('fixed');
const fluidToImage = dataToImage('fluid');
const ImageGallery = ({ images }) => images.length > 0 && <Gallery images={images.map(fixedToImage)} />;

function BlogPost({ pageContext: { postId } }) {
  return (
    <Layout>
      <Blogs
        postId={postId}
        renderChildren={data => (
          <Fragment>
            <Helmet title={`${data.title} | blog`}>
                <meta name="description" content={data.description} />
            </Helmet>
            <BlogHeading title={data.title} date={data.createdAt} />
            { data.coverImage && <CoverImage image={fluidToImage(data.coverImage)} />}
            <Markdown source={data.body.body} />
            { data.gallery && <ImageGallery images={data.gallery} />}
          </Fragment>
      )}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
    postId: PropTypes.string,
  })
};

export default BlogPost;
