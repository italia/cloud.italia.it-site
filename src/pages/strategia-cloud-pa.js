import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { ReferencesHeader } from '../components/reference/ReferencesHeader.js';
import { Hero } from '../components/hero/Hero.js';
import { AccordionReferences } from '../components/reference/AccordionReferences.js';
import { References } from '../components/reference/References.js';

const useStyles = createUseStyles({
  title: {
    composes: 'h5 font-weight-semibold',
    color: '#455A64',
  },
});

const StrategyPage = () => {
  const classes = useStyles();
  const {
    allStrategyReferencesYaml: { nodes: strategyReferences },
  } = useStaticQuery(graphql`
    {
      allStrategyReferencesYaml {
        nodes {
          id
          categoryTitle
          references {
            action
            ariaLabel
            description
            icon
            link
            title
          }
        }
      }
    }
  `);

  return (
    <>
      <Hero bgColor="light">
        <div className="col-xl-8 col-lg-10 m-auto">
          <div className="mx-4">
            <h2 className={classes.title}>Risorse utili</h2>
          </div>
          <AccordionReferences references={strategyReferences} />
        </div>
      </Hero>
      <Hero bgColor="light">
        <div className="col-xl-8 col-lg-10 m-auto">
          <div className="mx-4">
            <h2 className={classes.title}>Risorse utili</h2>
          </div>
          <div className="mt-5 mb-3 mx-4">
            <ReferencesHeader title={strategyReferences[0].categoryTitle} classNames="text-info" />
          </div>
          <References references={strategyReferences[0].references} />
        </div>
      </Hero>
    </>
  );
};

export default StrategyPage;
