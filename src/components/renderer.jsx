import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Text from './text';
import List from './list';

function Renderer({ sections }) {
  const renderStrategies = {
    text: props => <Text {...props} />,
    list: props => <List {...props} />,
    multi: ({ children }) => Renderer({ sections: children }),
  };

  return sections.map(section => (
    <Fragment key={`${section.type}${sections.indexOf(section)}`}>
      { renderStrategies[section.type](section[section.type]) }
    </Fragment>
  ));
}

const componentTypes = [
  'text',
  'multi',
  'list',
];

Renderer.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.oneOf(componentTypes) })),
};

export default Renderer;
