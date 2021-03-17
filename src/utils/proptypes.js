import PropTypes from 'prop-types';

export const gatsbyImageDataProptype = PropTypes.oneOfType([
  PropTypes.shape({}),
  PropTypes.arrayOf(PropTypes.shape({})),
]).isRequired;

export const referencePropType = PropTypes.exact({
  action: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export const resourcePropType = PropTypes.exact({
  title: PropTypes.string.isRequired,
  references: PropTypes.arrayOf(referencePropType).isRequired,
});
