import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Hero } from '../components/Hero.js';

const useStyles = createUseStyles({
  btnPrimary: {
    composes: 'btn text-uppercase btn-primary ml-3',
    backgroundColor: 'var(--white)',
    color: 'var(--primary)',
  },
  btnOutline: {
    composes: 'btn text-uppercase btn-primary mr-3',
    boxShadow: 'inset 0 0 0 2px white',
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
        subtitle="Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."
        title="Scopri come aderire al modello cloud per la PA"
        fluidImg={data.img_2.childImageSharp.fluid}
        imageSide="left"
        actions={() => (
          <>
            <Link to="/adozione/" className="btn text-uppercase btn-outline-primary mr-3">
              Risorse Utili
            </Link>
            <Link to="/adozione/" className="btn text-uppercase btn-primary mx-3">
              Scopri di più
            </Link>
          </>
        )}
      />
    </main>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    img_1: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
      }),
    }),
    img_2: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query {
    img_1: file(relativePath: { eq: "unsplash.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img_2: file(relativePath: { eq: "unsplash_2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
