import React, { useEffect, useState } from 'react';
import { Accordion } from 'design-react-kit';
import PropTypes from 'prop-types';
import { AccordionEntry } from '../AccordionEntry.js';
import { glossaryTermPropTypes } from '../../utils/proptypes.js';

export const GlossaryTerm = ({ term, expandedOnInit = false }) => {
  const [expanded, setExpanded] = useState(expandedOnInit);
  useEffect(() => {
    if (expandedOnInit) {
      document.getElementById(term.id)?.scrollIntoView({ block: 'center', inline: 'center' });
      setExpanded(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // This is done on purpose because the automatic expansion could happen only on the first mount
  return (
    <Accordion id={term.id} className="bg-white shadow-lg my-0 my-lg-3 mx-0 mx-lg-2">
      <AccordionEntry
        headerLang="en"
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
  expandedOnInit: PropTypes.bool,
};
