import React, { useEffect, useState } from 'react';
import content from '../../contents/glossary-page/glossary.yml';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Hero } from '../components/hero/Hero.js';
import { Glossary } from '../components/glossary/Glossary.js';
import { Breadcrumb } from '../components/Breadcrumb.js';
import { SEO } from '../components/SEO.js';
import seo from '../../contents/seo.yml';

const { title, body, glossaryTerms, breadcrumb } = content;
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
  const [state, setState] = useState({
    expandedTermOnInit: null,
    scrollTermIntoViewOnInit: null,
  });
  useEffect(() => {
    // This useEffect is used to:
    // - Understand what is the expanded term in the page
    // - Scroll the term into the view if the term id is in the url hash
    // Those computation can't be done at build time.
    const termId = location.hash.replace('#', '');
    const expandedTermOnInit = glossaryTermsSorted.some((term) => term.id === termId)
      ? termId
      : glossaryTermsSorted[0].id;
    const scrollTermIntoViewOnInit = glossaryTermsSorted.find((term) => term.id === termId)?.id;
    setState({
      expandedTermOnInit,
      scrollTermIntoViewOnInit,
    });
  }, []);
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Breadcrumb currentPage={breadcrumb} />
      <Hero yPaddingXLScreen={false}>
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
            {state.expandedTermOnInit !== null && (
              <Glossary
                terms={glossaryTermsSorted}
                expandedTermOnInit={state.expandedTermOnInit}
                scrollTermIntoViewOnInit={state.scrollTermIntoViewOnInit}
              />
            )}
          </div>
        </div>
      </Hero>
    </>
  );
};
