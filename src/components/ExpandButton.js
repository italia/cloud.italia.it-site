import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  icon: {
    transform: (collapsed) => (collapsed ? 'rotate(180deg)' : 'rotate(0deg)'),
    transition: 'transform 1.5s',
  },
  button: {
    composes: 'd-flex flex-column align-items-center pt-4',
  },
});

export const ExpandButton = ({ collapsed, handleCollapse }) => {
  const classes = useStyle(collapsed);
  return (
    <div role="button" className="d-flex flex-column align-items-center pt-4" onClick={handleCollapse}>
      <div className="primary-color h6">{collapsed ? 'Scopri di più' : 'Chiudi'}</div>
      <Icon color="primary" className={classes.icon} icon="it-arrow-up-circle" />
    </div>
  );
};

ExpandButton.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  handleCollapse: PropTypes.func.isRequired,
};
