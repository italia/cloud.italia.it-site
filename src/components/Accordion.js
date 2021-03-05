import React, { useState } from 'react';
import { Accordion as AccordionReactKit, AccordionBody, AccordionHeader } from 'design-react-kit';
import classNames from 'classnames';

export const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleClick = (accordionNumber) => {
    if (accordionNumber === activeAccordion) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionNumber);
    }
  };

  return (
    <AccordionReactKit className="bg-white shadow-lg">
      <AccordionHeader
        active={activeAccordion === 1}
        onToggle={() => handleClick(1)}
        className={classNames({ 'text-dark': activeAccordion === 1 })}
      >
        Per i cittadini
      </AccordionHeader>
      <AccordionBody active={activeAccordion === 1}>
        Servizi pubblici basati sul modello cloud garantiscono ai cittadini maggiore affidabilità, sicurezza e rispetto
        della privacy. Sono servizi progettati in maniera nativa digitale e che hanno una minore incidenza sulla spesa
        pubblica.
      </AccordionBody>

      <AccordionHeader
        active={activeAccordion === 2}
        onToggle={() => handleClick(2)}
        className={classNames({ 'text-dark': activeAccordion === 2 })}
      >
        Per le amministrazioni
      </AccordionHeader>
      <AccordionBody active={activeAccordion === 2}>
        Le amministrazioni beneficiano di risparmi significativi da reinvestire nello sviluppo di nuovi servizi,
        maggiore trasparenza sui costi e sull’utilizzo dei servizi, agilità e scalabilità nella gestione delle
        infrastrutture.
      </AccordionBody>

      <AccordionHeader
        active={activeAccordion === 3}
        onToggle={() => handleClick(3)}
        className={classNames({ 'text-dark': activeAccordion === 3 })}
      >
        Per le PMI dell’ICT che operano nel settore pubblico
      </AccordionHeader>
      <AccordionBody active={activeAccordion === 3}>
        Le piccole e medie imprese (PMI) nel settore delle tecnologie digitali sono chiamate ad accompagnare le
        amministrazioni verso l’adozione di soluzioni in cloud per i propri servizi, aumentando la qualità e la quantità
        di servizi qualificati. Rappresentano un elemento di stimolo per il settore pubblico nel rivolgersi a un mercato
        maturo per le soluzioni cloud.
      </AccordionBody>
    </AccordionReactKit>
  );
};
