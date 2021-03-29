import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import labels from '../../contents/labels.yml';

export const Breadcrumb = ({ currentPage }) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav aria-label={labels.ariaLabel.breadcrumb} className="breadcrumb-container">
          <ol className="breadcrumb ml-0 ml-sm-4 mt-4 mb-0 justify-content-center justify-content-sm-start">
            <li className="breadcrumb-item d-none d-sm-block">
              <Link className="font-weight-normal" to="/">
                Home
              </Link>
              <span aria-hidden="true" className="separator">
                /
              </span>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
              <span className="font-weight-semibold">{currentPage}</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
);

Breadcrumb.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
