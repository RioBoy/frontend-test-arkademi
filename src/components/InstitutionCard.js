import React from 'react';

export default function InstitutionCard({ imgCard, altName }) {
  return (
    <div className="card-category flex flex-col items-center justify-center py-[17px] lg:py-[27px] px-3 lg:px-[19px] rounded-[10px]">
      <img
        src={imgCard}
        alt={altName}
        className="h-[66px] w-[83px] object-contain object-center"
      />
      <span className="font-semibold text-[10px] leading-[14px] text-black-secondary mt-[10px] text-center xl:whitespace-nowrap uppercase">
        {altName}
      </span>
    </div>
  );
}
