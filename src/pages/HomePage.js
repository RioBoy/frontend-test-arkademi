import React from 'react';

import Header from '../parts/Header';
import CategoryNavigation from '../parts/HomePage/CategoryNavigation';
import TrendingSection from '../parts/HomePage/TrendingSection';
import FlashsaleSection from '../parts/HomePage/FlashsaleSection';
import CategoryPopuler from '../parts/HomePage/CategoryPopuler';
import SpecialPromo from '../parts/HomePage/SpecialPromo';
import Institution from '../parts/HomePage/Institution';

export default function HomePage() {
  return (
    <>
      <Header />
      <CategoryNavigation />
      <TrendingSection />
      <FlashsaleSection />
      <CategoryPopuler />
      <SpecialPromo />
      <Institution />
    </>
  );
}
