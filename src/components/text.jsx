import React from 'react';
import PropTypes from 'prop-types';

import Typography from './typography';

function Text({ heading, content }) {
  return (
    <div>
      { heading && <Typography tag="h2">{heading}</Typography> }
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
