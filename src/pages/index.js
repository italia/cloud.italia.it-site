import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Hero } from '../components/Hero.js';

const Index = ({ data }) => (
  <main>
    <Hero
      categoryTitle="Strategia Nazionale"
      subtitle="Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."
      title="Il cloud per innovare il Sistema Italia"
      fluidImg={data.img_1.childImageSharp.fluid}
      imageSide="right"
      theme="primary"
      actions={() => (
        <a className="btn text-uppercase btn-primary" href="#">
          Label button
        </a>
      )}
    />
    <Hero
      subtitle="Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."
      title="Scopri come aderire al modello cloud per la PA"
      fluidImg={data.img_2.childImageSharp.fluid}
      imageSide="left"
      actions={() => (
        <a className="btn text-uppercase btn-primary" href="#">
          Piano di attuazione
        </a>
      )}
    />
  </main>
);

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
