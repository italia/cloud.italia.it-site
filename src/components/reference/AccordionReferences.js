import React from 'react';
import { Accordion } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { useAccordion } from '../../hooks/useAccordion.js';
import { AccordionEntry } from '../AccordionEntry.js';
import { References } from './References.js';
import { ReferencesHeader } from './ReferencesHeader.js';

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

export const AccordionReferences = ({ references }) => {
  const classes = useStyles();
  const [activeAccordion, handleClick] = useAccordion();

  return (
    <Accordion className="mt-5">
      {references.map((referencesGroup, index) => (
        <React.Fragment key={referencesGroup.id}>
          <AccordionEntry
            key={index}
            active={activeAccordion === index + 1}
            onToggle={() => handleClick(index + 1)}
            header={() => <ReferencesHeader title={referencesGroup.categoryTitle} />}
            body={() => <References references={referencesGroup.references} />}
            bodyClassNames={classes.accordionBody}
          />
        </React.Fragment>
      ))}
    </Accordion>
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

const referenceGroupPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    categoryTitle: PropTypes.string.isRequired,
    references: PropTypes.arrayOf(referencePropType).isRequired,
  })
);

AccordionReferences.propTypes = {
  references: referenceGroupPropType.isRequired,
};
