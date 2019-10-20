import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import { Heading, SubHeading, Paragraph } from './typography';
import { UnorderedList, ListItem } from './list';
import Link from './link';

const headings = {
  1: props => <Heading {...props} />,
  2: props => <Heading {...props} />,
  3: props => <SubHeading {...props} />,
};

export const renderers = {
  paragraph: props => <Paragraph {...props} />,
  heading: props => headings[props.level](props),
  link: props => <Link {...props} />,
  list: props => <UnorderedList {...props} />,
  listItem: props => <ListItem {...props} />,
};

function Markdown({ source }) {
  return <ReactMarkdown source={source} renderers={renderers} />;
}

Markdown.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Markdown;
