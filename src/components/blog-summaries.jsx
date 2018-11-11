import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Blogs from '../queries/blogs';
import { Paragraph } from './typography';
import BlogHeading from './blog-heading';

const Summary = styled.div`
  padding: ${({ theme }) => theme.spacing.units(2)};
  margin-bottom: ${({ theme }) => theme.spacing.units(4)};
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

function BlogSummaries() {
  return (
    <Blogs
      renderChildren={(blogs) => blogs.map(article => (
        <Paper key={article.id}>
          <Summary>
            <BlogHeading title={article.title} date={article.createdAt} />
            <Paragraph>
              {article.description.description}
            </Paragraph> 
            <Footer>
              <Link to={`blog/${article.slug}`}>
                <Button variant="outlined" color="secondary">Read more</Button>
              </Link>
            </Footer>
          </Summary>
        </Paper>
      ))}
    />
  );
}

export default BlogSummaries;
