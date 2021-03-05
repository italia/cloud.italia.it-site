import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Card, CardBody, CardText, Icon } from 'design-react-kit';

import { MobileSwiper } from '../components/MobileSwiper.js';
import { imageSharpProptype } from '../utils/proptypes.js';
import { Accordion } from '../components/Accordion.js';

const useStyles = createUseStyles({
  shadowWhite: {
    boxShadow: 'inset 0 0 0 2px white',
  },
  linkColorPrimary: {
    backgroundColor: 'var(--white)',
    color: 'var(--primary)',
  },
  verticalDelimiter: {
    composes: 'd-none d-xl-block mr-4',
    borderLeft: '1px solid #E6E9F2',
  },
  category: {
    composes: 'text-uppercase h6',
    fontWeight: '600',
    letterSpacing: '.9px',
  },
  sneakPeek: {
    fontSize: '1.2rem',
  },
  graphicContainer: {},
  '@media (max-width: 992px)': {
    graphicContainer: {
      order: -1,
    },
    graphicContainerSmall: {
      order: -1,
    },
  },
});

const slides = [
  <>
    <Card teaser noWrapper className="no-after rounded shadow-lg">
      <CardBody className="pb-5">
        <div className="mb-3 d-flex align-items-center">
          <Icon color="primary" icon="it-github" size="lg" />
          <span className="primary-color px-3 h3 mb-0">GitHub</span>
        </div>
        <CardText>
          In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API, software,
          sicurezza ed altro. Unisciti alla discussione!
        </CardText>
      </CardBody>
    </Card>
  </>,
  <>
    <Card teaser noWrapper className="no-after rounded shadow-lg">
      <CardBody className="pb-5">
        <div className="mb-3 d-flex align-items-center">
          <Icon color="primary" icon="it-star-full" size="lg" />
          <span className="primary-color px-3 h3 mb-0">slack</span>
        </div>
        <CardText>
          In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API, software,
          sicurezza ed altro. Unisciti alla discussione!
        </CardText>
      </CardBody>
    </Card>
  </>,
  <>
    <Card teaser noWrapper className="no-after rounded shadow-lg">
      <CardBody className="pb-5">
        <div className="mb-3 d-flex align-items-center">
          <Icon color="primary" icon="it-designers-italia" size="lg" />
          <span className="primary-color px-3 h3 mb-0">Forum</span>
        </div>
        <CardText>
          In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API, software,
          sicurezza ed altro. Unisciti alla discussione!
        </CardText>
      </CardBody>
    </Card>
  </>,
];

