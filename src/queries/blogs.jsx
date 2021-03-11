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
            allContentfulBlogPost(sort: { fields: createdAt, order: DESC}) {
              edges {
                node {
                  id
                  title
                  slug
                  dateFromNow: createdAt(fromNow: true)
                  dateDaysDiff: createdAt(difference: "days")
                  dateString: createdAt(formatString: "Do MMMM yyyy")
                  date: createdAt
                  description
                  coverImage {
                    image: gatsbyImageData(
                      layout: FULL_WIDTH
                      formats: [AUTO, WEBP]
                    )
                  }
                  body {
                    body
                  }
                  gallery {
                    id
                    title
                    image: gatsbyImageData(
                      width: 300
                      layout: FIXED
                      formats: [AUTO, WEBP]
                    )
                  }
                  author {
                    ...TeamMemberFragment
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

Blogs.defaultProps = {
  postId: undefined,
};
