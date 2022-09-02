import React from 'react';

import TestimoniList from './TestimoniList';

export default function Testimoni() {
  return (
    <section className="testimoni mt-[47px]">
      <div className="container">
        <h1 className="font-extrabold text-[41px] leading-[49px] text-gray-third text-center pt-[65px] pb-[18px]">
          Testimoni
        </h1>
        <TestimoniList />
      </div>
    </section>
  );
}
