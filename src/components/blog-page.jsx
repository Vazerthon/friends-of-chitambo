import React from 'react';

import Layout from './layout';

import RenderPage from './render-page';
import BlogSummaries from './blog-summaries';

function BlogPage() {
  return (
    <Layout>
      <RenderPage page="blog" />
      <BlogSummaries />
    </Layout>
  );
}

export default BlogPage;
