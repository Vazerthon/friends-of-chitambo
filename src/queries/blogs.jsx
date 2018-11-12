import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const mapToNodes = data => data.allContentfulBlogPost.edges.map(({ node }) => node);
const filterToSingleNode = id => nodes => nodes.find(n => n.id === id);
const identity = x => x;

export default function Blogs({ renderChildren, postId }) {
  const filter = postId ? filterToSingleNode(postId) : identity;
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
                  description
                  body {
                    body
                  }
                }
              }
            }
          }`
        }
      render={data => renderChildren(filter(mapToNodes(data)))}
    />
  );
}

Blogs.propTypes = {
  renderChildren: PropTypes.func.isRequired,
  postId: PropTypes.string,
};
