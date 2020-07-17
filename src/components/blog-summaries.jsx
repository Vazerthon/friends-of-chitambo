import React from 'react';

import { Heading } from './typography';
import Blogs from '../queries/blogs';
import SummaryCard from './summary-card';

function BlogSummaries() {
  return (
    <>
      <Heading>Blog Posts</Heading>
      <Blogs
        renderChildren={(blogs) => blogs.map(article => (
          <SummaryCard
            key={article.id}
            title={article.title}
            date={article.dateString}
            description={article.description}
            url={`blog/${article.slug}`}
          />
        ))}
      />
    </>
  );
}

export default BlogSummaries;
