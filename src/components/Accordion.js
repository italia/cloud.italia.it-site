import React, { useState } from 'react';
import { Accordion as AccordionReactKit, AccordionBody, AccordionHeader } from 'design-react-kit';

export const Accordion = () => {
  const [active, setActive] = useState(false);

  return (
    <AccordionReactKit>
      <AccordionHeader active={active} onToggle={() => setActive(!active)} className="text-dark">
        Accordion Group Item #1
      </AccordionHeader>
      <AccordionBody active={active}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
        officia aute, non cupidatat skateboard dolor brunch.
      </AccordionBody>

      <AccordionHeader active={active} onToggle={() => setActive(!active)}>
        Accordion Group Item #2
      </AccordionHeader>
      <AccordionBody active={active}>
        Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
        nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
      </AccordionBody>

      <AccordionHeader active={active} onToggle={() => setActive(!active)}>
        Accordion Group Item #3
      </AccordionHeader>
      <AccordionBody active={active}>
        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
        anderson cred nesciunt sapiente ea proident.
      </AccordionBody>
    </AccordionReactKit>
  );
};
