import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    '@global': {
      ul: {
        paddingLeft: '24px',
      },
      li: {
        marginBottom: '16px',
      },
      'li::marker': {
        color: 'var(--primary)',
      },
    },
  },
});

export const TextChunk = ({ html }) => {
  const classes = useStyles();

  return (
    <div className="row align-items-center my-2">
      <div className={`col-12 col-lg-7 m-auto ${classes.list}`} dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

TextChunk.propTypes = {
  html: PropTypes.string.isRequired,
};
