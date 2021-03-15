import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Timeline } from '../components/Timeline.js';

const ServicesPage = () => {
  const {
    allStrategyTimelineYaml: { nodes: timelineData },
  } = useStaticQuery(graphql`
    query {
      allStrategyTimelineYaml {
        nodes {
          body
          date
          id
          title
        }
      }
    }
  `);
  return (
    <>
      <h1 className="sr-only">Qualificazione dei servizi</h1>
      <div className="section lightgrey-bg-a2">
        <h2 className="h4 text-center text-primary">Piano di attuazione</h2>
        <Timeline data={timelineData} />
      </div>
    </>
  );
};

export default ServicesPage;
