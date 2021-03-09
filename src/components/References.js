import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Collapse, Button } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { ExpandButton } from './ExpandButton.js';

const useStyles = createUseStyles({
  categoryTitle: {
    composes: 'text-uppercase font-weight-semibold',
    color: '#33485C',
  },
});

const Risorsa = ({ r }) => (
  <li>
    <a href="#">
      <div className="it-right-zone pl-0">
        <div>
          <span className="text">{r.title}</span>
          <small className="text-dark">{r.description}</small>
        </div>
        <div className="btn-icon">
          <small dangerouslySetInnerHTML={{ __html: r.action }}></small>
          <Icon icon={r.icon} className="ml-2" />
        </div>
      </div>
    </a>
  </li>
);

const Category = ({ i, categoryClass }) => (
  <>
    <div className="mt-5 mb-3 mx-4">
      <small className={categoryClass}>{i.categoryTitle}</small>
    </div>
    <div className="it-list-wrapper">
      <ul className="it-list">
        {i.references.map((r, index) => (
          <Risorsa key={index} r={r} />
        ))}
      </ul>
    </div>
  </>
);

export const References = ({ items }) => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);
  const toogleCollapse = () => setCollapsed(!collapsed);
  const firstItem = items[0];
  const rest = items.slice(1);
  console.log(firstItem);
  console.log(rest);
  return (
    <>
      <Category i={firstItem} categoryClass={classes.categoryTitle} />
      <Collapse isOpen={!collapsed} timeout={{ enter: 500, exit: 1000 }}>
        {rest.map((i) => (
          <Category key={i.id} i={i} categoryClass={classes.categoryTitle} />
        ))}
      </Collapse>
      <ExpandButton handleCollapse={toogleCollapse} collapsed={collapsed} />
    </>
  );
};

References.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      categoryTitle: PropTypes.string.isRequired,
      references: PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          action: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired
  ).isRequired,
};
