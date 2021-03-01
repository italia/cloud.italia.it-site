import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Adozione = () => {
  const {
    allMarkdownRemark: {
      nodes: [data],
    },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { type: { eq: "data" } }, frontmatter: { title: { eq: "md interno" } } }) {
        nodes {
          html
        }
      }
    }
  `);
  return (
    <main className="container">
      <h2>Testo scritto in md</h2>

      <div className="row align-items-center">
        <div
          className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 offset-0"
          dangerouslySetInnerHTML={{ __html: data.html }}
        ></div>
      </div>
    </main>
  );
};

export default Adozione;
