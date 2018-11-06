import React from 'react';

import Layout from './layout';
import Logo from './logo';

import RenderPage from './render-page';
import BlogSummaries from './blog-summaries';

function BlogPage() {
  return (
    <Layout>
      <Logo text="below" size="large" />
      <RenderPage page="blog" />
      <BlogSummaries />
    </Layout>
  );
}

export default BlogPage;
