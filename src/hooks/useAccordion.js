import { useState } from 'react';

export const useAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const openAccordion = (accordionNumber) => {
    if (accordionNumber === activeAccordion) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionNumber);
    }
  };

  return [activeAccordion, openAccordion];
};
