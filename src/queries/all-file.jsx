import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

export default function AllFile({ renderChildren }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile {
            edges {
              node {
                id
                name
                relativePath
                publicURL
              }
            }
          } 
        }
      `}
      render={data => renderChildren(data.allFile.edges)}
    />
  );
}

AllFile.propTypes = {
  renderChildren: PropTypes.func.isRequired,
};
