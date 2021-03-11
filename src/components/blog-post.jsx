import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Panel from './panel';
import Layout from './layout';
import TitleWithDate from './title-with-date';
import Markdown from './markdown';
import Gallery from './gallery';
import CoverImage from './cover-image';

import Blogs from '../queries/blogs';
import BlogAuthor from './blog-author';

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

function BlogPost({ pageContext: { postId } }) {
  return (
    <Layout title="Blog">
      <Panel>
        <Blogs
          postId={postId}
          renderChildren={data => (
            <>
              <Helmet title={`${data.title} | blog`}>
                <meta name="description" content={data.description} />
              </Helmet>
              <TitleWithDate title={data.title} date={data.dateString} />
              { data.coverImage && <CoverImage image={dataToImage(data.coverImage)} />}
              { data.author && <BlogAuthor author={data.author} /> }
              <Markdown source={data.body.body} />
              { data.gallery && <ImageGallery images={data.gallery} />}
            </>
          )}
        />
      </Panel>
    </Layout>
  );
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
    postId: PropTypes.string,
  }).isRequired,
};

export default BlogPost;
