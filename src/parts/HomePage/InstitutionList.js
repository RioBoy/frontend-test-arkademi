import React from 'react';

import InstitutionCard from '../../components/InstitutionCard';

export default function InstitutionList() {
  return (
    <div className="grid grid-rows-2 grid-cols-7 gap-[15px]">
      <InstitutionCard
        imgCard="/img/institution-1.png"
        altName="Media Cipta Prestasi"
      />
      <InstitutionCard
        imgCard="/img/institution-2.png"
        altName="Rewata Consultant"
      />
      <InstitutionCard imgCard="/img/institution-3.png" altName="LKP Duta" />
      <InstitutionCard
        imgCard="/img/institution-4.png"
        altName="Gadjah Mada Yogyakarta"
      />
      <InstitutionCard
        imgCard="/img/institution-5.png"
        altName="LPK Global Bontang"
      />
      <InstitutionCard
        imgCard="/img/institution-6.png"
        altName="Binuri Learning Center"
      />
      <InstitutionCard
        imgCard="/img/institution-7.png"
        altName="Senja Hasta Azizah"
      />
      <InstitutionCard imgCard="/img/institution-8.png" altName="Mitra Polri" />
      <InstitutionCard
        imgCard="/img/institution-9.png"
        altName="Surya Komputer"
      />
      <InstitutionCard imgCard="/img/institution-10.png" altName="Yes Study" />
      <InstitutionCard
        imgCard="/img/institution-11.png"
        altName="Smart Brain"
      />
      <InstitutionCard
        imgCard="/img/institution-12.png"
        altName="Avicenna Cipta Training"
      />
      <InstitutionCard imgCard="/img/institution-13.png" altName="LKP MSI" />
      <InstitutionCard
        imgCard="/img/institution-14.png"
        altName="Global Antusias Semesta"
      />
    </div>
  );
}
