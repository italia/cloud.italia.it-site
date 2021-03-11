import React from 'react';
import PropTypes from 'prop-types';

export const ReferencesHeader = ({ title, classNames = '' }) => (
  <span className={`text-uppercase font-weight-semibold small ${classNames}`}>{title}</span>
);

ReferencesHeader.propTypes = {
  classNames: PropTypes.string,
  title: PropTypes.string.isRequired,
};
