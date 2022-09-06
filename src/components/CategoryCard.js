import React from 'react';

export default function CategoryCard({ imgCard, altName }) {
  return (
    <a href="/">
      <div className="card-category flex lg:flex-col items-center justify-start lg:justify-center gap-[16px] py-[14px] lg:py-[27px] px-[9px] lg:px-[26px] xl:[46px] rounded-[10px]">
        <img
          src={imgCard}
          alt={altName}
          className="h-[37px] lg:h-[66px] w-[35px] lg:w-[83px] object-contain object-center"
        />
        <span className="font-semibold text-xs lg:text-[10px] lg:leading-[12px] text-black-secondary mt-0 lg:mt-[10px] whitespace-nowrap">
          {altName}
        </span>
      </div>
    </a>
  );
}
