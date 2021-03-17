import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  body: {
    fontSize: '1.3rem',
  },
});

export const HeroBody = ({ html }) => {
  const classes = useStyles();
  return <div className={classes.body} dangerouslySetInnerHTML={{ __html: html }} />;
};

HeroBody.propTypes = {
  html: PropTypes.string.isRequired,
};
