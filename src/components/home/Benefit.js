import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Accordion } from 'design-react-kit';
import { HeroCategory } from '../hero/HeroCategory.js';
import { HeroGraphic } from '../hero/HeroGraphic.js';
import { Hero } from '../hero/Hero.js';
import { AccordionEntry } from '../AccordionEntry.js';
import { useAccordion } from '../../hooks/useAccordion.js';

const accordionData = [
  {
    header: () => 'Per i cittadini',
    body: () => `Servizi pubblici basati sul modello cloud garantiscono ai cittadini maggiore affidabilità, sicurezza e rispetto
          della privacy. Sono servizi progettati in maniera nativa digitale e che hanno una minore incidenza sulla spesa
          pubblica.`,
  },
  {
    header: () => 'Per le amministrazioni',
    body: () => `Le amministrazioni beneficiano di risparmi significativi da reinvestire nello sviluppo di nuovi servizi,
        maggiore trasparenza sui costi e sull’utilizzo dei servizi, agilità e scalabilità nella gestione delle
        infrastrutture.`,
  },
  {
    header: () => 'Per le PMI dell’ICT che operano nel settore pubblico',
    body: () => `Le piccole e medie imprese (PMI) nel settore delle tecnologie digitali sono chiamate ad accompagnare le
        amministrazioni verso l’adozione di soluzioni in cloud per i propri servizi, aumentando la qualità e la quantità
        di servizi qualificati. Rappresentano un elemento di stimolo per il settore pubblico nel rivolgersi a un mercato
        maturo per le soluzioni cloud.`,
  },
];

export const Benefit = () => {
  const data = useStaticQuery(graphql`
    query {
      vantaggi_cloud: file(relativePath: { eq: "vantaggi_cloud_1x.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, AVIF, WEBP])
        }
      }
    }
  `);
  const [activeAccordion, handleClick] = useAccordion();
  return (
    <Hero bgColor="light">
      <div className="row align-items-center">
        <HeroGraphic
          alt=""
          image={getImage(data.vantaggi_cloud)}
          className="col-lg-5 d-flex align-items-center justify-content-center"
        />
        <div className="col-lg-7 mt-4 mt-lg-0">
          <div className="col-xl-9 text-center text-lg-left">
            <HeroCategory title="I vantaggi" />
            <h3 className="h3">Un modello che porta beneficio all’intero sistema Paese</h3>
            <div className="mt-3 mb-5">
              La trasformazione dei servizi pubblici attraverso l&apos;adozione del cloud è essenziale per garantire al
              Paese la possibilità di crescere, competere, generare nuove opportunità di lavoro qualificato, creare e
              distribuire nuova ricchezza in maniera uniforme su tutto il territorio nazionale
            </div>
          </div>
          <Accordion className="bg-white shadow-lg">
            {accordionData.map((entry, index) => (
              <AccordionEntry
                key={index}
                active={activeAccordion === index + 1}
                onToggle={() => handleClick(index + 1)}
                header={entry.header}
                body={entry.body}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </Hero>
  );
};
