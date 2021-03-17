import React from 'react';
import PropTypes from 'prop-types';
import { resourcePropType } from '../../utils/proptypes.js';
import { ResourceHeader } from './ResourceHeader.js';
import { ResourceReferences } from './ResourceReferences.js';

export const ResourcesWithList = ({ resources }) =>
  resources.map((resource) => (
    <React.Fragment key={resource.title}>
      <div className="mt-5 mb-3 mx-4">
        <ResourceHeader title={resource.title} classNames="text-info" />
      </div>
      <ResourceReferences references={resource.references} />
    </React.Fragment>
  ));

ResourcesWithList.propTypes = {
  resources: PropTypes.arrayOf(resourcePropType).isRequired,
};
