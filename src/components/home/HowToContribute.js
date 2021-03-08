import React from 'react';
import { Card, CardBody, Icon } from 'design-react-kit';
import { MobileSwiper } from '../MobileSwiper.js';
import { Hero } from '../Hero.js';

const data = [
  {
    icon: 'it-designers-italia',
    title: 'Forum',
    link: 'https://forum.italia.it/',
    ariaLabel: 'Forum Italia: (Link esterno) Vai Forum Italia',
    body:
      'Entra in <strong>forum.italia.it</strong> e condividi le tue opinioni nella sezione <strong>Cloud e data center</strong>',
  },
  {
    icon: 'it-star-full',
    title: 'Slack',
    link: 'https://slack.developers.italia.it/',
    ariaLabel: 'Slack Developers Italia: (Link esterno) Vai Slack Developers Italia',
    body:
      'Unisciti alla community di <strong>Developers Italia su Slack</strong> e raggiungi il canale <strong>#cloud</strong>',
  },
  {
    icon: 'it-github',
    title: 'GitHub',
    link: 'https://github.com/italia',
    ariaLabel: 'GitHub: (Link esterno) Vai GitHub',
    body:
      'Proponi <em>issue</em>, modifiche e nuovi contenuti nei <strong>repository pubblici</strong> che contengono codice e documentazione per lo sviluppo del cloud della PA',
  },
];

export const HowToContribute = () => {
  const slides = data.map((item, i) => (
    <Card key={i} teaser noWrapper className="rounded shadow-lg col-lg-3 col-12 mr-4">
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
    <Hero bgColor="light">
      <div className="row">
        <div className="col-xl-4 col-lg-5 text-lg-left text-center">
          <h2 className="text-uppercase h6 font-weight-semibold">Come contribuire</h2>
          <h3>Partecipa al cambiamento, contribuisci a Cloud Italia!</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-5 col-lg-6 text-lg-left text-center">
          Condividi informazioni, promuovi incontri sul tema cloud della PA nel tuo territorio e all’interno della tua
          organizzazione
        </div>
      </div>
      <div className="row">
        <div className="mt-4 col-12 d-none d-lg-flex">{slides}</div>
      </div>
      <MobileSwiper slides={slides} />
    </Hero>
  );
};
