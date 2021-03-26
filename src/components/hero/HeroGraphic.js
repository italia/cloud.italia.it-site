import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  heroGraphic: {},
  '@media (max-width: 992px)': {
    heroGraphic: {
      order: -1,
    },
  },
});

export const HeroGraphic = ({ className = '', children }) => {
  const classes = useStyles();
  return <div className={`${classes.heroGraphic} ${className}`}>{children}</div>;
};

HeroGraphic.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
