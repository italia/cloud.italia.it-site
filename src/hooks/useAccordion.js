import { useState } from 'react';

export const useAccordion = ({ noActiveOnInit = false } = {}) => {
  const [activeAccordion, setActiveAccordion] = useState(noActiveOnInit ? 0 : 1);

  const openAccordion = (accordionNumber) => {
    if (accordionNumber === activeAccordion) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionNumber);
    }
  };

  return [activeAccordion, openAccordion];
};
