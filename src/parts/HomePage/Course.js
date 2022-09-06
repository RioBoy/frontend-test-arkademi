import React from 'react';

import Card from '../../components/Card';

export default function Class({ list }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <h5 className="font-extrabold text-base lg:text-xl text-black-primary">
          {list.headerName}
        </h5>
        <a
          href="/"
          className="font-extrabold text-[11px] l:text-[15px] leading-[14px] lg:leading-[18px] text-blue-fourth"
        >
          Lihat Semua
        </a>
      </div>
      <div className="list-card mt-[3px] lg:mt-[7px]">
        <div className="grid grid-cols-4 gap-[15px]">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
