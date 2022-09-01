import React from 'react';

import InstitutionList from './InstitutionList';

export default function Institution() {
  return (
    <section className="institution mb-[75px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <h5 className="font-extrabold text-xl text-black-primary">Lembaga</h5>
          <a
            href="/"
            className="font-extrabold text-[15px] leading-[18px] text-blue-fourth"
          >
            Lihat Semua
          </a>
        </div>
        <InstitutionList />
      </div>
    </section>
  );
}
