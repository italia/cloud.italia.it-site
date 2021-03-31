import React from 'react';
import PropTypes from 'prop-types';
import { glossaryTermPropTypes } from '../../utils/proptypes.js';
import { GlossaryTerm } from './GlossaryTerm.js';

const GlossaryTerms = ({ terms, expandedTermOnInit }) =>
  terms.map((term) => <GlossaryTerm key={term.id} term={term} expandedOnInit={term.id === expandedTermOnInit} />);

export const Glossary = ({ terms, expandedTermOnInit }) => {
  const firstColumn = terms.slice(0, terms.length / 2);
  const secondColumn = terms.slice(terms.length / 2, terms.length);
  return (
    <>
      {/* We need different layouts for mobile and desktop in order to retain the order of the terms */}
      <div className="row">
        <div className="col-lg-6">
          <GlossaryTerms terms={firstColumn} expandedTermOnInit={expandedTermOnInit} />
        </div>
        <div className="col-lg-6">
          <GlossaryTerms terms={secondColumn} expandedTermOnInit={expandedTermOnInit} />
        </div>
      </div>
    </>
  );
};

Glossary.propTypes = {
  terms: PropTypes.arrayOf(glossaryTermPropTypes),
  expandedTermOnInit: PropTypes.string,
};
