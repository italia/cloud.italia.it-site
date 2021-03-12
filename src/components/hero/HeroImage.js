import React from 'react';
import { createUseStyles } from 'react-jss';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { gatsbyImageDataProptype } from '../../utils/proptypes.js';

const useStyle = createUseStyles({
  hero: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  imgResponsiveWrapper: {
    position: 'absolute',
    width: '100%',
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

export const HeroImage = ({ gatsbyImage, alt, caption, big = true }) => {
  const classes = useStyle({ caption, big });
  const heroClass = classNames(`${classes.hero}`, 'it-hero-wrapper', { 'it-hero-small-size': !big });
  const imgResponsiveWrapperClass = classNames(`${classes.imgResponsiveWrapper}`, {
    'col-xs-12 col-sm-10 col-md-9 col-lg-8 m-auto': !big,
    'col-12': big,
  });
  return (
    <>
      <figure className={classes.figure}>
        <div className={heroClass}>
          <div className={imgResponsiveWrapperClass}>
            <GatsbyImage image={gatsbyImage} alt={alt} style={{ position: 'initial' }} />
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
  gatsbyImage: gatsbyImageDataProptype,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  big: PropTypes.bool,
};
