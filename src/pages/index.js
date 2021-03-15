import React from 'react';

import { NewsPreview } from '../components/home/NewsPreview.js';
import { HowToContribute } from '../components/home/HowToContribute.js';
import { Strategy } from '../components/home/Strategy.js';
import { Benefit } from '../components/home/Benefit.js';
import { Enablement } from '../components/home/Enablement.js';
import { Services } from '../components/home/Services.js';

const IndexPage = () => (
  <>
    <div className="sr-only">
      <h1>Cloud Italia</h1>
      <div>Il Cloud della Pubblica Amministrazione</div>
    </div>
    <Strategy />
    <Benefit />
    <Enablement />
    <Services />
    <NewsPreview />
    <HowToContribute />
  </>
);

export default IndexPage;
