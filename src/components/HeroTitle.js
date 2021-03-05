import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const HeroTitle = ({ linkTo = null, title, className = '' }) => (
  <h3 className="h1">
    {linkTo ? (
      <Link to={linkTo} className={`text-decoration-none ${className}`}>
        {title}
      </Link>
    ) : (
      <span className={className}>{title}</span>
    )}
  </h3>
);

HeroTitle.propTypes = {
  className: PropTypes.string,
  linkTo: PropTypes.string,
  title: PropTypes.string.isRequired,
};
