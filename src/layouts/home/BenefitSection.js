import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Accordion } from 'design-react-kit';
import { HeroCategory } from '../../components/hero/HeroCategory.js';
import { HeroGraphic } from '../../components/hero/HeroGraphic.js';
import { Hero } from '../../components/hero/Hero.js';
import { AccordionEntry } from '../../components/AccordionEntry.js';
import { useAccordion } from '../../hooks/useAccordion.js';
import content from '../../../contents/home-page/home.yml';

const {
  heroBenefit: { category, title, body, altImg },
  benefits,
} = content;

export const BenefitSection = () => {
  const [activeAccordion, openAccordion] = useAccordion();
  return (
    <Hero bgColor="light">
      <div className="row align-items-center">
        <HeroGraphic className="col-lg-5 d-flex align-items-center justify-content-center">
          <StaticImage
            src="../../images/vantaggi_cloud_1x.png"
            alt={altImg}
            placeholder="blurred"
            formats={['AUTO', 'AVIF', 'WEBP']}
          />
        </HeroGraphic>
        <div className="col-lg-7 mt-4 mt-lg-0">
          <div className="col-xl-9 text-center text-lg-left">
            <HeroCategory title={category} />
            <h3 className="h3">{title}</h3>
            <div className="mt-3 mb-5">{body}</div>
          </div>
          <Accordion className="bg-white shadow-lg">
            {benefits.map((benefit, index) => (
              <AccordionEntry
                key={benefit.title}
                active={activeAccordion === index + 1}
                onToggle={() => openAccordion(index + 1)}
                header={() => benefit.title}
                body={() => benefit.body}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </Hero>
  );
};
