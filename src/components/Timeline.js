import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Timeline as TimelineReactKit, TimelinePin, Card, CardBody, CardTitle, CardText, Icon } from 'design-react-kit';
import { DateTime } from 'luxon';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  icon: {
    transform: (collapsed) => (collapsed ? 'rotate(0deg)' : 'rotate(180deg)'),
    transition: 'transform 1.5s',
  },
  expand: {
    composes: 'd-flex flex-column align-items-center pt-4',
    // The timeline is not centered
    paddingRight: '3px',
  },
  resetBackground: {
    backgroundColor: 'inherit',
  },
  timeline: {
    composes: 'my-4',
    overflow: 'hidden',
    maxHeight: (collapsed) => (collapsed ? '400px' : '5000px'),
    transition: (collapsed) => (collapsed ? 'max-height 2s' : 'max-height 4s'),
  },
});

// TODO: risolvere problema datetime a tempo di build

export const Timeline = ({ collapsible = true }) => {
  const [collapsed, setCollapsed] = useState(collapsible);
  const classes = useStyle(collapsed);
  const toggleCollapse = () => setCollapsed(!collapsed);
  const {
    allTimelineJson: { nodes: timelineData },
  } = useStaticQuery(graphql`
    query {
      allTimelineJson {
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
      <TimelineReactKit className={classes.timeline}>
        <div className="row">
          {timelineData.map((entry) => {
            // eslint-disable-next-line sonarjs/no-duplicate-string
            const date = DateTime.fromISO(entry.date, { zone: 'Europe/Rome' });
            const past = DateTime.now().setZone('Europe/Rome').startOf('month') > date.startOf('month');
            const now =
              DateTime.now().setZone('Europe/Rome').startOf('month').toMillis() === date.startOf('month').toMillis();
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
                      <CardText>{entry.body}</CardText>
                    </CardBody>
                  </Card>
                </TimelinePin>
              </div>
            );
          })}
        </div>
      </TimelineReactKit>
      <div role="button" className={classes.expand} onClick={toggleCollapse}>
        <div className="primary-color h6">{collapsed ? 'Scopri di più' : 'Chiudi'}</div>
        <Icon color="primary" className={classes.icon} icon="it-arrow-down-circle" />
      </div>
    </>
  );
};

Timeline.propTypes = {
  collapsible: PropTypes.bool,
};
