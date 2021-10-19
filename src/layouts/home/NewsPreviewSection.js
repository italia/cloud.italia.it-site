import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Card, CardBody, Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { MobileSwiper } from '../../components/MobileSwiper.js';
import { Hero } from '../../components/hero/Hero.js';
import content from '../../../contents/home-page/home.yml';
import labels from '../../../contents/labels.yml';
import { ExternalLink } from '../../components/ExternalLink.js';

const {
  heroNews: { category, title },
} = content;

const { ariaLabel } = labels;

const useStyle = createUseStyles({
  category: {
    fontSize: '0.875rem',
  },
  '@media (min-width: 992px)': {
    category: {
      fontSize: '0.78rem',
    },
  },
  imgNewsDimension: {
    width: '100%',
  },
  customizeFontFamily: {
    fontFamily: '"Titillium Web",Geneva,Tahoma,sans-serif !important',
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
  `);

  const dinamicSlides = nodes.map((news) => (
    <Card key={news.frontmatter.title} noWrapper className="card rounded card-img no-after h-100">
      {news.frontmatter.image ? (
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <img src={news.frontmatter.image} alt={news.frontmatter.subtitle} className="img-wrapper" />
          </div>
        </div>
      ) : null}
      <CardBody className={`${!news.frontmatter.image ? 'h-100 ' : null}d-flex flex-column p-4`}>
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

  const slides = nodes.map((news) => (
    <Card key={news.frontmatter.title} noWrapper className="col-lg-4 mt-4 mr-4 rounded shadow">
      {news.frontmatter.image ? (
        <div className="card-wrapper">
          <div className="card card-img no-after">
            <div className="img-responsive-wrapper">
              <div className="img-responsive">
                <figure className="img-wrapper">
                  <img src={news.frontmatter.image} alt={news.frontmatter.subtitle} className="img-wrapper" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      ) : null}
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
        <p className={`pt-2 pb-4 text-dark ${classes.customizeFontFamily}`}>{news.frontmatter.subtitle}</p>
        <p className="card-text mt-auto font-weight-semibold d-flex align-items-center text-dark">
          <Icon
            className="ml-2"
            icon="it-external-link"
            size="sm"
            focusable={false}
            role="img"
            aria-label={ariaLabel.externalLink}
          />
          <span className={`${classes.customizeFontFamily}`}>
            Fonte: {`${news.frontmatter.fonte ? news.frontmatter.fonte : 'Cloud Italia'}`}
          </span>
        </p>
      </CardBody>
    </Card>
  ));

  return (
    <Hero>
      <div className="row align-items-center justify-content-center">
        <h2 className="col-12 text-center text-uppercase h6">{category}</h2>
        <h3 className="col-12 text-center h1">{title}</h3>
        <div className="mt-4 col-12 d-none d-lg-flex justify-content-center">{slides}</div>
      </div>
      <MobileSwiper slides={dinamicSlides} />
    </Hero>
  );
};
