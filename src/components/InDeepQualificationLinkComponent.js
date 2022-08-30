import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const LinksList = (nodes) => {
  const list = nodes.list || [];
  return (
    <div className="row mb-5 mt-5">
      <div className="col-12 m-0 ml-1 p-0">
        <div className="mid-caption text-uppercase font-weight-semibold mb-4 d-block mid-caption--large">
          Approfondisci
        </div>
      </div>
      <div className=" m-auto ml-sm-1 pr-sm-5">
        {list.map((node, idx) => (
          <Link key={idx} className="text-decoration-none font-weight-semibold d-block mb-3" to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

const qQualificazione = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "indeepQualificazione" } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          subtitle
          date(formatString: "DD/MM/YYYY")
          evidence
          internalNews
          fonte
          showInHome
          typeOfNews
          link
          image
          tags
        }
      }
    }
  }
`;

export const InDeepQualificationLinkComponent = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(qQualificazione);
  return <LinksList list={nodes} />;
};
