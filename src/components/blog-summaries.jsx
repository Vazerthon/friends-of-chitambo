import React from 'react';
import { format } from 'date-fns';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import BlogList from '../queries/blog-list';
import Typography from './typography';

const Summary = styled.div`
  padding: ${({ theme }) => theme.spacing.units(2)};
  margin-bottom: ${({ theme }) => theme.spacing.units(4)};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

function BlogSummaries() {
  return (
    <BlogList
      renderChildren={(blogs) => blogs.map(article => (
        <Paper key={article.id}>
          <Summary>
            <Header>
              <Typography tag="h2">
                {article.title}
              </Typography>
              <Typography tag="h3">
                {format(article.createdAt, 'Do MMMM YYYY')}
              </Typography>
            </Header>
            <Typography tag="p">
              {article.description.description}
            </Typography> 
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
