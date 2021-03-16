import React from 'react';
import PropTypes from 'prop-types';

export const Paragraph = ({ children }) => (
  <div className="row align-items-center my-2">
    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 m-auto">{children}</div>
  </div>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};
