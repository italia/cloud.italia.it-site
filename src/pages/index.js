import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Card, CardBody, CardText, Icon } from 'design-react-kit';

import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import { Hero } from '../components/Hero.js';
import { HeroImage } from '../components/HeroImage.js';
import { imageSharpProptype } from '../utils/proptypes.js';

SwiperCore.use([Pagination, A11y]);

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

const Index = ({ data }) => {
  const classes = useStyles();
  return (
    <main>
      <Hero
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
      <Hero
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
      <Hero
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
      <div className="pb-5 lightgrey-bg-a2">
        <div className="container">
          <h2 className="h6 text-uppercase text-center text-lg-left pt-5">Come contribuire</h2>
          <h3 className="text-center text-lg-left py-3 col-lg-5">
            Partecipa al cambiamento, contribuisci a Cloud italia!
          </h3>
          <div className="row">
            <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3 d-none d-lg-flex">
              <Card teaser noWrapper className="no-after rounded shadow-lg">
                <CardBody className="pb-5">
                  <div className="mb-3 d-flex align-items-center">
                    <Icon color="primary" icon="it-github" size="lg" />
                    <span className="primary-color px-3 h3 mb-0">GitHub</span>
                  </div>
                  <CardText>
                    In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API,
                    software, sicurezza ed altro. Unisciti alla discussione!
                  </CardText>
                </CardBody>
              </Card>
              <Card teaser noWrapper className="no-after rounded shadow-lg">
                <CardBody className="pb-5">
                  <div className="mb-3 d-flex align-items-center">
                    <Icon color="primary" icon="it-star-full" size="lg" />
                    <span className="primary-color px-3 h3 mb-0">slack</span>
                  </div>
                  <CardText>
                    In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API,
                    software, sicurezza ed altro. Unisciti alla discussione!
                  </CardText>
                </CardBody>
              </Card>
              <Card teaser noWrapper className="no-after rounded shadow-lg">
                <CardBody className="pb-5">
                  <div className="mb-3 d-flex align-items-center">
                    <Icon color="primary" icon="it-designers-italia" size="lg" />
                    <span className="primary-color px-3 h3 mb-0">Forum</span>
                  </div>
                  <CardText>
                    In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API,
                    software, sicurezza ed altro. Unisciti alla discussione!
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 d-lg-none">
              <Swiper
                a11y={{
                  enabled: true,
                  prevSlideMessage: 'Slide precedente',
                  nextSlideMessage: 'Slide successiva',
                  firstSlideMessage: 'Questa è la prima slide',
                  lastSlideMessage: "Questa è l'ultima slide",
                  paginationBulletMessage: 'Vai alla slide {{index}}',
                }}
                className="shadow-lg"
                slidesPerView={1}
                pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet p-2 mx-3' }}
              >
                <SwiperSlide>
                  <Card teaser noWrapper className="rounded">
                    <CardBody className="pb-5">
                      <div className="mb-3 d-flex align-items-center">
                        <Icon color="primary" icon="it-github" size="lg" />
                        <span className="primary-color px-3 h3 mb-0">GitHub</span>
                      </div>
                      <CardText>
                        In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API,
                        software, sicurezza ed altro. Unisciti alla discussione!
                      </CardText>
                    </CardBody>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card teaser noWrapper className="rounded">
                    <CardBody className="pb-5">
                      <div className="mb-3 d-flex align-items-center">
                        <Icon color="primary" icon="it-star-full" size="lg" />
                        <span className="primary-color px-3 h3 mb-0">slack</span>
                      </div>
                      <CardText>
                        In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API,
                        software, sicurezza ed altro. Unisciti alla discussione!
                      </CardText>
                    </CardBody>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card teaser noWrapper className="rounded">
                    <CardBody className="pb-5">
                      <div className="mb-3 d-flex align-items-center">
                        <Icon color="primary" icon="it-designers-italia" size="lg" />
                        <span className="primary-color px-3 h3 mb-0">Forum</span>
                      </div>
                      <CardText>
                        In <strong>forum.italia.it</strong> si discute dei servizi pubblici digitali: piattaforme, API,
                        software, sicurezza ed altro. Unisciti alla discussione!
                      </CardText>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </main>
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
