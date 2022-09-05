import React from 'react';

import InstitutionList from './InstitutionList';

export default function Institution() {
  return (
    <section className="institution mb-[49px] lg:mb-[75px]">
      <div className="container">
        <div className="flex items-center justify-between mb-5 lg:mb-[27px]">
          <h5 className="font-extrabold text-base lg:text-xl text-black-primary">
            Lembaga
          </h5>
          <a
            href="/"
            className="font-extrabold text-[11px] lg:text-[15px] leading-[14px] lg:leading-[18px] text-blue-fourth"
          >
            Lihat Semua
          </a>
        </div>
        <InstitutionList />
      </div>
    </section>
  );
}
