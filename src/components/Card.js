import React from 'react';

import CardThumbnail from '../assets/img/thumbnail.jpg';

export default function Card() {
  return (
    <div className="card rounded-[10px] mt-[23px] overflow-hidden mb-[48px] lg:mb-[75px]">
      <img src={CardThumbnail} alt="Thumbnail" />
      <div className="flex flex-col px-[17px]">
        <span className="block font-bold text-xs text-gray-secondary mt-[14px]">
          Arkademi
        </span>
        <p className="mb-[9px] mt-[5px] font-bold text-xs text-black-primary">
          Membuat Landingpage Bagi Desainer Pemula
        </p>
        <div className="flex items-center gap-[6px]">
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.17854 0.940308L7.86582 4.21531L11.6393 4.74045L8.90894 7.28967L9.55331 10.8893L6.17854 9.18981L2.80358 10.8893L3.44817 7.28967L0.717773 4.74045L4.49106 4.21531L6.17854 0.940308Z"
              fill="#F7DE06"
              stroke="#F7DE06"
              strokeWidth="0.827172"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-semibold text-[10px] leading-[13px] text-black-third">
            4.5 <span className="font-medium ml-[6px]">(&#62; 1000)</span>
          </p>
        </div>
        <div className="flex items-center gap-[5px] mt-[14px]">
          <span className="block py-[2px] px-1 font-extrabold text-[10px] leading-[12px] text-pink-third bg-pink-secondary rounded-[3px]">
            30%
          </span>
          <span className="font-medium text-[10px] leading-[12px] text-gray-secondary">
            Rp 320.000
          </span>
        </div>
        <p className="font-extrabold text-base text-black-primary mt-[6px] mb-[18px]">
          Rp 280.000
        </p>
      </div>
    </div>
  );
}
