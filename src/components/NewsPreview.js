import React from 'react';
import { Card, CardBody, Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { MobileSwiper } from './MobileSwiper.js';

const data = [
  {
    type: 'Articolo',
    date: '27 novembre 2020',
    link:
      'https://innovazione.gov.it/notizie/articoli/sviluppiamo-il-sistema-operativo-a-partire-dalle-infrastrutture-digitali/',
    title: 'Sviluppiamo il Sistema Operativo a partire dalle Infrastrutture Digitali',
    body:
      'Avviato il tavolo di lavoro tra il Dipartimento e gli Enti centrali dello Stato proprietari di infrastrutture digitali.',
    source: 'Fonte: innovazione.gov.it',
  },
  {
    type: 'Approfondimento',
    date: '21 febbraio 2020',
    link:
      'https://medium.com/blog-per-la-trasformazione-digitale/inizia-la-rivoluzione-cloud-la-strategia-per-le-infrastrutture-digitali-della-pubblica-eddcd0a8e3f8',
    title: 'Inizia la rivoluzione cloud: la strategia per le infrastrutture digitali della Pubblica Amministrazione',
    body:
      'Dal censimento al Polo strategico nazionale, il piano per la razionalizzazione delle infrastrutture digitali della Pubblica Amministrazione.',
    source: 'Fonte: medium',
  },
  {
    type: 'Approfondimento',
    date: '12 luglio 2019',
    link:
      'https://medium.com/team-per-la-trasformazione-digitale/migrazione-in-cloud-servizi-pubblica-amministrazione-vantaggi-rischi-strategie-44ec2439bebf',
    title: 'Un kit per portare i servizi pubblici nel cloud',
    body:
      'Un viaggio in cinque tappe, per individuare i vantaggi, i rischi e le migliori strategie per migrare in cloud alcuni servizi pubblici della Pubblica Amministrazione',
    source: 'Fonte: medium',
  },
];

const useStyle = createUseStyles({
  category: {},
  '@media (min-width: 992px)': {
    category: {
      fontSize: '0.78rem',
    },
  },
});

export const NewsPreview = () => {
  const classes = useStyle();
  const slides = data.map((item, i) => (
    <Card key={i} teaser noWrapper className="no-after rounded shadow-lg">
      <CardBody className="h-100 d-flex flex-column">
        <div className="pb-3 d-flex align-items-center">
          <span className={`pr-2 text-uppercase font-weight-semibold ${classes.category}`}>{item.type}</span>
          <span className={`px-2 text-secondary ${classes.category}`}>
            <span>{item.date}</span>
          </span>
        </div>
        <h4 className="h6 text-primary font-weight-bold">
          <a href={item.link} className="text-decoration-none" rel="noreferrer" target="_blank">
            {item.title}
          </a>
        </h4>
        <p className="card-text pt-2 pb-4 text-dark">{item.body}</p>
        <p className="card-text mt-auto font-weight-semibold d-flex align-items-center text-dark">
          <span>{item.source}</span>
          <Icon className="ml-2" icon="it-external-link" size="sm" />
        </p>
      </CardBody>
    </Card>
  ));

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <h2 className="col-12 text-center text-uppercase h6">Le notizie</h2>
        <h3 className="col-12 text-center h1">Articoli e approfondimenti</h3>
        <div className="mt-4 col-12 d-none d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
          {slides}
        </div>
      </div>
      <div className="mt-4">
        <MobileSwiper slides={slides} />
      </div>
    </div>
  );
};
