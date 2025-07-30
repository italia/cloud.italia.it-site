import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';
import { ExternalLink } from '../../components/ExternalLink.js';
import content from '../../../contents/home-page/home.yml';

const useStyles = createUseStyles({
  bannerSurvey: {
    backgroundColor: '#BFDFFF',
    minHeight: '316px',
  },
  bannerSurveyTitle: {
    color: 'rgba(23, 50, 77, 0.9)',
    fontSize: '2.5rem',
    '@media (min-width: 1200px)': {
      fontSize: '3rem',
      whiteSpace: 'nowrap',
    },
  },
  bannerSurveyParagraph: {
    color: 'rgba(23, 50, 77, 0.9)',
  },
  bannerSurveyTitleWrapper: {
    width: '60%',
    '@media (min-width: 992px)': {
      width: '100%',
    },
  },
  bannerSurveyShape: {
    position: 'absolute',
    height: '570px',
    width: '570px',
    bottom: '25%',
    left: '1%',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 51, 102, 1)',
    '@media (min-width: 768px)': {
      left: '45%',
    },
    '@media (min-width: 992px)': {
      width: '640px',
      height: '640px',
      left: '65%',
      top: '-90%',
    },
    '@media (min-width: 1200px)': {
      left: '80%',
    },
  },
  bannerSurveyImage: {
    position: 'relative',
    width: '100%',
    maxWidth: '165px',
    zIndex: 1,
    '@media (min-width: 992px)': {
      maxWidth: '292px',
    },
  },
  surveyButton: {
    composes: 'btn btn-sm btn-primary',
    textTransform: 'uppercase',
  },
});

const {
  SurveySection: { title, body, buttonText, buttonUrl, buttonAriaLabel, altImg },
} = content;

export const SurveySection = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.bannerSurvey} position-relative overflow-hidden`}>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-12 offset-lg-1 col-lg-6 col-xl-6 order-2 order-lg-1 pr-3 pr-lg-0 pl-3 pl-lg-0">
            <div className="it-hero-text-wrapper">
              <div className={classes.bannerSurveyTitleWrapper}>
                <h2 className={classes.bannerSurveyTitle}>{title}</h2>
              </div>
              <p className={`${classes.bannerSurveyParagraph} pt-2 pb-2 pt-lg-3 pb-lg-3 pr-3 pr-lg-0`}>{body}</p>
              <div className="it-btn-container pt-3 pt-lg-0 mb-2">
                <ExternalLink linkTo={buttonUrl} ariaLabel={buttonAriaLabel} className={classes.surveyButton}>
                  {buttonText}
                </ExternalLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-5 order-1 order-lg-2">
            <div className="d-flex justify-content-end position-relative w-100">
              <div className={classes.bannerSurveyShape}></div>
              <div className={`${classes.bannerSurveyImage} pr-3 pr-lg-0 mt-lg-3`}>
                <StaticImage
                  src="../../images/survey.png"
                  layout="fullWidth"
                  alt={altImg}
                  placeholder="blurred"
                  formats={['AUTO', 'AVIF', 'WEBP']}
                  width={292}
                  height={292}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
