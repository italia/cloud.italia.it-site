import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// TODO: improve this component using react-transition-group

const useStyle = createUseStyles({
  overlay: {
    composes: 'overlay',
    display: ({ isOpen }) => (isOpen ? ['block', '!important'] : 'none'),
  },
});

export const HeaderNav = ({ isOpen, onCloseMenu, children }) => {
  const classes = useStyle({ isOpen });
  // These states are used to manage the fade in and fade out animation of the side menu
  const [expanded, setExpanded] = useState(isOpen);
  const [visible, setVisible] = useState(isOpen);
  // expanded class is used to make the enter and leave animation
  const menuClasses = classNames('navbar-collapsable', { expanded, 'd-block': visible });

  // This replicates the bootstrap italia navbar plugin behaviour
  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      setVisible(true);
      timeoutId = setTimeout(() => {
        setExpanded(true);
      }, 100);
    } else {
      setExpanded(false);
      timeoutId = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  return (
    <div className={menuClasses} style={{ zIndex: 11 }}>
      <div className={classes.overlay} onClick={onCloseMenu}></div>
      <div className="close-div sr-only">
        <button className="btn close-menu" type="button" onClick={onCloseMenu}>
          <span className="it-close">Chiudi</span>
        </button>
      </div>
      {children}
    </div>
  );
};

HeaderNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
