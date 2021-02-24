import PropTypes from 'prop-types';

export const fluidImgProptype = PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))])
  .isRequired;

export const imageSharpProptype = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    fluid: fluidImgProptype,
  }),
});
