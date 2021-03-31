import React from 'react';
import { Accordion } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { useAccordion } from '../../hooks/useAccordion.js';
import { AccordionEntry } from '../AccordionEntry.js';
import { resourcePropType } from '../../utils/proptypes.js';
import { ResourceReferences } from './ResourceReferences.js';
import { ResourceHeader } from './ResourceHeader.js';

const useStyles = createUseStyles({
  accordionBody: {
    '@global': {
      '.collapse-body': {
        paddingLeft: '0px',
        paddingRight: '0px',
      },
    },
  },
});

export const ResourcesWithAccordion = ({ resources }) => {
  const classes = useStyles();
  const [activeAccordion, openAccordion] = useAccordion();

  return (
    <Accordion>
      {resources.map((resource, index) => (
        <AccordionEntry
          key={index}
          active={activeAccordion === index + 1}
          onToggle={() => openAccordion(index + 1)}
          header={() => <ResourceHeader title={resource.title} />}
          body={() => <ResourceReferences references={resource.references} />}
          headerClassName="px-0 px-sm-4"
          bodyClassName={classes.accordionBody}
        />
      ))}
    </Accordion>
  );
};

ResourcesWithAccordion.propTypes = {
  resources: PropTypes.arrayOf(resourcePropType).isRequired,
};
