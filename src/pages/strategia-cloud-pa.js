import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { References } from '../components/References.js';
import { Hero } from '../components/Hero.js';

const useStyles = createUseStyles({
  title: {
    composes: 'h5 font-weight-semibold',
    color: '#455A64',
  },
});

const StrategyPage = () => {
  const classes = useStyles();
  const {
    allStrategyReferencesYaml: { nodes: items },
  } = useStaticQuery(graphql`
    {
      allStrategyReferencesYaml {
        nodes {
          id
          categoryTitle
          references {
            action
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
    <Hero bgColor="light">
      <div className="col-xl-8 col-lg-10 m-auto">
        <div className="mx-4">
          <h2 className={classes.title}>Risorse utili</h2>
          <div className="my-4 col-lg-10 col-12 pl-0">
            Vivamus orci risus, fringilla sit amet enim vel, semper faucibus elit. Aliquam nec laoreet leo
          </div>
        </div>
        <References items={items} />
      </div>
    </Hero>
  );
};

export default StrategyPage;
