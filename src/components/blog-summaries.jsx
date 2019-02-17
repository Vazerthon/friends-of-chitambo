import React, { Fragment } from 'react';

import { Heading } from './typography';
import Blogs from '../queries/blogs';
import SummaryCard from './summary-card';

function BlogSummaries() {
  return (
    <Fragment>
      <Heading>Blog Posts</Heading>
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
    </Fragment>
  );
}

export default BlogSummaries;
