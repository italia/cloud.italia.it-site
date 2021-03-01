import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { HeroGraphic } from '../components/HeroGraphic.js';
import { HeroImage } from '../components/HeroImage.js';

const useStyles = createUseStyles({
  text: {
    composes: 'col-xs-12 col-sm-10 col-md-8 col-lg-6 m-auto',
    '@global': {
      h3: {
        color: '#455A64',
        fontWeight: 600,
      },
      'ul li': {
        color: 'var(--primary)',
        '& span': {
          color: 'initial',
        },
      },
    },
  },
});

const Adozione = () => {
  const classes = useStyles();
  const {
    allMarkdownRemark: {
      nodes: [md],
    },
    graphic,
    image,
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { type: { eq: "data" }, name: { eq: "cloud-enablement" } } }) {
        nodes {
          html
        }
      }
      graphic: file(relativePath: { eq: "unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image: file(relativePath: { eq: "unsplash_4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <HeroGraphic
        subtitle="Strumenti, risorse e metodologie per innovare i servizi digitali pubblici utilizzando le tecnologie e le infrastrutture cloud."
        title="Programma di abilitazione al cloud"
        fluidImg={graphic.childImageSharp.fluid}
        imageSide="right"
        theme="white"
      />
      <div className="container pb-4">
        <HeroImage alt={'Una bella immagine'} fluidImg={image.childImageSharp.fluid} big={false} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className={classes.text} dangerouslySetInnerHTML={{ __html: md.html }}></div>
        </div>
      </div>
    </>
  );
};

export default Adozione;
