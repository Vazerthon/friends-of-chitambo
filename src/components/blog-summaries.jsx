import React from 'react';
import styled from 'styled-components';

import BlogList from '../queries/blog-list';
import Typography from './typography';

const Summary = styled.div`
`;


function BlogSummaries() {
  return (
    <BlogList
      renderChildren={(blogs) => blogs.map(article => (
        <Summary key={article.id}>
          <Typography tag="h2">
            {article.title}
          </Typography>
          <Typography tag="p">
            {article.description.description}
          </Typography>
        </Summary>
      ))}
    />
  );
}

export default BlogSummaries;
