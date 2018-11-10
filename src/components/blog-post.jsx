import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';
import Logo from './logo';
import BlogHeading from './blog-heading';

import Blogs from '../queries/blogs'

function BlogPost({ pageContext: { postId } }) {
  return (
    <Layout>
      <Logo text="below" size="large" />
      <Blogs
        postId={postId}
        renderChildren={data => (
          <div>
            <BlogHeading title={data.title} date={data.createdAt} />
          </div>
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
