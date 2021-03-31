import React from 'react';
import PropTypes from 'prop-types';
import { glossaryTermPropTypes } from '../../utils/proptypes.js';
import { GlossaryTerm } from './GlossaryTerm.js';

const GlossaryTerms = ({ terms, expandTerm }) =>
  terms.map((term) => <GlossaryTerm key={term.id} term={term} expandAndScrollIntoView={term.id === expandTerm} />);

export const Glossary = ({ terms, expandTerm }) => {
  const firstColumn = terms.slice(0, terms.length / 2);
  const secondColumn = terms.slice(terms.length / 2, terms.length);
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <GlossaryTerms terms={firstColumn} expandTerm={expandTerm} />
        </div>
        <div className="col-lg-6">
          <GlossaryTerms terms={secondColumn} expandTerm={expandTerm} />
        </div>
      </div>
    </>
  );
};

Glossary.propTypes = {
  terms: PropTypes.arrayOf(glossaryTermPropTypes),
  expandTerm: PropTypes.string,
};
