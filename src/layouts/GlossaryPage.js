import React from 'react';
import content from '../../contents/glossary-page/glossary.yml';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import { Hero } from '../components/hero/Hero.js';
import { Glossary } from '../components/Glossary.js';

const { title, body, glossary } = content;

export const GlossaryPage = () => (
  <>
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
          <Glossary terms={glossary} />
        </div>
      </div>
    </Hero>
  </>
);
