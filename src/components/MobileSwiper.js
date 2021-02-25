import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { createUseStyles } from 'react-jss';

SwiperCore.use([Pagination, A11y]);

const useStyles = createUseStyles({
  swiperSlide: {
    '@global': {
      div: {
        boxShadow: [['none'], '!important'],
      },
    },
  },
});

export const MobileSwiper = ({ slides }) => {
  const classes = useStyles();
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
            className="shadow-lg"
            slidesPerView={1}
            pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet p-2 mx-3' }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide className={classes.swiperSlide} key={index}>
                {slide}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

MobileSwiper.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.node).isRequired,
};
