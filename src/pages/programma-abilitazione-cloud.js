import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';
import { HeroGraphic } from '../components/hero/HeroGraphic.js';
import { HeroImage } from '../components/hero/HeroImage.js';

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

const CloudEnablementPage = () => {
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
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      image: file(relativePath: { eq: "unsplash_4.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  return (
    <>
      <h1 className="sr-only">Programma di abilitazione</h1>
      <HeroGraphic
        subtitle="Strumenti, risorse e metodologie per innovare i servizi digitali pubblici utilizzando le tecnologie e le infrastrutture cloud."
        title="Programma di abilitazione al cloud"
        gatsbyImage={getImage(graphic)}
        imageSide="right"
        theme="white"
      />
      <div className="container pb-4">
        <HeroImage alt={'Una bella immagine'} gatsbyImage={getImage(image)} big={false} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className={classes.text} dangerouslySetInnerHTML={{ __html: md.html }}></div>
        </div>
      </div>
    </>
  );
};

export default CloudEnablementPage;
