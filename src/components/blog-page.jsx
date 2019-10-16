import React from 'react';

import Layout from './layout';

import BlogSummaries from './blog-summaries';

function BlogPage() {
  return (
    <Layout title="Blog">
      <BlogSummaries />
    </Layout>
  );
}

export default BlogPage;
