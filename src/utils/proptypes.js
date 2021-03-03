import PropTypes from 'prop-types';

export const gatsbyImageDataProptype = PropTypes.oneOfType([
  PropTypes.shape({}),
  PropTypes.arrayOf(PropTypes.shape({})),
]).isRequired;

export const imageSharpProptype = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    gatsbyImageData: gatsbyImageDataProptype,
  }),
});
