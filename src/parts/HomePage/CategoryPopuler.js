import React from 'react';

import CategoryPopulerList from './CategoryPopulerList';

export default function CategoryPopuler() {
  return (
    <section className="category-populer-list mt-[48px] lg:mt-[65px]">
      <div className="container">
        <h5 className="font-extrabold text-base lg:text-xl text-black-primary">
          Kategori Terpopuler
        </h5>
        <CategoryPopulerList />
        <div className="flex justify-center mt-[25px] lg:mt-[37px] mb-[44px] lg:mb-[59px]">
          <button className="font-bold text-[11px] lg:text-[13px] leading-[13px] lg:leading-[15px] text-black-secondary lg:text-blue-third py-[9px] lg:py-[10px] px-[15px] lg:px-[18px] bg-white rounded-[5px] border-[0.8px] border-gray-third lg:border-blue-fourth">
            Lihat Semua Kategori
          </button>
        </div>
      </div>
    </section>
  );
}
