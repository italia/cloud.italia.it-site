import PropTypes from 'prop-types';

export const referencePropType = PropTypes.exact({
  action: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  ariaLabelIcon: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export const resourcePropType = PropTypes.exact({
  title: PropTypes.string,
  references: PropTypes.arrayOf(referencePropType).isRequired,
});

export const glossaryTermPropTypes = PropTypes.exact({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});
