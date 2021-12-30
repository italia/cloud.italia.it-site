import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Card, CardBody, Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { MobileSwiper } from '../../components/MobileSwiper.js';
import { Hero } from '../../components/hero/Hero.js';
import content from '../../../contents/home-page/home.yml';
import { ExternalLink } from '../../components/ExternalLink.js';

const {
  heroNews: { category },
} = content;

const useStyle = createUseStyles({
  category: {
    fontSize: '0.875rem',
  },
  '@media (min-width: 992px)': {
    category: {
      fontSize: '0.78rem',
    },
  },
});

export const NewsPreviewSection = () => {
  const classes = useStyle();

  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { type: { eq: "news" }, showInHome: { eq: true } } }
        limit: 3
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
            link
            fonte
            showInHome
            typeOfNews
            link
          }
        }
      }
    }
  `);

  const dinamicSlides = nodes.map((news) => (
    <Card key={news.frontmatter.title} teaser noWrapper className="rounded shadow-lg">
      <CardBody className="h-100 d-flex flex-column">
        <div className="pb-3 d-flex align-items-center">
          <span className={`pr-2 text-uppercase font-weight-semibold ${classes.category}`}>
            {news.frontmatter.typeOfNews}
          </span>
          <span className={`px-2 text-secondary ${classes.category}`}>
            <span>{news.frontmatter.date}</span>
          </span>
        </div>
        <h4 className="h6 text-primary font-weight-bold">
          {news.frontmatter.internalNews ? (
            <Link to={`/${news.fields.slug}`} className="text-decoration-none">
              {news.frontmatter.title}
            </Link>
          ) : (
            <ExternalLink
              linkTo={news.frontmatter.link}
              className="text-decoration-none"
              ariaLabel={`${news.frontmatter.title} (link esterno)`}
            >
              {news.frontmatter.title}
            </ExternalLink>
          )}
        </h4>
        <p className="card-text pt-2 pb-4 text-dark">{news.frontmatter.subtitle}</p>
        <p className="card-text mt-auto font-weight-semibold d-flex align-items-center text-dark">
          <Icon
            className="ml-0"
            icon={`${news.frontmatter.fonte ? 'it-external-link' : 'it-link'}`}
            size="sm"
            focusable={false}
            role="img"
            aria-label={`${news.frontmatter.title} ${news.frontmatter.fonte ? '(link esterno)' : null}`}
          />
          <span>{`${news.frontmatter.fonte ? news.frontmatter.fonte : 'Cloud Italia'}`}</span>
        </p>
      </CardBody>
    </Card>
  ));

  return (
    <Hero>
      <div className="row align-items-center justify-content-center">
        <Link to="/notizie/" className="text-decoration-none">
          <h2 className="col-12 text-center text-uppercase h6">{category}</h2>
        </Link>
        {/* <h3 className="col-12 text-center h1">{title}</h3> */}
        <div className="mt-4 col-12 d-none d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
          {/* {slides} */}
          {dinamicSlides}
        </div>
      </div>
      {/* <MobileSwiper slides={slides} /> */}
      <MobileSwiper slides={dinamicSlides} />
    </Hero>
  );
};
