import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'design-react-kit';
import { useAccordion } from '../hooks/useAccordion.js';
import { AccordionEntry } from './AccordionEntry.js';

const Term = ({ name, description }) => {
  const [activeAccordion, openAccordion] = useAccordion({ noActiveOnInit: true });
  return (
    <Accordion key={name} className="bg-white shadow-lg my-0 my-lg-3 mx-0 mx-lg-2">
      <AccordionEntry
        headerClassName="border-0"
        active={activeAccordion === 1}
        onToggle={() => openAccordion(1)}
        header={() => name}
        body={() => description}
      />
    </Accordion>
  );
};

export const Glossary = ({ terms }) => {
  const termsSorted = terms.sort((a, b) => {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  });
  const even = termsSorted.filter((t, index) => index % 2 === 0);
  const odd = termsSorted.filter((t, index) => index % 2 !== 0);
  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        {even.map((term) => (
          <Term key={term.name} name={term.name} description={term.description} />
        ))}
      </div>
      <div className="col-12 col-lg-6">
        {odd.map((term) => (
          <Term key={term.name} name={term.name} description={term.description} />
        ))}
      </div>
    </div>
  );
};

Glossary.propTypes = {
  terms: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};
