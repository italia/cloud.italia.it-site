import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import labels from '../../contents/labels.yml';

const { showMore, close } = labels;

const useStyle = createUseStyles({
  icon: {
    transform: (collapsed) => (collapsed ? 'rotate(180deg)' : 'rotate(0deg)'),
    transition: 'transform 0.8s',
  },
  button: {
    composes: 'd-flex flex-column align-items-center pt-4',
  },
});

export const ExpandButton = ({ collapsed, handleCollapse }) => {
  const classes = useStyle(collapsed);
  return (
    <div
      role="button"
      className="d-flex flex-column align-items-center pt-4"
      onClick={handleCollapse}
      aria-expanded={!collapsed}
    >
      <div className="primary-color h6">{collapsed ? showMore : close}</div>
      <Icon color="primary" className={classes.icon} icon="it-arrow-up-circle" focusable={false} role="img" />
    </div>
  );
};

ExpandButton.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  handleCollapse: PropTypes.func.isRequired,
};
