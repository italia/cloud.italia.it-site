import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { fluidImgProptype } from '../utils/proptypes.js';

const useStyles = createUseStyles({
  heroContainer: {
    composes: 'it-hero-wrapper',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    backgroundColor: (data) => (data.theme === 'white' ? 'initial' : 'var(--primary)'),
  },
  heroRow: {
    composes: 'row',
    flexDirection: (data) => (data.imageSide === 'left' ? 'row-reverse' : 'row'),
  },
  category: {
    composes: 'text-uppercase h6',
    fontWeight: '600',
    letterSpacing: '.9px',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    color: (data) => (data.theme === 'white' ? ['var(--primary)', '!important'] : ['var(--white)', '!important']),
  },
  title: {
    composes: 'h1',
    color: (data) => (data.theme === 'white' ? ['var(--primary)', '!important'] : ['var(--white)', '!important']),
  },
  subtitle: {
    composes: 'd-none d-lg-block',
    fontSize: '1.2rem',
    color: (data) => (data.theme === 'white' ? ['var(--black)', '!important'] : ['var(--white)', '!important']),
  },
  text: {
    composes: (data) =>
      data.imageSide === 'right'
        ? 'it-hero-text-wrapper p-0 mt-4 mt-lg-0 text-center text-lg-left col-lg-10'
        : 'it-hero-text-wrapper p-0 mt-4 mt-lg-0 text-center text-lg-left col-lg-10 ml-auto',
  },
  graphicContainer: {
    composes: 'd-flex col-lg-4 justify-content-center mt-4 mt-lg-0',
  },
  graphic: {
    composes: 'rounded-circle',
    width: '378px',
    height: '378px',
    objectFit: 'cover',
  },
  '@media (max-width: 1200px)': {
    graphic: {
      width: '315px',
      height: '315px',
    },
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

export const HeroGraphic = ({
  categoryTitle,
  title,
  subtitle,
  actions,
  fluidImg,
  imageSide = 'right',
  theme = 'white',
}) => {
  const classes = useStyles({ imageSide, theme });
  const textWrapper = classNames(
    'it-hero-text-wrapper',
    'p-0',
    'mt-4',
    'mt-lg-0',
    'text-center',
    'text-lg-left',
    'col-lg-10',
    { 'ml-auto': imageSide === 'left' }
  );
  const actionsWrapper = classNames(
    'my-4',
    'mt-lg-5',
    'text-center',
    'd-flex',
    'flex-wrap',
    'justify-content-center',
    'justify-content-lg-start',
    { 'col-lg-10': imageSide === 'left', 'ml-auto': imageSide === 'left', 'pl-0': imageSide === 'left' }
  );
  return (
    <div className={classes.heroContainer}>
      <div className="container">
        <div className={classes.heroRow}>
          <div className="col-12 col-lg-8">
            <div className={textWrapper}>
              {categoryTitle && <h2 className={classes.category}>{categoryTitle}</h2>}
              <h3 className={classes.title}>{title}</h3>
              <div className={classes.subtitle}>{subtitle}</div>
            </div>
            {actions && <div className={actionsWrapper}>{actions()}</div>}
          </div>
          <div className={classes.graphicContainer}>
            <Img className={classes.graphic} fluid={fluidImg} alt="Una bella grafica" />
          </div>
        </div>
      </div>
    </div>
  );
};

HeroGraphic.propTypes = {
  categoryTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  actions: PropTypes.func,
  fluidImg: fluidImgProptype,
  imageSide: PropTypes.oneOf(['left', 'right']),
  theme: PropTypes.oneOf(['white', 'primary']),
};
