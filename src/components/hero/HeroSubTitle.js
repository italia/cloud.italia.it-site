import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const HeroSubTitle = ({ linkTo = null, title, className = '', Tag = 'h6' }) => (
  <Tag className="h6">
    {linkTo ? (
      <Link to={linkTo} className={`text-decoration-none ${className}`}>
        {title}
      </Link>
    ) : (
      <span className={className}>{title}</span>
    )}
  </Tag>
);

HeroSubTitle.propTypes = {
  className: PropTypes.string,
  linkTo: PropTypes.string,
  Tag: PropTypes.string,
  title: PropTypes.string.isRequired,
};
