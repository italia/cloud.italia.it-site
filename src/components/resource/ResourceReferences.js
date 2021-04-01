import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { referencePropType } from '../../utils/proptypes.js';

const useStyles = createUseStyles({
  icon: {
    composes: 'ml-2 mr-0',
    minWidth: '16px',
  },
});

const Reference = ({ reference }) => {
  const classes = useStyles();
  return (
    <li>
      <a href={reference.link} target="_blank" rel="noreferrer" aria-label={reference.ariaLabel}>
        <div className="it-right-zone mx-0 mx-sm-4 flex-wrap">
          <div className="col-12 col-md-7 col-lg-8 text-center text-md-left">
            <span className="text">{reference.title}</span>
            {reference.description && <small className="text-dark">{reference.description}</small>}
          </div>
          <div className="col-12 col-md-5 col-lg-4 btn-icon justify-content-center justify-content-md-end mt-3 mt-md-0">
            <small dangerouslySetInnerHTML={{ __html: reference.action }}></small>
            <Icon
              icon={reference.icon}
              className={classes.icon}
              focusable={false}
              role="img"
              aria-label={reference.ariaLabelIcon}
            />
          </div>
        </div>
      </a>
    </li>
  );
};

export const ResourceReferences = ({ references }) => (
  <div className="it-list-wrapper">
    <ul className="it-list">
      {references.map((reference) => (
        <Reference reference={reference} key={reference.title} />
      ))}
    </ul>
  </div>
);

ResourceReferences.propTypes = {
  references: PropTypes.arrayOf(referencePropType).isRequired,
};

Reference.propTypes = {
  reference: referencePropType.isRequired,
};
