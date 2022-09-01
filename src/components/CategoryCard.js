import React from 'react';

export default function CategoryCard({ imgCard, altName }) {
  return (
    <a href="/">
      <div className="card-category flex flex-col items-center justify-center py-[27px] px-[46px] rounded-[10px]">
        <img
          src={imgCard}
          alt={altName}
          className="h-[66px] w-[83px] object-contain object-center"
        />
        <span className="font-semibold text-[10px] leading-[12px] text-black-secondary mt-[10px] whitespace-nowrap">
          {altName}
        </span>
      </div>
    </a>
  );
}
