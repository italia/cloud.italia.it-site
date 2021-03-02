import React from 'react';
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

export const MobileSwiper = ({ slides, className = '', withShadow = true, activeBulletBgColor = '#0066CC' }) => {
  const classes = useStyles({ activeBulletBgColor, className });
  const swiperContainerClass = classNames(`${className}`, { 'shadow-lg': withShadow });
  return (
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
  );
};

MobileSwiper.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
  withShadow: PropTypes.bool,
  activeBulletBgColor: PropTypes.string,
};
