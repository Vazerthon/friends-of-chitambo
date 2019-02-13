import React from 'react';

import Blogs from '../queries/blogs';
import SummaryCard from './summary-card';

function BlogSummaries() {
  return (
    <Blogs
      renderChildren={(blogs) => blogs.map(article => (
        <SummaryCard
          key={article.id}
          title={article.title}
          date={article.createdAt}
          description={article.description}
          url={`blog/${article.slug}`}
        />
      ))}
    />
  );
}

export default BlogSummaries;
