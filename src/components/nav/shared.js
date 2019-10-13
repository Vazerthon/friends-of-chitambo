import PropTypes from 'prop-types';

export const lightestFirst = (x, y) => (x.weight < y.weight ? -1 : 1);

export const items = PropTypes.arrayOf(PropTypes.shape({
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
}));
