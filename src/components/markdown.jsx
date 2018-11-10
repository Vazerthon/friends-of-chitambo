import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import Typography from './typography';
import { Heading } from './headings';
import { UnorderedList, ListItem } from './list';

const renderers = {
  paragraph: ({ children }) => <Typography tag="p">{children}</Typography>,
  heading: ({ children }) => <Heading>{children}</Heading>,
  link: ({ children }) => <span style={{ color: 'red'}}>{children}</span>, // TODO
  list: props => <UnorderedList {...props} />,
  listItem: props => <ListItem {...props} />,
};

function Markdown({ source }) {
  return (
    <ReactMarkdown
      source={source}
      renderers={renderers}
    />
  );
}

Markdown.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Markdown;
