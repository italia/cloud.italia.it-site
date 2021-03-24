import React from 'react';
import { AccordionBody, AccordionHeader } from 'design-react-kit';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const AccordionEntry = ({ active, onToggle, header, body, headerClassName = '', bodyClassName = '' }) => (
  <>
    <AccordionHeader
      active={active}
      onToggle={onToggle}
      className={classNames(headerClassName, { 'text-dark': active })}
    >
      {header()}
    </AccordionHeader>
    <AccordionBody active={active} className={bodyClassName}>
      {body()}
    </AccordionBody>
  </>
);

AccordionEntry.propTypes = {
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  header: PropTypes.func.isRequired,
  headerClassName: PropTypes.string,
  body: PropTypes.func.isRequired,
  bodyClassName: PropTypes.string,
};
