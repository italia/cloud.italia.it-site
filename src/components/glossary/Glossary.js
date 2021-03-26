import React from 'react';
import PropTypes from 'prop-types';
import { glossaryTermPropTypes } from '../../utils/proptypes.js';
import { GlossaryTerm } from './GlossaryTerm.js';

const GlossaryTerms = ({ terms, expandedTermOnInit, scrollTermIntoViewOnInit }) =>
  terms.map((term) => (
    <GlossaryTerm
      key={term.id}
      term={term}
      expandedOnMount={term.id === expandedTermOnInit}
      scrollIntoView={term.id === scrollTermIntoViewOnInit}
    />
  ));

export const Glossary = ({ terms, expandedTermOnInit, scrollTermIntoViewOnInit = null }) => {
  const even = terms.filter((t, index) => index % 2 === 0);
  const odd = terms.filter((t, index) => index % 2 !== 0);
  return (
    <>
      {/* We need different layouts for mobile and desktop in order to retain the order of the terms */}
      <div className="d-none d-lg-flex row">
        <div className="col-lg-6">
          <GlossaryTerms
            terms={even}
            expandedTermOnInit={expandedTermOnInit}
            scrollTermIntoViewOnInit={scrollTermIntoViewOnInit}
          />
        </div>
        <div className="col-lg-6">
          <GlossaryTerms
            terms={odd}
            expandedTermOnInit={expandedTermOnInit}
            scrollTermIntoViewOnInit={scrollTermIntoViewOnInit}
          />
        </div>
      </div>
      <div className="row d-lg-none">
        <div className="col-12">
          <GlossaryTerms
            terms={terms}
            expandedTermOnInit={expandedTermOnInit}
            scrollTermIntoViewOnInit={scrollTermIntoViewOnInit}
          />
        </div>
      </div>
    </>
  );
};

Glossary.propTypes = {
  terms: PropTypes.arrayOf(glossaryTermPropTypes),
  expandedTermOnInit: PropTypes.string.isRequired,
  scrollTermIntoViewOnInit: PropTypes.string,
};
