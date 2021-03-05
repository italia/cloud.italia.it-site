import React from 'react';
import { Card, CardBody, Icon } from 'design-react-kit';
import { MobileSwiper } from './MobileSwiper.js';

const data = [
  {
    icon: 'it-designers-italia',
    title: 'Forum',
    link: 'https://forum.italia.it/',
    ariaLabel: 'Forum Italia: (Link esterno) Vai Forum Italia',
    body:
      'In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API, software sicurezza ed altro. Unisciti alla discussione!',
  },
  {
    icon: 'it-star-full',
    title: 'Slack',
    link: 'https://slack.developers.italia.it/',
    ariaLabel: 'Slack Developers Italia: (Link esterno) Vai Slack Developers Italia',
    body:
      'In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API, software sicurezza ed altro. Unisciti alla discussione!',
  },
  {
    icon: 'it-github',
    title: 'GitHub',
    link: 'https://github.com/italia',
    ariaLabel: 'GitHub: (Link esterno) Vai GitHub',
    body:
      'In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API, software sicurezza ed altro. Unisciti alla discussione!',
  },
  {
    icon: 'it-github',
    title: 'GitHub',
    link: 'https://github.com/italia',
    ariaLabel: 'GitHub: (Link esterno) Vai GitHub',
    body:
      'In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API, software sicurezza ed altro. Unisciti alla discussione!',
  },
];

export const HowToContribute = () => {
  const slides = data.map((item, i) => (
    <Card key={i} teaser noWrapper className="no-after rounded shadow-lg">
      <a href={item.link} aria-label={item.ariaLabel} className="text-decoration-none">
        <CardBody className="pb-5">
          <div className="mb-3 d-flex align-items-center">
            <Icon color="primary" icon={item.icon} size="lg" />
            <span className="primary-color px-3 h3 mb-0">{item.title}</span>
          </div>
          <p className="card-text" dangerouslySetInnerHTML={{ __html: item.body }}></p>
        </CardBody>
      </a>
    </Card>
  ));
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5 text-lg-left text-center">
          <h2 className="text-uppercase h6 font-weight-semibold">Come contribuire</h2>
          <h3>Partecipa al cambiamento, contribuisci a Cloud Italia!</h3>
        </div>
      </div>
      <div className="row">
        <div className="mt-4 col-12 d-none d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-4">
          {slides}
        </div>
      </div>
      <MobileSwiper slides={slides} />
    </div>
  );
};
