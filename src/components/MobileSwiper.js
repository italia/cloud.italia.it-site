import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

SwiperCore.use([Pagination, A11y]);

const useStyles = createUseStyles({
  swiperSlide: {
    '@global': {
      div: {
        boxShadow: [['none'], '!important'],
      },
    },
  },
  activeBullet: {
    composes: 'swiper-pagination-bullet-active',
    backgroundColor: ({ activeBulletBgColor }) => activeBulletBgColor,
  },
});

export const MobileSwiper = ({ slides, withShadow = true, activeBulletBgColor = '#0066CC' }) => {
  const classes = useStyles({ activeBulletBgColor });
  const swiperContainerClass = classNames({ 'shadow-lg': withShadow });
  const [paginationId, setPaginationId] = useState(null);

  // The pagination controller doesn't work with SSR, so we need to render it at runtime
  useEffect(() => {
    setPaginationId(`swiper-pagination-${Math.floor(Math.random() * 10000)}`);
  }, []);

  return (
    <>
      <div className="row d-lg-none">
        <div className="col-12">
          <Swiper
            a11y={{
              enabled: true,
              prevSlideMessage: 'Slide precedente',
              nextSlideMessage: 'Slide successiva',
              firstSlideMessage: 'Questa è la prima slide',
              lastSlideMessage: "Questa è l'ultima slide",
              paginationBulletMessage: 'Vai alla slide {{index}}',
            }}
            className={swiperContainerClass}
            slidesPerView={1}
            pagination={{
              el: `[data-swiper-id=${paginationId}]`,
              clickable: true,
              bulletClass: 'swiper-pagination-bullet p-2 mx-3',
              bulletActiveClass: classes.activeBullet,
            }}
          >
            {slides.map((slide, k) => (
              <SwiperSlide className={classes.swiperSlide} key={k}>
                {slide}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="d-flex justify-content-center pt-3 d-lg-none">
        {paginationId && <div data-swiper-id={paginationId} className="swiper-pagination"></div>}
      </div>
    </>
  );
};

MobileSwiper.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.node).isRequired,
  withShadow: PropTypes.bool,
  activeBulletBgColor: PropTypes.string,
};
