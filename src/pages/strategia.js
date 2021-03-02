import React from 'react';
import { createUseStyles } from 'react-jss';
import { MobileSwiper } from '../components/MobileSwiper.js';

const useStyles = createUseStyles({
  container: {
    composes: 'section',
    backgroundColor: '#0bd9d2',
  },
  hugeNumbers: {
    composes: 'font-weight-semibold text-center text-lg-left',
    fontSize: '76px',
  },
});

const Strategia = () => {
  const classes = useStyles();
  const slides = [
    <>
      <div className={classes.hugeNumbers}>16</div>
      <div className="h6 text-center text-lg-left">milioni di identità SPID rilasciate</div>
    </>,
    <>
      <div className={classes.hugeNumbers}>101</div>
      <div className="h6 text-center text-lg-left">milioni di transazioni su pagoPA nel 2020</div>
    </>,
    <>
      <div className={classes.hugeNumbers}>91%</div>
      <div className="h6 text-center text-lg-left">dei Comuni su ANPR</div>
    </>,
  ];
  return (
    <>
      <div>Strategia Nazionale</div>
      <div className={classes.container}>
        <h2 className="h6 text-uppercase text-center text-lg-left py-3 py-lg-0">I numeri dell&apos;innovazione</h2>
        <div className="d-none d-lg-block row">
          <div className="col-lg-9">
            <div className="my-4 row">
              {slides.map((slide, k) => (
                <div className="col-lg-4" key={k}>
                  {slide}
                </div>
              ))}
            </div>
          </div>
        </div>
        <MobileSwiper slides={slides} className="pb-5" withShadow={false} activeBulletBgColor="#33485C" />
      </div>
    </>
  );
};

export default Strategia;
