import React from 'react';
import PropTypes from 'prop-types';

export const ResourceTitle = ({ title }) => (
  <div className="mx-0 mx-sm-4">
    <h2 className="h5 font-weight-semibold text-info-title text-center text-md-left">{title}</h2>
  </div>
);

ResourceTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
