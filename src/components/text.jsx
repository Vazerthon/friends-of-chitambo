import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from './script';

function Text({ heading, content }) {
  return (
    <div>
      { heading && <Heading tag="h2">{heading}</Heading> }
      <p>
        {content}
      </p>
    </div>
  );
}

Text.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Text.defaultProps = {
  heading: '',
};

export default Text;
