import React from 'react';

import InstitutionList from './InstitutionList';

export default function Institution() {
  return (
    <section className="institution mb-[75px]">
      <div className="container">
        <h5 className="font-extrabold text-xl text-black-primary">Lembaga</h5>
        <InstitutionList />
      </div>
    </section>
  );
}
