import React from 'react';

import Header from '../parts/Header';
import CategoryNavigation from '../parts/HomePage/CategoryNavigation';
import TrendingSection from '../parts/HomePage/TrendingSection';
import FlashsaleSection from '../parts/HomePage/FlashsaleSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <CategoryNavigation />
      <TrendingSection />
      <FlashsaleSection />
    </>
  );
}
