import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Card, CardBody, Icon } from "design-react-kit";
import { createUseStyles } from "react-jss";
import { Hero } from "../components/hero/Hero.js";
import { HeroTitle } from "../components/hero/HeroTitle.js";
import { HeroBody } from "../components/hero/HeroBody.js";
import content from "../../contents/news-page/news.yml";
import { SEO } from "../components/SEO.js";
import seo from "../../contents/seo.yml";
import startTag from "../../contents/startTag.yml";
import { ExternalLink } from "../components/ExternalLink.js";

const { body, title } = content;
const { title: seoTitle, description: seoDescription } = seo.newsPage;

const useStyle = createUseStyles({
  category: {
    fontSize: "0.875rem",
  },
  "@media (min-width: 992px)": {
    category: {
      fontSize: "0.78rem",
    },
  },
  imgNewsDimension: {
    width: "100%",
  },
  iconOnRight: "right: .5em",
  iconOntop: "top: .5em",
  iconWidth: "width: 30px",
  borderRadius: "border-radius: 20px",
  fontSize1_3: "font-size: 1.3rem",
});

/* eslint max-lines-per-function: ["error", 240] */
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
            tags
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
      <Card
        key={news.frontmatter.title}
        teaser
        noWrapper
        className="rounded shadow-lg p-0 pb-4"
      >
        <CardBody className="h-100 d-flex flex-column">
          {news.frontmatter.evidence ? (
            <img
              src="/assets/evidence.png"
              alt={`${news.frontmatter.title} (news in evidenza)}`}
              className={`position-absolute ${classes.iconWidth}
              ${classes.iconOnRight}
              ${classes.iconOntop}`}
            />
          ) : null}
          {news.frontmatter.image ? (
            <div className="mb-3 d-flex align-items-center">
              <img
                src={news.frontmatter.image}
                alt={news.frontmatter.subtitle}
                className={classes.imgNewsDimension}
              />
            </div>
          ) : null}
          <div className="px-3 pb-3 d-flex align-items-center">
            <span
              className={`pr-2 text-uppercase font-weight-semibold ${classes.category}`}
            >
              {news.frontmatter.typeOfNews}
            </span>
            <span className={`px-2 text-secondary ${classes.category}`}>
              <span>{news.frontmatter.date}</span>
            </span>
          </div>
          <h4 className="px-3 h6 text-primary font-weight-bold">
            {news.frontmatter.internalNews ? (
              <Link
                to={`/${news.fields.slug}`}
                className="text-decoration-none"
              >
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
          <p className="px-3 card-text pt-2 pb-4 text-dark">
            {news.frontmatter.subtitle}
          </p>
          <p className="px-3 card-text mt-auto font-weight-semibold d-flex align-items-center text-dark">
            <Icon
              className="ml-2"
              icon={`${
                news.frontmatter.fonte ? "it-external-link" : "it-link"
              }`}
              size="sm"
              focusable={false}
              role="img"
              aria-label={`${news.frontmatter.title} ${
                news.frontmatter.fonte ? "(link esterno)" : null
              }`}
            />
            <span className="ml-1">{`${
              news.frontmatter.fonte ? news.frontmatter.fonte : "Cloud Italia"
            }`}</span>
          </p>
        </CardBody>
      </Card>
    </div>
  );

  const arrByEvidence = nodes.filter(orderByEvidence);
  const arrNoEvidence = nodes.filter(ordernoEvidence);

  const tagsArray = [];
  const newsListBytags = {};

  const createListForTags = (value, array) => {
    array.map((tag) => {
      if (newsListBytags[tag] === undefined) {
        newsListBytags[tag] = [];
        newsListBytags[tag].active = false;
      }
      newsListBytags[tag].push(value);
      tagsArray.indexOf(tag) === -1 && tagsArray.push(tag);
    });
  };

  nodes.filter((value) => {
    if (value.frontmatter.tags) {
      createListForTags(value, value.frontmatter.tags);
    }
  });

  const FIRST_LIST_TO_LOAD = startTag.firstTag;

  const newListEvidence = arrByEvidence.map((news) => CardCodeMap(news));
  const newRestOfList = arrNoEvidence.map((news) => CardCodeMap(news));

  const loadTagsList = (id, tag) => {
    setActiveTagButton(id);
    setActiveTag(tag);
    setTagList(newsListBytags[tag]);
  };

  const [tagList, setTagList] = useState(
    newsListBytags[FIRST_LIST_TO_LOAD] || []
  );
  const [activeTagButton, setActiveTagButton] = useState(
    `btn_tag_${FIRST_LIST_TO_LOAD}`
  );
  const [activeTag, setActiveTag] = useState(FIRST_LIST_TO_LOAD);
  const btnClassName = `btn btn-sm py-2 px-4 m-1 btn-outline-primary ${classes.borderRadius}`;
  const btnClassNameActive = `btn btn-sm py-2 px-4 m-1 btn-primary ${classes.borderRadius}`;

  const newsListByTag = tagList.map((news) => CardCodeMap(news));
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Hero>
        <div className="row">
          <div className="offset-lg-1 col-lg-6 col-md-8 mb-0 mb-lg-4">
            <div className="text-center text-sm-left pb-4">
              <h1 className="h1">Le notizie</h1>
              <p className="lead">
                Le ultime novità sull'attuazione della Strategia Cloud Italia
              </p>
            </div>
            <div className="row mb-5 mb-md-0 mb-lg-5">
              <div className="col-md-6"></div>
            </div>
          </div>
          <div className="offset-lg-1 col-md-4">
            <span className="mid-caption text-uppercase font-weight-semibold mb-2 d-block mid-caption--large">
              Contenuti
            </span>
            {tagsArray.map((tag) => (
              <button
                key={tag}
                id={`btn_tag_${tag}`}
                onClick={() => loadTagsList(`btn_tag_${tag}`, tag)}
                className={
                  activeTagButton === `btn_tag_${tag}`
                    ? btnClassNameActive
                    : btnClassName
                }
                aria-label={`Esplora i contenuti per ${tag}`}
              >
                <span className="text-nowrap">{tag}</span>
              </button>
            ))}
          </div>
        </div>
      </Hero>
      <div className="container px-4 border-top">
        <div className="row d-lg-flex">
          <div className="col-lg-7 pt-5">
            <div className="pb-4 pb-lg-0">
              <h2 className="h4 font-weight-semibold">Gli articoli</h2>
            </div>
            <div className="d-flex flex-column justify-content-start">
              {newListEvidence}
              {newRestOfList}
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 pl-lg-4 mb-3 my-lg-0 border-left pt-lg-5">
            <div className="pb-4 pb-lg-0">
              <h2 className="h4 font-weight-semibold">
                Filtro:{" "}
                <small className={classes.fontSize1_3}>
                  <i>{activeTag}</i>
                </small>
              </h2>
            </div>
            <div className="d-flex flex-column justify-content-start">
              {newsListByTag}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
