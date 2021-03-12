import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  category: {
    composes: 'text-uppercase h6 font-weight-semibold',
    letterSpacing: '.9px',
  },
});

export const HeroCategory = ({ title }) => {
  const classes = useStyles();
  return <h2 className={classes.category}>{title}</h2>;
};

HeroCategory.propTypes = {
  title: PropTypes.string.isRequired,
};
