import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';

const useStyles = createUseStyles({
  btnOutlineLight: {
    composes: 'btn-primary focus-a11y-contrast',
    boxShadow: 'inset 0 0 0 2px white',
  },
  btnPrimaryLight: {
    composes: 'btn-primary focus-a11y-contrast',
    backgroundColor: 'var(--white)',
    color: 'var(--primary)',
  },
});

export const Cta = ({ linkTo, text, color = 'primary', type = 'primary', ...attributes }) => {
  const classes = useStyles();
  const linkClasses = classNames('btn text-uppercase mx-4 ml-lg-0 my-2', {
    'btn-primary': color === 'primary' && type === 'primary',
    'btn-outline-primary': color === 'primary' && type === 'outline',
    [classes.btnPrimaryLight]: color === 'light' && type === 'primary',
    [classes.btnOutlineLight]: color === 'light' && type === 'outline',
  });
  return (
    <Link to={linkTo} className={linkClasses} {...attributes}>
      {text}
    </Link>
  );
};

Cta.propTypes = {
  attributes: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'light']),
  type: PropTypes.oneOf(['primary', 'outline']),
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
