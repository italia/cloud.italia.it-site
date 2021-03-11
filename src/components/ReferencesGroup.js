import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Collapse } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { ExpandButton } from './ExpandButton.js';

const useStyles = createUseStyles({
  referenceGroupTitle: {
    composes: 'text-uppercase font-weight-semibold',
    color: '#33485C',
  },
});

const ReferenceGroupHeader = ({ title, children }) => {
  const classes = useStyles();
  return (
    <>
      <div className="mt-5 mb-3 mx-4">
        <small className={classes.referenceGroupTitle}>{title}</small>
      </div>
      <div className="it-list-wrapper">
        <ul className="it-list">{children}</ul>
      </div>
    </>
  );
};

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

export const ReferencesGroup = ({ references }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toogleCollapse = () => setCollapsed(!collapsed);
  const visibleGroup = references[0];
  const collapsibleGroup = references.slice(1);
  return (
    <>
      <ReferenceGroupHeader title={visibleGroup.categoryTitle}>
        {visibleGroup.references.map((reference, index) => (
          <Reference key={index} reference={reference} />
        ))}
      </ReferenceGroupHeader>
      {collapsibleGroup.length > 0 && (
        <>
          {collapsibleGroup.map((referenceGroup) => (
            <ReferenceGroupHeader key={referenceGroup.id} title={referenceGroup.categoryTitle}>
              <Collapse isOpen={!collapsed}>
                {referenceGroup.references.map((reference, index) => (
                  <Reference key={index} reference={reference} />
                ))}
              </Collapse>
            </ReferenceGroupHeader>
          ))}
          <ExpandButton handleCollapse={toogleCollapse} collapsed={collapsed} />
        </>
      )}
    </>
  );
};

const referencePropType = PropTypes.shape({
  action: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

const referenceGroupPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  categoryTitle: PropTypes.string.isRequired,
  references: PropTypes.arrayOf(referencePropType.isRequired).isRequired,
});

ReferencesGroup.propTypes = {
  references: PropTypes.arrayOf(referenceGroupPropType.isRequired).isRequired,
};

ReferenceGroupHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Reference.propTypes = {
  reference: referencePropType.isRequired,
};
