import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Layout from './layout';
import BlogHeading from './blog-heading';
import Markdown from './markdown';

import Blogs from '../queries/blogs'

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
            <Markdown source={data.body.body} />
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
