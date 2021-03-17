import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from './List.js';

const Paragraph = ({ children }) => (
  <div className="row align-items-center my-2">
    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 m-auto">{children}</div>
  </div>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Paragraphs = ({ paragraphs }) =>
  paragraphs.map((paragraph, index) => {
    const classes = classNames('h5 font-weight-semibold mb-4', {
      'mt-4': index > 0,
    });
    return (
      <Paragraph key={index}>
        {paragraph.title && <h2 className={classes}>{paragraph.title}</h2>}
        <div dangerouslySetInnerHTML={{ __html: paragraph.html }} />
        {paragraph.list && <List items={paragraph.list} />}
        {paragraph.htmlFooter && <div dangerouslySetInnerHTML={{ __html: paragraph.htmlFooter }} />}
      </Paragraph>
    );
  });

Paragraphs.propTypes = {
  paragraphs: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      html: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(
        PropTypes.exact({
          html: PropTypes.string.isRequired,
        })
      ),
      htmlFooter: PropTypes.string,
    })
  ).isRequired,
};
