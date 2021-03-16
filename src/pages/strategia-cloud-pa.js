import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { StaticImage } from 'gatsby-plugin-image';
import { Hero } from '../components/hero/Hero.js';
import { ResourcesWithAccordion } from '../components/resource/ResourcesWithAccordion.js';
import { ResourcesWithList } from '../components/resource/ResourcesWithList.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';

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
      <h1 className="sr-only">Strategia cloud</h1>
      <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title="La strategia nazionale cloud della PA" className="text-info" Tag="h2" />
              <HeroBody>
                Il Piano triennale per l’informatica nella pubblica amministrazione prevede la realizzazione del sistema
                operativo del paese mediante l’adozione del modello cloud computing nelle pubbliche amministrazioni. Il
                Dipartimento per la trasformazione digitale, in collaborazione con AgID, ha definito la strategia Cloud
                della PA e il programma per abilitare il cloud computing nel settore pubblico.
              </HeroBody>
            </div>
          </div>
        </div>
      </Hero>

      <StaticImage
        aspectRatio={1280 / 548}
        src="../images/strategia_hero_cloud_2x.jpg"
        alt=""
        placeholder="blurred"
        formats={['AUTO', 'AVIF', 'WEBP']}
      />

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
