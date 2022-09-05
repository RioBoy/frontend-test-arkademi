import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SpecialPromo() {
  const rectangle = [
    {
      backgroundColor: 'bg-blue-primary',
    },
    {
      backgroundColor: 'bg-blue-fourth',
    },
    {
      backgroundColor: 'bg-green-secondary',
    },
  ];

  return (
    <section className="special-promo mb-[44px] lg:mb-[71px]">
      <div className="container">
        <h5 className="font-extrabold text-base lg:text-xl text-black-primary">
          Promo Spesial Untukmu
        </h5>
        <Swiper
          spaceBetween={19}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 1,
            },
            425: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 'auto',
            },
            1440: {
              slidesPerView: 'auto',
            },
          }}
          draggable={true}
          grabCursor={true}
          className="grid grid-cols-3 mt-[20px] lg:mt-[27px]"
        >
          {rectangle.map((color, index) => (
            <SwiperSlide key={index}>
              <div
                className={['h-[200px] rounded-xl', color.backgroundColor].join(
                  ' ',
                )}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
