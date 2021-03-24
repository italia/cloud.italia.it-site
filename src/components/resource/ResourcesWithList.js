import React from 'react';
import PropTypes from 'prop-types';
import { resourcePropType } from '../../utils/proptypes.js';
import { ResourceHeader } from './ResourceHeader.js';
import { ResourceReferences } from './ResourceReferences.js';

export const ResourcesWithList = ({ resources, className = '' }) =>
  resources.map((resource, index) => (
    <div key={index} className={className}>
      {resource.title && (
        <div className="mt-5 mb-3 mx-0 mx-sm-4">
          <ResourceHeader title={resource.title} classNames="text-info" />
        </div>
      )}
      <ResourceReferences references={resource.references} />
    </div>
  ));

ResourcesWithList.propTypes = {
  resources: PropTypes.arrayOf(resourcePropType).isRequired,
};
