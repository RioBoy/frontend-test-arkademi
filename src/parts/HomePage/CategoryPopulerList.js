import React from 'react';
import CategoryCard from '../../components/CategoryCard';

import BisnisImg from '../../assets/img/bisnis.png';
import MoneyImg from '../../assets/img/keuangan.png';
import CarierImg from '../../assets/img/pengembangan-karier.png';
import CertificateImg from '../../assets/img/sertifikasi.png';
import TechnologyImg from '../../assets/img/teknologi.png';
import HobbyImg from '../../assets/img/hobi.png';
import LanguageImg from '../../assets/img/bahasa.png';

export default function CategoryPopulerList() {
  return (
    <div className="grid grid-cols-7 gap-[15px] mt-[27px]">
      <CategoryCard imgCard={BisnisImg} altName="Bisnis" />
      <CategoryCard imgCard={MoneyImg} altName="Keuangan" />
      <CategoryCard imgCard={CarierImg} altName="Pengembangan Karir" />
      <CategoryCard imgCard={CertificateImg} altName="Sertifikasi" />
      <CategoryCard imgCard={TechnologyImg} altName="Teknologi" />
      <CategoryCard imgCard={HobbyImg} altName="Hobi" />
      <CategoryCard imgCard={LanguageImg} altName="Bahasa" />
    </div>
  );
}
