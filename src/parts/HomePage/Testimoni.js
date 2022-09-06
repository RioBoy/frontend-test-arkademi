import React from 'react';

import TestimoniList from './TestimoniList';

export default function Testimoni() {
  return (
    <section className="testimoni mt-[47px]">
      <div className="container">
        <h1 className="font-extrabold text-[25px] lg:text-[41px] leading-[30px] lg:leading-[49px] text-gray-third text-center pt-[43px] lg:pt-[65px] pb-[3px] lg:pb-[18px]">
          Testimoni
        </h1>
        <TestimoniList />
        <div className="custom-div-bullets-swiper" />
      </div>
    </section>
  );
}
