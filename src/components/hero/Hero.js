import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Hero = ({ bgColor = '', xPadding = true, yPaddingXLScreen = true, children }) => {
  const heroClasses = classNames('py-5', {
    'bg-primary': bgColor === 'primary',
    'lightgrey-bg-a2': bgColor === 'light',
  });
  const containerClass = classNames('container', {
    'py-xl-5': yPaddingXLScreen,
    'px-3 px-md-0': xPadding,
  });
  return (
    <div className={heroClasses}>
      <div className={containerClass}>{children}</div>
    </div>
  );
};

Hero.propTypes = {
  bgColor: PropTypes.oneOf(['primary', 'light']),
  xPadding: PropTypes.bool,
  yPaddingXLScreen: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
