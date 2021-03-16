import React from 'react';
import PropTypes from 'prop-types';

export const ExternalLink = ({ linkTo, ariaLabel, className = '', children }) => (
  <a href={linkTo} target="_blank" rel="noreferrer" aria-label={ariaLabel} className={className}>
    {children}
  </a>
);

ExternalLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  linkTo: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};
