import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'design-react-kit';

const Reference = ({ reference }) => (
  <li>
    <a href={reference.link} target="_blank" rel="noreferrer" aria-label={reference.ariaLabel}>
      <div className="it-right-zone pl-0">
        <div>
          <span className="text">{reference.title}</span>
          <small className="text-dark">{reference.description}</small>
        </div>
        <div className="btn-icon">
          <small dangerouslySetInnerHTML={{ __html: reference.action }}></small>
          <Icon icon={reference.icon} className="ml-2" />
        </div>
      </div>
    </a>
  </li>
);

export const References = ({ references }) => (
  <div className="it-list-wrapper">
    <ul className="it-list">
      {references.map((reference) => (
        <Reference reference={reference} key={reference.title} />
      ))}
    </ul>
  </div>
);

const referencePropType = PropTypes.shape({
  action: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

References.propTypes = {
  references: PropTypes.arrayOf(referencePropType).isRequired,
};

Reference.propTypes = {
  reference: referencePropType,
};
