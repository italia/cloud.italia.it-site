import React from 'react';
import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination, A11y]);

const Strategia = () => (
  <main className="container">
    <div>Strategia Nazionale</div>
    <Swiper
      a11y={{
        enabled: true,
        prevSlideMessage: 'Slide precedente',
        nextSlideMessage: 'Slide successiva',
        firstSlideMessage: 'Questa è la prima slide',
        lastSlideMessage: "Questa è l'ultima slide",
        paginationBulletMessage: 'Vai alla slide {{index}}',
      }}
      className="d-lg-none"
      slidesPerView={1}
      pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet p-2 mx-3' }}
    >
      <SwiperSlide className="my-5">
        <div className="card rounded ">
          <div className="card-body d-flex flex-column">
            <p className="card-text text-secondary">
              <span>16 gennaio 2021</span>
            </p>
            <h3 className="h4 text-primary mid-caption--xlarge font-weight-bold">
              <a
                href="/notizie/comunicati-stampa/smarter-italy-al-via-borghi-del-futuro"
                className="text-decoration-none"
              >
                Smarter Italy: al via “Borghi del futuro”
              </a>
            </h3>
            <p className="pt-2 mid-caption--large">
              Il programma entra nel vivo con l’adesione di 12 borghi dove sperimentare soluzioni tecnologiche
              emergenti
            </p>
          </div>
          <div className="mt-auto d-flex flex-wrap-reverse flex-row-reverse align-items-end"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-5">
        <div className="card rounded ">
          <div className="card-body d-flex flex-column">
            <p className="card-text text-secondary">
              <span>16 gennaio 2021</span>
            </p>
            <h3 className="h4 text-primary mid-caption--xlarge font-weight-bold">
              <a
                href="/notizie/comunicati-stampa/smarter-italy-al-via-borghi-del-futuro"
                className="text-decoration-none"
              >
                Smarter Italy: al via “Borghi del futuro”
              </a>
            </h3>
            <p className="pt-2 mid-caption--large">
              Il programma entra nel vivo con l’adesione di 12 borghi dove sperimentare soluzioni tecnologiche
              emergenti
            </p>
          </div>
          <div className="mt-auto d-flex flex-wrap-reverse flex-row-reverse align-items-end"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="my-5">
        <div className="card rounded ">
          <div className="card-body d-flex flex-column">
            <p className="card-text text-secondary">
              <span>16 gennaio 2021</span>
            </p>
            <h3 className="h4 text-primary mid-caption--xlarge font-weight-bold">
              <a
                href="/notizie/comunicati-stampa/smarter-italy-al-via-borghi-del-futuro"
                className="text-decoration-none"
              >
                Smarter Italy: al via “Borghi del futuro”
              </a>
            </h3>
            <p className="pt-2 mid-caption--large">
              Il programma entra nel vivo con l’adesione di 12 borghi dove sperimentare soluzioni tecnologiche
              emergenti
            </p>
          </div>
          <div className="mt-auto d-flex flex-wrap-reverse flex-row-reverse align-items-end"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  </main>
);

export default Strategia;
