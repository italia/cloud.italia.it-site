import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Hero = ({ bgColor = '', children }) => {
  const heroClasses = classNames('py-5', {
    'bg-primary': bgColor === 'primary',
    'lightgrey-bg-a2': bgColor === 'light',
  });
  return (
    <div className={heroClasses}>
      <div className="container py-xl-5 px-3 px-md-0">{children}</div>
    </div>
  );
};

Hero.propTypes = {
  bgColor: PropTypes.oneOf(['primary', 'light']),
  children: PropTypes.node.isRequired,
};
