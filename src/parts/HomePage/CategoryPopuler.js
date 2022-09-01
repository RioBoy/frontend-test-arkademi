import React from 'react';

import CategoryPopulerList from './CategoryPopulerList';

export default function CategoryPopuler() {
  return (
    <section className="category-populer-list mt-[65px]">
      <div className="container">
        <h5 className="font-extrabold text-xl text-black-primary">
          Kategori Terpopuler
        </h5>
        <CategoryPopulerList />
        <div className="flex justify-center mt-[37px] mb-[59px]">
          <button className="font-bold text-[13px] leading-[15px] text-blue-third py-[10px] px-[18px] bg-white rounded-[5px] border-[0.8px] border-blue-fourth">
            Lihat Semua Kategori
          </button>
        </div>
      </div>
    </section>
  );
}
