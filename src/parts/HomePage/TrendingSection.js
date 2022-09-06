import React from 'react';

import ListCard from './ListCard';

import TrendingIcon from '../../assets/img/icon-trending.svg';

export default function TrendingSection() {
  return (
    <section className="trending">
      <div className="container">
        <div className="flex items-center gap-[14px]">
          <img
            src={TrendingIcon}
            alt="Trending"
            className="h-[25px] lg:h-auto w-[25px] lg:w-auto"
          />
          <h5 className="font-extrabold text-[19px] lg:text-[26px] leading-[23px] lg:leading-[31px] text-black-primary">
            Trending
          </h5>
        </div>
        <ListCard />
      </div>
    </section>
  );
}
