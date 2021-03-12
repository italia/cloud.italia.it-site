import React from 'react';
import PropTypes from 'prop-types';

export const ResourceHeader = ({ title, classNames = '' }) => (
  <span className={`text-uppercase font-weight-semibold small ${classNames}`}>{title}</span>
);

ResourceHeader.propTypes = {
  classNames: PropTypes.string,
  title: PropTypes.string.isRequired,
};
