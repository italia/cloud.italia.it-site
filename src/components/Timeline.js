import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Timeline as TimelineReactKit, TimelinePin, Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import { DateTime } from 'luxon';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  resetBackground: {
    backgroundColor: 'inherit',
  },
});

// TODO: risolvere problema datetime a tempo di build
// TODO: trovare un modo per collassare la timeline

export const Timeline = () => {
  const classes = useStyle();
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
    <TimelineReactKit className="mt-4">
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
  );
};
