import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

export default function Json({ renderChildren }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allJson {
            edges {
              node {
                page
                frontmatter {
                  title
                  description
                }
                  content {
                    sections {
                      heading
                      type
                      content
                      children {
                        type
                        content
                      }
                    }
                  }
                }
              }
            }
          }`
        }
      render={data => renderChildren(data.allJson.edges)}
    />
  );
}

Json.propTypes = {
  renderChildren: PropTypes.func.isRequired,
};
