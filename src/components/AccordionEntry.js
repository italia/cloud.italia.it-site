import React from 'react';
import { AccordionBody, AccordionHeader } from 'design-react-kit';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const AccordionEntry = ({ active, onToggle, header, body, bodyClassNames = '' }) => (
  <>
    <AccordionHeader active={active} onToggle={onToggle} className={classNames({ 'text-dark': active })}>
      {header()}
    </AccordionHeader>
    <AccordionBody active={active} className={bodyClassNames}>
      {body()}
    </AccordionBody>
  </>
);

AccordionEntry.propTypes = {
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  header: PropTypes.func.isRequired,
  body: PropTypes.func.isRequired,
  bodyClassNames: PropTypes.string,
};
