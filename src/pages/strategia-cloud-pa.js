import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { Hero } from '../components/hero/Hero.js';
import { ResourcesWithAccordion } from '../components/resource/ResourcesWithAccordion.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';

const useStyles = createUseStyles({
  title: {
    composes: 'h5 font-weight-semibold',
    color: '#455A64',
  },
});

const StrategyPage = () => {
  const classes = useStyles();
  const {
    allStrategyResourcesYaml: { nodes: resources },
  } = useStaticQuery(graphql`
    {
      allStrategyResourcesYaml {
        nodes {
          id
          title
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
          <ResourcesWithAccordion resources={resources} />
        </div>
      </Hero>
      <Hero bgColor="light">
        <div className="col-xl-8 col-lg-10 m-auto">
          <div className="mx-4">
            <h2 className={classes.title}>Risorse utili</h2>
          </div>
          <ResourcesWithList resources={resources} />
        </div>
      </Hero>
    </>
  );
};

export default StrategyPage;