const Index = ({ data }) => {
  const classes = useStyles();
  const ctaBaseClasses = 'btn text-uppercase mx-4 ml-lg-0 my-2';
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="offset-lg-1 col-lg-5 mt-4 mt-lg-0">
              <div className="text-center text-lg-left">
                <h2 className={classes.category}>La strategia nazione cloud della PA</h2>
                <h3 className="h1">
                  <Link to="/strategia/" className="text-decoration-none">
                    Il modello per realizzare il sistema operativo del Paese
                  </Link>
                </h3>
                <div className={classes.sneakPeek}>
                  Definiamo la strategia per l’evoluzione tecnologica delle infrastrutture digitali della Pubblica
                  Amministrazione e abilitiamo l’adozione del modello cloud computing per servizi pubblici più sicuri ed
                  efficienti.
                </div>
              </div>
              <div className="my-4 mt-lg-5 text-center d-flex flex-wrap justify-content-center justify-content-lg-start">
                <Link to="/strategia/" className={`${ctaBaseClasses} btn-primary`}>
                  Scopri di più
                </Link>
                <Link to="/strategia/" className={`${ctaBaseClasses} btn-outline-primary`}>
                  Programma di abilitazione
                </Link>
              </div>
            </div>
            <div className={`${classes.graphicContainer} col-lg-6 d-flex align-items-center justify-content-center`}>
              <GatsbyImage alt="strategia cloud" image={getImage(data.strategia_cloud)} />
            </div>
          </div>
          <div className="row mt-lg-2 mt-0">
            <div className="offset-lg-1 col-lg-11 text-center text-lg-left">
              <a href="https://www.agid.gov.it/" className="btn-icon text-dark">
                <span>Open Data Cloud Marketplace</span>
                <Icon className="ml-2" icon="it-external-link" size="sm" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 lightgrey-bg-a2">
        <div className="container">
          <div className="row align-items-center">
            <div className={`${classes.graphicContainer} col-lg-5 d-flex align-items-center justify-content-center`}>
              <GatsbyImage alt="abilitazione cloud" image={getImage(data.vantaggi_cloud)} />
            </div>
            <div className="col-lg-7 mt-4 mt-lg-0">
              <div className="col-xl-9 text-center text-lg-left">
                <h2 className={classes.category}>I vantaggi</h2>
                <h3 className="h3">Un modello che porta beneficio all’intero sistema Paese</h3>
                <div className="mt-3 mb-5">
                  La trasformazione dei servizi pubblici attraverso l&apos;adozione del cloud è essenziale per garantire
                  al Paese la possibilità di crescere, competere, generare nuove opportunità di lavoro qualificato,
                  creare e distribuire nuova ricchezza in maniera uniforme su tutto il territorio nazionale
                </div>
              </div>
              <Accordion />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="offset-lg-1 col-lg-5 mt-4 mt-lg-0">
              <div className="text-center text-lg-left">
                <h2 className={classes.category}>Il Programma di Abilitazione</h2>
                <h3 className="h1">
                  <Link to="/strategia/" className="text-decoration-none">
                    Come aderire al modello Cloud della PA
                  </Link>
                </h3>
                <div className={classes.sneakPeek}>
                  Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet
                  justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
                </div>
              </div>
              <div className="my-4 mt-lg-5 text-center d-flex flex-wrap justify-content-center justify-content-lg-start">
                <Link to="/strategia/" className={`${ctaBaseClasses} btn-primary`}>
                  Scopri di più
                </Link>
              </div>
            </div>
            <div className={`${classes.graphicContainer} col-lg-6 d-flex align-items-center justify-content-center`}>
              <GatsbyImage alt="abilitazione cloud" image={getImage(data.abilitazione_cloud)} />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-4 mt-lg-0">
              <div className="col-xl-9 col-lg-11 text-center text-lg-left text-white">
                <h2 className={classes.category}>La qualificazione dei servizi e il catalogo</h2>
                <h3 className="h1">
                  <Link to="/strategia/" className="text-decoration-none text-white">
                    Il percorso di qualificazione e il catalogo dei servizi cloud
                  </Link>
                </h3>
                <div className={classes.sneakPeek}>
                  Le Pubbliche Amministrazioni possono acquisire servizi cloud solo se qualificati dall’Agenzia per
                  l’Italia Digitale (AgID). I fornitori cloud devono sottoporre i servizi al processo di qualificazione
                  e, se in possesso dei requisiti, sono pubblicati e consultabili all’interno del marketplace
                </div>
              </div>
              <div className="my-4 mt-lg-5 text-center d-flex flex-wrap justify-content-center justify-content-lg-start">
                <Link to="/strategia/" className={`${classes.linkColorPrimary} ${ctaBaseClasses} btn-primary`}>
                  Scopri di più
                </Link>
                <Link to="/strategia/" className={`${classes.shadowWhite} ${ctaBaseClasses} btn-primary`}>
                  Catalogo dei servizi
                </Link>
                <div aria-hidden="true" className={classes.verticalDelimiter} />
                <a
                  href="https://www.agid.gov.it/"
                  className={`${classes.linkColorPrimary} ${ctaBaseClasses} btn-primary btn-icon`}
                >
                  <span className="mr-3">Marketplace agid</span>
                  <Icon color="primary" icon="it-external-link" size="sm" />
                </a>
              </div>
            </div>
            <div className={`${classes.graphicContainer} col-lg-4 d-flex align-items-center justify-content-center`}>
              <GatsbyImage alt="servizi cloud" image={getImage(data.servizi_cloud)} />
            </div>
          </div>
        </div>
      </div>

      <div className="section px-4 px-lg-5">
        <h2 className="h6 primary-color text-uppercase text-center text-lg-left">Notizie e Media</h2>
        <h3 className="h1 primary-color text-center text-lg-left px-0 py-3 col-lg-5">
          Approfondimenti e contenuti utili
        </h3>
        <div className="row d-none d-lg-flex">
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
            {slides.map((slide, k) => React.cloneElement(slide, { key: k }))}
          </div>
        </div>
        <MobileSwiper slides={slides} />
      </div>

      <div className="pb-5 lightgrey-bg-a2">
        <div className="container px-4">
          <h2 className="h6 text-uppercase text-center text-lg-left pt-5">Come contribuire</h2>
          <h3 className="text-center text-lg-left px-0 py-3 col-lg-5">
            Partecipa al cambiamento, contribuisci a Cloud italia!
          </h3>
          <div className="row d-none d-lg-flex">
            <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
              {slides.map((slide, k) => React.cloneElement(slide, { key: k }))}
            </div>
          </div>
          <MobileSwiper slides={slides} />
        </div>
      </div>
    </>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    strategia_cloud: imageSharpProptype.isRequired,
    abilitazione_cloud: imageSharpProptype.isRequired,
    servizi_cloud: imageSharpProptype.isRequired,
    vantaggi_cloud: imageSharpProptype.isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    strategia_cloud: file(relativePath: { eq: "strategia_cloud_2x.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    abilitazione_cloud: file(relativePath: { eq: "abilitazione_cloud_2x.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    servizi_cloud: file(relativePath: { eq: "servizi_cloud_1x.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    vantaggi_cloud: file(relativePath: { eq: "vantaggi_cloud_1x.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;
