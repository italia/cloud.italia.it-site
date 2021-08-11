import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Card, CardBody, Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { Hero } from '../components/hero/Hero.js';
import { HeroTitle } from '../components/hero/HeroTitle.js';
import { HeroBody } from '../components/hero/HeroBody.js';
import content from '../../contents/news-page/news.yml';
import { SEO } from '../components/SEO.js';
import seo from '../../contents/seo.yml';
import { ExternalLink } from '../components/ExternalLink.js';

const { body, title } = content;
const { title: seoTitle, description: seoDescription } = seo.newsPage;

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
  iconOnRight: 'right: .5em',
  iconOntop: 'top: -.1em'
});

export const NewsPage = () => {
  const classes = useStyle();

  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { type: { eq: "news" } } }
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
          }
        }
      }
    }
  `);

  function orderByEvidence(item) {
    if (item.frontmatter.evidence) {
      return true;
    }
    return false;
  }
  function ordernoEvidence(item) {
    if (!item.frontmatter.evidence) {
      return true;
    }
    return false;
  }

  const CardCodeMap = (news) => (
    <div className="py-2 py-lg-3" key={news.frontmatter.title}>
      <Card key={news.frontmatter.title} teaser noWrapper className="rounded shadow-lg p-0 pb-4">
        <CardBody className="h-100 d-flex flex-column">
          {news.frontmatter.evidence ? (
            <Icon
              className={`position-absolute ${classes.iconOnRight} ${classes.iconOntop}`}
              icon="it-bookmark"
              color="primary"
              size="m"
              focusable={false}
              aria-label={`${news.frontmatter.title} (news in evidenza)}`}
            />
          ) : null }
          {news.frontmatter.image ? (
            <div className="mb-3 d-flex align-items-center">
              <img src={news.frontmatter.image} alt={news.frontmatter.subtitle} className={classes.imgNewsDimension} />
            </div>
          ) : null}
          <div className="px-3 pb-3 d-flex align-items-center">
            <span className={`pr-2 text-uppercase font-weight-semibold ${classes.category}`}>
              {news.frontmatter.typeOfNews}
            </span>
            <span className={`px-2 text-secondary ${classes.category}`}>
              <span>{news.frontmatter.date}</span>
            </span>
          </div>
          <h4 className="px-3 h6 text-primary font-weight-bold">
            {news.frontmatter.internalNews ? (
              <Link to={`/${news.fields.slug}`} className="text-decoration-none">{news.frontmatter.title}</Link>
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
          <p className="px-3 card-text pt-2 pb-4 text-dark">{news.frontmatter.subtitle}</p>
          <p className="px-3 card-text mt-auto font-weight-semibold d-flex align-items-center text-dark">
            <Icon
              className="ml-2"
              icon={`${news.frontmatter.fonte ? 'it-external-link' : 'it-link'}`}
              size="sm"
              focusable={false}
              role="img"
              aria-label={`${news.frontmatter.title} ${news.frontmatter.fonte ? '(link esterno)' : null}`}
            />
            <span className="ml-1">{`${news.frontmatter.fonte ? news.frontmatter.fonte : 'Cloud Italia'}`}</span>
          </p>
        </CardBody>
      </Card>
    </div>
  );

  const arrByEvidence = nodes.filter(orderByEvidence);
  const arrNoEvidence = nodes.filter(ordernoEvidence);

  const newListEvidence = arrByEvidence.map((news) => CardCodeMap(news));
  const newRestOfList = arrNoEvidence.map((news) => CardCodeMap(news));

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      {/* <Hero>
        <div className="row align-items-center">
          <div className="offset-lg-1 col-lg-6 mt-4 mt-lg-0">
            <div className="text-center text-lg-left">
              <HeroTitle title={title} className="text-info" Tag="h1" />
              <HeroBody html={body} />
            </div>
          </div>
        </div>
      </Hero> */}
      <Hero>
        <div className="row">
          <div className="offset-lg-1 col-lg-6 col-md-8 mb-0 mb-lg-4">
            <div className="text-center text-sm-left pb-4">
              <h1 className="h1">Le notizie</h1>
              <p className="lead">Le ultime notizie interne ed esterne di Cloud Italia</p>
            </div>
            <div className="row mb-5 mb-md-0 mb-lg-5">
              <div className="col-md-6"></div>
            </div>
          </div>
          <div className="offset-lg-1 col-md-4">
            <span className="mid-caption text-uppercase font-weight-semibold mb-2 d-block mid-caption--large">
              Argomenti
            </span>
            <p>TODO: lista Tag notizie</p>
          </div>
        </div>
      </Hero>
      <div className="container px-4 border-top">
        <div className="row d-lg-flex">
          <div className="col-lg-7 pt-5">
            {/* <div className="pb-4 pb-lg-0">
              <h2 className="h4 font-weight-semibold">Gli articoli</h2>
            </div> */}
            <div className="d-flex flex-column justify-content-start">
              {newListEvidence}
              {newRestOfList}
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 pl-lg-4 mb-3 my-lg-0 mid-border-lg-left pt-lg-5">
            <div className="pb-4 pb-lg-0">
              <h2 className="h4 font-weight-semibold">To do...</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
