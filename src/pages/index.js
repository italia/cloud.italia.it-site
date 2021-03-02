import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Card, CardBody, CardText, Icon } from 'design-react-kit';

import { HeroGraphic } from '../components/HeroGraphic.js';
import { HeroImage } from '../components/HeroImage.js';
import { MobileSwiper } from '../components/MobileSwiper.js';
import { imageSharpProptype } from '../utils/proptypes.js';

const buttonClasses = 'btn text-uppercase btn-primary mx-4 ml-lg-0 my-2 my-md-0';
const useStyles = createUseStyles({
  btnPrimary: {
    composes: buttonClasses,
    backgroundColor: 'var(--white)',
    color: 'var(--primary)',
  },
  btnOutline: {
    composes: buttonClasses,
    boxShadow: 'inset 0 0 0 2px white',
  },
  btnAGID: {
    composes: `${buttonClasses} btn-icon px-3`,
    extend: 'btnPrimary',
  },
  separator: {
    composes: 'd-none d-lg-block mr-4',
    borderLeft: '1px solid #E6E9F2',
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
  return (
    <>
      <HeroGraphic
        categoryTitle="Strategia Nazionale"
        subtitle="Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."
        title="Il cloud per innovare il Sistema Italia"
        fluidImg={data.img_1.childImageSharp.fluid}
        imageSide="right"
        theme="primary"
        actions={() => (
          <>
            <Link to="/strategia/" className={classes.btnOutline}>
              Risorse Utili
            </Link>
            <Link to="/strategia/" className={classes.btnPrimary}>
              Scopri di più
            </Link>
          </>
        )}
      />
      <HeroGraphic
        categoryTitle="Programma di adozione"
        subtitle="Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."
        title="Scopri come aderire al modello cloud per la PA"
        fluidImg={data.img_2.childImageSharp.fluid}
        imageSide="left"
        actions={() => (
          <>
            <Link to="/adozione/" className="btn text-uppercase btn-outline-primary mx-4 ml-lg-0 my-2 my-md-0">
              Risorse Utili
            </Link>
            <Link to="/adozione/" className="btn text-uppercase btn-primary mx-4 ml-lg-0 my-2 my-md-0">
              Scopri di più
            </Link>
          </>
        )}
      />
      <HeroImage fluidImg={data.img_4.childImageSharp.fluid} alt="Una bella immagine" caption="Una bella didascalia" />
      <HeroImage
        big={false}
        fluidImg={data.img_3.childImageSharp.fluid}
        alt="Una bella immagine"
        caption="Una bella didascalia"
      />
      <HeroGraphic
        categoryTitle="Qualificazione dei servizi"
        subtitle="Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."
        title="Scopri come qualificare i servizi"
        fluidImg={data.img_1.childImageSharp.fluid}
        imageSide="right"
        theme="primary"
        actions={() => (
          <>
            <Link to="/servizi/" className={classes.btnOutline}>
              Risorse Utili
            </Link>
            <Link to="/servizi/" className={classes.btnPrimary}>
              Scopri di più
            </Link>
            <div aria-hidden="true" className={classes.separator} />
            <a href="https://www.agid.gov.it/" className={classes.btnAGID}>
              <span className="mr-2">Marketplace agid</span>
              <Icon color="primary" icon="it-external-link" />
            </a>
          </>
        )}
      />

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
    img_1: imageSharpProptype.isRequired,
    img_2: imageSharpProptype.isRequired,
    img_3: imageSharpProptype.isRequired,
    img_4: imageSharpProptype.isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    img_1: file(relativePath: { eq: "unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_2: file(relativePath: { eq: "unsplash_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_3: file(relativePath: { eq: "unsplash_3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_4: file(relativePath: { eq: "unsplash_4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
