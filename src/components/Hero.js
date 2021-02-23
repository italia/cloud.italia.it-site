import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const useStyles = createUseStyles({
  heroContainer: {
    composes: 'it-hero-wrapper',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    backgroundColor: (data) => (data.theme === 'white' ? 'var(--white)' : 'var(--primary)'),
  },
  heroRow: {
    composes: 'row align-items-center',
    flexDirection: (data) => (data.imageSide === 'left' ? 'row-reverse' : 'row'),
  },
  category: {
    composes: 'it-category',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    color: (data) => (data.theme === 'white' ? ['var(--primary)', '!important'] : ['var(--white)', '!important']),
  },
  title: {
    color: (data) => (data.theme === 'white' ? ['var(--primary)', '!important'] : ['var(--white)', '!important']),
  },
  subtitle: {
    composes: 'd-none d-lg-block',
    color: (data) => (data.theme === 'white' ? ['var(--black)', '!important'] : ['var(--white)', '!important']),
  },
  graphicContainer: {
    composes: 'd-flex col-lg-6 justify-content-center mt-4 mt-lg-0',
  },
  graphic: {
    composes: 'rounded-circle',
    width: '378px',
    height: '378px',
    objectFit: 'cover',
  },
  '@media (max-width: 992px)': {
    graphicContainer: {
      order: -1,
    },
    graphic: {
      width: '250px',
      height: '250px',
    },
  },
});

export const Hero = ({ categoryTitle, title, subtitle, actions, fluidImg, imageSide = 'right', theme = 'white' }) => {
  const classes = useStyles({ imageSide, theme });
  return (
    <div className={classes.heroContainer}>
      <div className="container">
        <div className={classes.heroRow}>
          <div className="col-12 col-lg-6">
            <div className="it-hero-text-wrapper p-0 mt-4 mt-lg-0">
              {categoryTitle && <span className={classes.category}>{categoryTitle}</span>}
              <h1 className={classes.title}>{title}</h1>
              <p className={classes.subtitle}>{subtitle}</p>
              <div className="it-btn-container text-center text-lg-left mb-lg-0 mb-4">{actions()}</div>
            </div>
          </div>
          <div className={classes.graphicContainer}>
            <Img className={classes.graphic} fluid={fluidImg} alt="Una bella grafica" />
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  categoryTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  actions: PropTypes.func.isRequired,
  fluidImg: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]).isRequired,
  imageSide: PropTypes.oneOf(['left', 'right']),
  theme: PropTypes.oneOf(['white', 'primary']),
};
