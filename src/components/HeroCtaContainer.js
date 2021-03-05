import React from 'react';
import PropTypes from 'prop-types';

export const HeroCtaContainer = ({ children }) => (
  <div className="my-4 mt-lg-5 text-center d-flex flex-wrap justify-content-center justify-content-lg-start">
    {children}
  </div>
);

HeroCtaContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
