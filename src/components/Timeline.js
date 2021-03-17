import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Timeline as TimelineReactKit, TimelinePin, Card, CardBody } from 'design-react-kit';
import { DateTime } from 'luxon';
import { createUseStyles } from 'react-jss';
import { ExpandButton } from './ExpandButton.js';

const useStyle = createUseStyles({
  resetBackground: {
    backgroundColor: 'inherit',
  },
  timeline: {
    overflow: 'hidden',
    maxHeight: ({ collapsed, maxHeight }) => (collapsed ? '290px' : maxHeight),
    transition: 'max-height 0.8s',
  },
  timelineEntryTitle: {
    composes: 'display-4 text-uppercase font-weight-normal text-info',
    letterSpacing: '.9px',
  },
  timelineEntryBody: {
    composes: 'small text-info',
    fontFamily: 'Lora,Georgia,serif',
  },
  '@media (max-width: 1200px)': {
    timeline: {
      maxHeight: ({ collapsed, maxHeight }) => (collapsed ? '330px' : maxHeight),
    },
  },
  '@media (max-width: 992px)': {
    timeline: {
      maxHeight: ({ collapsed, maxHeight }) => (collapsed ? '250px' : maxHeight),
    },
  },
  '@media (max-width: 768px)': {
    timeline: {
      maxHeight: ({ collapsed, maxHeight }) => (collapsed ? '280px' : maxHeight),
    },
  },
});

export const Timeline = ({ collapsible = true, data, title }) => {
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
      <h2 className="h4 text-center text-primary">{title}</h2>
      <TimelineReactKit className={`${classes.timeline} my-4`}>
        <div className="row" ref={timelineContainer}>
          {data.map((entry) => {
            const date = DateTime.fromISO(entry.date, { zone: 'Europe/Rome' });
            const past = dateTimeNow.startOf('year') > date.startOf('year');
            const now = dateTimeNow.startOf('year').toMillis() === date.startOf('year').toMillis();
            return (
              <div className="col-12" key={entry.title}>
                <TimelinePin
                  icon={past ? 'it-exchange-circle' : 'it-flag'}
                  label={date.setLocale('it').toFormat('yyyy')}
                  past={past}
                  now={now}
                  nowText="Oggi"
                >
                  <Card className={classes.resetBackground}>
                    <CardBody>
                      <h3 className={classes.timelineEntryTitle}>{entry.title}</h3>
                      <p className={classes.timelineEntryBody}>{entry.body}</p>
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
  data: PropTypes.arrayOf(
    PropTypes.exact({
      body: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
