import React, { useEffect, useState } from 'react';
import { Accordion } from 'design-react-kit';
import PropTypes from 'prop-types';
import { AccordionEntry } from '../AccordionEntry.js';
import { glossaryTermPropTypes } from '../../utils/proptypes.js';

export const GlossaryTerm = ({ term, expandAndScrollIntoView = false }) => {
  const [expanded, setExpanded] = useState(expandAndScrollIntoView);
  useEffect(() => {
    if (expandAndScrollIntoView) {
      setExpanded(true);
      // We need to wait for animation in order to center the term properly
      setTimeout(
        () =>
          document.getElementById(term.id)?.scrollIntoView({
            block: 'center',
            inline: 'center',
          }),
        300
      );
    }
  }, [expandAndScrollIntoView, term.id]);

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
  expandAndScrollIntoView: PropTypes.bool,
};
