import React, { useState, useRef, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Timeline as TimelineReactKit, TimelinePin, Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import { DateTime } from 'luxon';
import { createUseStyles } from 'react-jss';
import { ExpandButton } from './ExpandButton.js';

const useStyle = createUseStyles({
  resetBackground: {
    backgroundColor: 'inherit',
  },
  timeline: {
    composes: 'my-4',
    overflow: 'hidden',
    maxHeight: ({ collapsed, maxHeight }) => (collapsed ? '380px' : maxHeight),
    transition: 'max-height 1.5s',
  },
});

export const Timeline = ({ collapsible = true }) => {
  const {
    allTimelineYaml: { nodes: timelineData },
  } = useStaticQuery(graphql`
    query {
      allTimelineYaml {
        nodes {
          body
          date
          id
          title
        }
      }
    }
  `);
  const timelineContainer = useRef();

  useEffect(() => {
    let timeoutId;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setMaxHeight(timelineContainer.current.scrollHeight), 150);
    };
    window.addEventListener('resize', resizeListener);
    // ...and call it for the first time
    resizeListener();
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const [collapsed, setCollapsed] = useState(collapsible);
  const [maxHeight, setMaxHeight] = useState(5000);
  const classes = useStyle({ collapsed, maxHeight });
  const toggleCollapse = () => setCollapsed(!collapsed);
  const dateTimeNow = DateTime.now().setZone('Europe/Rome');
  return (
    <>
      <TimelineReactKit className={classes.timeline}>
        <div className="row" ref={timelineContainer}>
          {timelineData.map((entry) => {
            const date = DateTime.fromISO(entry.date, { zone: 'Europe/Rome' });
            const past = dateTimeNow.startOf('month') > date.startOf('month');
            const now = dateTimeNow.startOf('month').toMillis() === date.startOf('month').toMillis();
            return (
              <div className="col-12" key={entry.id}>
                <TimelinePin
                  key={entry.id}
                  icon={past ? 'it-exchange-circle' : 'it-flag'}
                  label={date.setLocale('it').toFormat('LLLL yyyy')}
                  past={past}
                  now={now}
                  nowText="Oggi"
                >
                  <Card className={classes.resetBackground}>
                    <CardBody>
                      <CardTitle className="text-uppercase">{entry.title}</CardTitle>
                      <p className="card-text" dangerouslySetInnerHTML={{ __html: entry.body }} />
                    </CardBody>
                  </Card>
                </TimelinePin>
              </div>
            );
          })}
        </div>
      </TimelineReactKit>
      <ExpandButton handleCollapse={toggleCollapse} collapsed={collapsed} />
    </>
  );
};

Timeline.propTypes = {
  collapsible: PropTypes.bool,
};
