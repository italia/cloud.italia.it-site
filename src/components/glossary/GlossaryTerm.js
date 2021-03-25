import React, { useEffect, useState } from 'react';
import { Accordion } from 'design-react-kit';
import PropTypes from 'prop-types';
import { AccordionEntry } from '../AccordionEntry.js';
import { glossaryTermPropTypes } from '../../utils/proptypes.js';

export const GlossaryTerm = ({ term, expandedOnMount = false, scrollIntoView = false }) => {
  const [expanded, setExpanded] = useState(expandedOnMount);
  useEffect(() => {
    if (scrollIntoView) {
      document.getElementById(term.id)?.scrollIntoView({ block: 'center', inline: 'center' });
    }
  }, [term.id, scrollIntoView]);
  return (
    <Accordion id={term.id} className="bg-white shadow-lg my-0 my-lg-3 mx-0 mx-lg-2">
      <AccordionEntry
        headerClassName="border-0"
        active={expanded}
        onToggle={() => setExpanded(!expanded)}
        header={() => term.name}
        body={() => <span dangerouslySetInnerHTML={{ __html: term.description }} />}
      />
    </Accordion>
  );
};

GlossaryTerm.propTypes = {
  term: glossaryTermPropTypes,
  expandedOnMount: PropTypes.bool,
  scrollIntoView: PropTypes.bool,
};
