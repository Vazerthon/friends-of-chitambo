import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

export default function BlogList({ renderChildren }) {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            allContentfulBlogPost {
              edges {
                node {
                  id
                  title
                  slug
                  createdAt
                  author {
                    name
                  }
                  description {
                    description
                  }
                }
              }
            }
          }`
        }
      render={data => renderChildren(data.allContentfulBlogPost.edges.map(({ node }) => node))}
    />
  );
}

BlogList.propTypes = {
  renderChildren: PropTypes.func.isRequired,
};
