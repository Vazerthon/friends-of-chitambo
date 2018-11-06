import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

export default function Json({ renderChildren }) {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            allJson {
              edges {
                node {
                  page
                  url
                  weight
                  frontmatter {
                    title
                    description
                  }
                    content {
                      sections {
                        type
                        text {
                          heading
                          content
                        }
                        multi {
                          children {
                            type
                            text {
                              heading
                              content
                            }
                            list {
                              items
                            }
                          }
                        }
                        carousel {
                          imageCollection
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
