import React from 'react';
import PropTypes from 'prop-types';

export const ResourceHeader = ({ title, classNames = '' }) => (
  <h3 className={`text-uppercase font-weight-semibold h6 text-center text-md-left ${classNames}`}>{title}</h3>
);

ResourceHeader.propTypes = {
  classNames: PropTypes.string,
  title: PropTypes.string.isRequired,
};
