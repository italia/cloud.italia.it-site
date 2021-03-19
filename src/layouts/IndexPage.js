import React from 'react';

import content from '../../contents/home-page/index.yml';
import { NewsPreviewSection } from './home/NewsPreviewSection.js';
import { HowToContributeSection } from './home/HowToContributeSection.js';
import { StrategySection } from './home/StrategySection.js';
import { BenefitSection } from './home/BenefitSection.js';
import { EnablementSection } from './home/EnablementSection.js';
import { ServicesSection } from './home/ServicesSection.js';

const IndexPage = () => (
  <>
    <div className="sr-only">
      <h1>{content.name}</h1>
    </div>
    <StrategySection />
    <BenefitSection />
    <EnablementSection />
    <ServicesSection />
    <NewsPreviewSection />
    <HowToContributeSection />
  </>
);

export default IndexPage;
