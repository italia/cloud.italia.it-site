import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const HeroTitle = ({ linkTo = null, title, className = '', Tag = 'h3' }) => (
  <Tag className="h1 mb-4">
    {linkTo ? (
      <Link to={linkTo} className={`text-decoration-none ${className}`}>
        {title}
      </Link>
    ) : (
      <span className={className}>{title}</span>
    )}
  </Tag>
);

HeroTitle.propTypes = {
  className: PropTypes.string,
  linkTo: PropTypes.string,
  Tag: PropTypes.string,
  title: PropTypes.string.isRequired,
};
