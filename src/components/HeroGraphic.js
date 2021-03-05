import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { gatsbyImageDataProptype } from '../utils/proptypes.js';

const useStyles = createUseStyles({
  heroGraphic: {},
  '@media (max-width: 992px)': {
    heroGraphic: {
      order: -1,
    },
  },
});

export const HeroGraphic = ({ alt, className = '', image }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.heroGraphic} ${className}`}>
      <GatsbyImage alt={alt} image={image} />
    </div>
  );
};

HeroGraphic.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  image: gatsbyImageDataProptype,
};
