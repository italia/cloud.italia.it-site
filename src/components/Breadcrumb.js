import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const useStyle = createUseStyles({
  home: {
    fontWeight: 'normal !important',
  },
  current: {
    fontWeight: 600,
  },
});

export const Breadcrumb = ({ currentPage }) => {
  const classes = useStyle();
  return (
    <div className="row">
      <div className="col-12">
        <nav aria-label="Sei qui" className="breadcrumb-container">
          <ol className="breadcrumb mt-4 mb-5 justify-content-center justify-content-sm-start">
            <li className="breadcrumb-item d-none d-sm-block">
              <Link className={classes.home} to="/" aria-label="Home">
                Home
              </Link>
              <span aria-hidden="true" className="separator">
                /
              </span>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
              <span className={classes.current}>{currentPage}</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
