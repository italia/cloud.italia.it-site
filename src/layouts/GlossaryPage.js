import React, { useEffect, useState } from 'react';
import content from '../../contents/glossary-page/glossary.yml';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Hero } from '../components/hero/Hero.js';
import { Glossary } from '../components/glossary/Glossary.js';
import { SEO } from '../components/SEO.js';
import seo from '../../contents/seo.yml';

const { title, body, glossaryTerms } = content;
const { title: seoTitle, description: seoDescription } = seo.glossaryPage;

const sortTermsByName = (terms) =>
  terms.sort((a, b) => {
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

const glossaryTermsSorted = sortTermsByName(glossaryTerms);

export const GlossaryPage = () => {
  const [expandedTermOnInit, setExpandedTermOnInit] = useState(null);
  const [terms, setTerms] = useState([]);
  useEffect(() => {
    // This useEffect is used to understand if there is an expanded term in the page on init, based on the term id in the url hash.
    // Due to the fact that the url hash depends on the client, this computation can't be done in the SSR phase.
    const termId = location.hash.replace('#', '');
    if (glossaryTermsSorted.some((term) => term.id === termId)) {
      setExpandedTermOnInit(termId);
    }
    setTerms(glossaryTermsSorted);
  }, []);
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title={title} className="text-info" Tag="h1" />
              <HeroBody html={body} />
            </div>
          </div>
        </div>
      </Hero>
      <Hero bgColor="light">
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-10 mt-4 mt-lg-0">
            {terms.length > 0 && <Glossary terms={glossaryTermsSorted} expandedTermOnInit={expandedTermOnInit} />}
          </div>
        </div>
      </Hero>
    </>
  );
};
