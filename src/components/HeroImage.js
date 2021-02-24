import React from 'react';
import { createUseStyles } from 'react-jss';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { fluidImgProptype } from '../utils/proptypes.js';

const useStyle = createUseStyles({
  hero: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  imgResponsiveWrapper: {
    position: 'absolute',
    width: ({ big }) => (big ? '100%' : '70vw'),
    height: '100%',
  },
  figure: {
    marginBottom: ({ caption }) => (caption ? '0' : 'inherit'),
  },
  caption: {
    textAlign: 'center',
    fontSize: '0.9rem',
    paddingTop: '16px',
  },
});

export const HeroImage = ({ fluidImg, alt, caption, big = true }) => {
  const classes = useStyle({ caption, big });
  const hero = classNames(`${classes.hero}`, 'it-hero-wrapper', { 'it-hero-small-size': !big });
  return (
    <>
      <figure className={classes.figure}>
        <div className={hero}>
          <div className={classes.imgResponsiveWrapper}>
            <Img fluid={fluidImg} alt={alt} style={{ position: 'initial' }} />
          </div>
        </div>
        {caption && (
          <>
            <figcaption className={classes.caption}>{caption}</figcaption>
            <hr />
          </>
        )}
      </figure>
    </>
  );
};

HeroImage.propTypes = {
  fluidImg: fluidImgProptype,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  big: PropTypes.bool,
};
