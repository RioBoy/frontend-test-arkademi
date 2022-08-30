import React from 'react';

import Header from '../parts/Header';
import CategoryNavigation from '../parts/HomePage/CategoryNavigation';

export default function HomePage() {
  return (
    <>
      <Header />
      <CategoryNavigation />
      <div className="container">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          nobis expedita beatae eos deserunt vero architecto consectetur
          perspiciatis a harum vel rerum perferendis accusantium, consequatur
          nisi minima non ducimus at.
        </div>
      </div>
    </>
  );
}
