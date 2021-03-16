import React from 'react';
import PropTypes from 'prop-types';

export const List = ({ items }) => (
  <ul className="pl-4 my-4">
    {items.map((i) => (
      <li key={i.id} className="mb-3 text-primary">
        <span className="text-info" dangerouslySetInnerHTML={{ __html: i.html }} />
      </li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
    })
  ).isRequired,
};
